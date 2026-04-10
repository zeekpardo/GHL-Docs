#!/usr/bin/env node

/**
 * Modal Support Knowledge Base Crawler
 *
 * Crawls https://app.modalsupport.com and imports all articles into
 * the Starlight docs as markdown files.
 *
 * Flow:
 * 1. Navigate to any category page (has full sidebar of 50+ categories)
 * 2. Extract all categories from the sidebar
 * 3. For each category, find all article links
 * 4. For each article, extract title from h2.category-title
 *    and content from #articleContent
 * 5. Convert HTML to Markdown and save with frontmatter
 */

import { chromium } from 'playwright';
import { load } from 'cheerio';
import TurndownService from 'turndown';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration
const BASE_URL = 'https://app.modalsupport.com';
const PUBLISH_ID = 'ZeRAsZjqowLqb1w85XkX';
const OUTPUT_DIR = path.join(__dirname, 'docs/src/content/docs');

// Initial seed category - used to discover all other categories via sidebar
const SEED_CATEGORY_ID = '1gEKVdfKBOe7OFfJBUnu'; // Dashboard

// Timing configuration
const PAGE_LOAD_WAIT = 3000;  // Wait for JS to render
const BETWEEN_REQUESTS = 400;  // Rate limiting
const NAVIGATION_TIMEOUT = 40000;

// Optional filters (env vars) — useful for testing on a subset before a full crawl
//   ONLY_CATEGORY=Dashboard          → only crawl categories whose name contains "Dashboard"
//   MAX_ARTICLES=3                   → only crawl the first N articles per category
const ONLY_CATEGORY = process.env.ONLY_CATEGORY || null;
const MAX_ARTICLES = process.env.MAX_ARTICLES ? parseInt(process.env.MAX_ARTICLES, 10) : null;

// Turndown (HTML → Markdown) configuration
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
});

turndownService.addRule('strikethrough', {
  filter: ['s', 'del'],
  replacement: content => `~~${content}~~`,
});

// Remove trailing empty list items which turndown sometimes creates
turndownService.addRule('emptyListItems', {
  filter: node => node.nodeName === 'LI' && !node.textContent.trim(),
  replacement: () => '',
});

// Global state
let browser;
let page;
const visitedArticles = new Set();

// ========== Browser Management ==========

async function init() {
  console.log('Starting browser...');
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  page.setDefaultTimeout(NAVIGATION_TIMEOUT);
}

async function close() {
  if (browser) await browser.close();
}

async function loadPage(url) {
  try {
    await page.goto(url, { waitUntil: 'load', timeout: NAVIGATION_TIMEOUT });
    await page.waitForTimeout(PAGE_LOAD_WAIT);
    return await page.content();
  } catch (error) {
    console.error(`  ✗ Failed to load ${url}: ${error.message}`);
    return null;
  }
}

// ========== Discovery Functions ==========

/**
 * Discover all categories by loading a category page and parsing the sidebar
 */
async function discoverAllCategories() {
  console.log('\n=== Discovering all categories ===\n');

  // Load a seed category page - it will have the full category sidebar
  const seedUrl = `${BASE_URL}/ArticleCategoriesDetails/${PUBLISH_ID}/${SEED_CATEGORY_ID}`;
  console.log(`Loading seed page: ${seedUrl}`);

  const html = await loadPage(seedUrl);
  if (!html) {
    throw new Error('Failed to load seed category page');
  }

  const $ = load(html);
  const categories = new Map();

  // Find all category links (using case-insensitive matching for URL path)
  $('a[href*="ategoriesDetails"]').each((i, el) => {
    const href = $(el).attr('href') || '';
    const text = $(el).text().trim();

    // Skip empty or junk text
    if (!text || text.length < 2 || text.length > 100) return;
    if (text.toLowerCase().includes('view all')) return;

    // Extract category ID from URL
    const match = href.match(/[aA]rticle[cC]ategories[dD]etails\/[^/]+\/([^/?#]+)/);
    if (!match) return;

    const categoryId = match[1];

    // Deduplicate - first occurrence wins
    if (!categories.has(categoryId)) {
      categories.set(categoryId, {
        id: categoryId,
        name: text,
        slug: slugify(text),
      });
    }
  });

  const categoryList = Array.from(categories.values());
  console.log(`\nFound ${categoryList.length} categories:`);
  categoryList.forEach(cat => console.log(`  • ${cat.name}`));

  return categoryList;
}

/**
 * Get all article IDs from a category page
 */
async function getArticlesInCategory(category) {
  const url = `${BASE_URL}/ArticleCategoriesDetails/${PUBLISH_ID}/${category.id}`;
  console.log(`\n  Loading: ${category.name}`);

  const html = await loadPage(url);
  if (!html) return [];

  const $ = load(html);
  const articles = [];
  const seenIds = new Set();

  $('a[href*="/article/details/"]').each((i, el) => {
    const href = $(el).attr('href') || '';
    const text = $(el).text().trim();

    // Skip junk
    if (!text || text.length > 300) return;

    // Extract article ID
    const match = href.match(/\/article\/details\/[^/]+\/([^?#]+)/);
    if (!match) return;

    const articleId = match[1];

    // Deduplicate
    if (seenIds.has(articleId)) return;
    seenIds.add(articleId);

    articles.push({
      id: articleId,
      title: text,
      category: category,
    });
  });

  console.log(`  → ${articles.length} articles`);
  return articles;
}

// ========== Article Extraction ==========

/**
 * Fetch an article and extract its content
 */
async function fetchArticle(article) {
  const url = `${BASE_URL}/article/details/${PUBLISH_ID}/${article.id}`;

  const html = await loadPage(url);
  if (!html) return null;

  return extractArticleData(html, article);
}

/**
 * Parse HTML to extract title, content, and convert to markdown
 */
function extractArticleData(html, article) {
  const $ = load(html);

  // Extract title - prefer h2.category-title, fallback to link text
  let title = $('h2.category-title, h2.category-title-link').first().text().trim();
  if (!title) {
    title = $('h1').first().text().trim();
  }
  if (!title) {
    title = article.title; // Use title from category listing
  }

  // Normalize title whitespace (collapse multiple spaces, trim)
  title = title.replace(/\s+/g, ' ').trim();

  // Extract main article content from #articleContent
  const $content = $('#articleContent');
  if ($content.length === 0 || $content.html()?.trim().length < 50) {
    // Article didn't render - probably JS didn't finish
    return null;
  }

  // Clean up content before converting
  $content.find('script, style, iframe, noscript').remove();

  // Remove "rating" / reaction UI (emoji feedback widgets)
  $content.find('[class*="rating"], [class*="feedback"], [class*="reaction"]').remove();

  // Convert relative image URLs to absolute
  $content.find('img').each((i, img) => {
    const src = $(img).attr('src');
    if (src && src.startsWith('/')) {
      $(img).attr('src', BASE_URL + src);
    }
  });

  // Extract description from first meaningful paragraph (before converting)
  let description = '';
  $content.find('p').each((i, p) => {
    if (description) return;
    const text = $(p).text().replace(/\s+/g, ' ').trim();
    if (text.length >= 20) {
      description = text.substring(0, 160).trim();
      // Don't cut mid-word
      if (text.length > 160) {
        const lastSpace = description.lastIndexOf(' ');
        if (lastSpace > 100) description = description.substring(0, lastSpace) + '…';
      }
    }
  });
  if (!description) description = title;

  // Convert to markdown
  const contentHtml = $content.html() || '';
  let markdown = turndownService.turndown(contentHtml);

  // Strip trailing navigation/nav chrome:
  //   - "Did this answer your question?" + emoji reactions
  //   - Related-articles list at the bottom
  markdown = stripTrailingNav(markdown);

  // Fix FAQ formatting — Turndown produces **Question: ...**Answer: on one line
  markdown = formatFAQs(markdown);

  // Clean up whitespace
  markdown = markdown
    .trim()
    .replace(/\n\n\n+/g, '\n\n')  // Max 2 newlines in a row
    .replace(/^[ \t]+$/gm, '');     // Remove whitespace-only lines

  // Skip if content is too short (likely failed to render)
  if (markdown.length < 80) {
    return null;
  }

  return {
    id: article.id,
    title,
    description,
    category: article.category,
    content: markdown,
    sourceUrl: `${BASE_URL}/article/details/${PUBLISH_ID}/${article.id}`,
  };
}

/**
 * Strip trailing navigation chrome from the end of an article's markdown.
 * The Modal SPA appends "Did this answer your question?" + emoji reactions +
 * a list of related articles at the end of #articleContent.
 */
function stripTrailingNav(markdown) {
  // Cut at "Did this answer your question?" if present
  const answerIdx = markdown.search(/did this answer your question/i);
  if (answerIdx !== -1) {
    markdown = markdown.substring(0, answerIdx);
  }

  // Cut at any trailing block of related-article links
  // (many consecutive lines starting with "*   [" linking to /article/details/)
  const relatedIdx = markdown.search(/(\n\*\s+\[[^\]]*\]\(\/article\/details\/[^\n]*\n){3,}/);
  if (relatedIdx !== -1) {
    markdown = markdown.substring(0, relatedIdx);
  }

  return markdown.trimEnd();
}

/**
 * Fix FAQ formatting in markdown.
 * Turndown produces patterns like:
 *   **Question: some text?**Answer: the answer
 *   **Question: some text?****Answer:** the answer
 * This normalizes them to:
 *   **Question:** some text?
 *   **Answer:** the answer
 */
function formatFAQs(markdown) {
  // Split combined **Question: ...**Answer: lines
  // Handles: **Question: text?**Answer: text
  //          **Question: text?****Answer:** text
  //          **Question: text?****Answer:**** text
  markdown = markdown.replace(
    /\*\*Question:\s*(.*?)\*{2,}\s*\*{0,2}Answer:\*{0,2}\s*/gi,
    '\n**Question:** $1\n**Answer:** '
  );

  // Handle standalone Answer: that isn't bold yet
  markdown = markdown.replace(
    /^Answer:\s*/gm,
    '**Answer:** '
  );

  // Handle **Answer: without closing **
  markdown = markdown.replace(
    /^\*\*Answer:\s+(?!\*)/gm,
    '**Answer:** '
  );

  // Clean up any stray **** (4+ asterisks) from edge cases
  markdown = markdown.replace(/\*{4,}/g, '**');

  return markdown;
}

// ========== File Output ==========

/**
 * Convert a string to a URL-safe slug
 */
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 100);
}

/**
 * Escape a string for use in YAML frontmatter
 */
function yamlEscape(str) {
  return (str || '').replace(/"/g, '\\"').replace(/\n/g, ' ').trim();
}

/**
 * Save an extracted article as a markdown file
 */
async function saveArticle(article) {
  const categoryDir = path.join(OUTPUT_DIR, article.category.slug);
  await fs.mkdir(categoryDir, { recursive: true });

  const filename = slugify(article.title) + '.md';
  const filepath = path.join(categoryDir, filename);

  // Skip if file already exists
  try {
    await fs.access(filepath);
    return 'exists';
  } catch {
    // File doesn't exist, proceed
  }

  const frontmatter = [
    '---',
    `title: "${yamlEscape(article.title)}"`,
    `description: "${yamlEscape(article.description)}"`,
    `sourceUrl: "${article.sourceUrl}"`,
    `sourceId: "${article.id}"`,
    `category: "${yamlEscape(article.category.name)}"`,
    '---',
    '',
    '',
  ].join('\n');

  await fs.writeFile(filepath, frontmatter + article.content, 'utf-8');
  return 'saved';
}

// ========== Main Crawl ==========

async function crawl() {
  const startTime = Date.now();

  const stats = {
    categoriesFound: 0,
    articlesFound: 0,
    articlesSaved: 0,
    articlesSkipped: 0,
    articlesFailed: 0,
  };

  try {
    await init();

    // Step 1: Discover all categories
    let categories = await discoverAllCategories();

    // Apply ONLY_CATEGORY filter if set
    if (ONLY_CATEGORY) {
      const needle = ONLY_CATEGORY.toLowerCase();
      categories = categories.filter(c =>
        c.name.toLowerCase().includes(needle) || c.id === ONLY_CATEGORY
      );
      console.log(`\n⚑ ONLY_CATEGORY="${ONLY_CATEGORY}" → ${categories.length} categories match`);
    }

    stats.categoriesFound = categories.length;

    if (categories.length === 0) {
      console.log('\n✗ No categories found, aborting');
      return;
    }

    // Step 2: Collect all articles from all categories
    console.log(`\n\n=== Collecting articles from ${categories.length} categories ===`);

    const allArticles = [];
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      console.log(`\n[${i + 1}/${categories.length}] ${category.name}`);

      let articles = await getArticlesInCategory(category);

      // Apply MAX_ARTICLES limit if set
      if (MAX_ARTICLES && articles.length > MAX_ARTICLES) {
        articles = articles.slice(0, MAX_ARTICLES);
        console.log(`  ⚑ MAX_ARTICLES=${MAX_ARTICLES} → limited`);
      }

      allArticles.push(...articles);

      await page.waitForTimeout(BETWEEN_REQUESTS);
    }

    stats.articlesFound = allArticles.length;
    console.log(`\n\nTotal articles to process: ${allArticles.length}`);

    // Step 3: Fetch and save each article
    console.log(`\n\n=== Extracting articles ===\n`);

    for (let i = 0; i < allArticles.length; i++) {
      const article = allArticles[i];

      // Skip duplicates (articles can appear in multiple categories)
      if (visitedArticles.has(article.id)) continue;
      visitedArticles.add(article.id);

      const prefix = `[${i + 1}/${allArticles.length}]`;
      const catName = article.category.name.substring(0, 20).padEnd(20);
      const titleShort = article.title.substring(0, 50);

      process.stdout.write(`${prefix} ${catName} │ ${titleShort}`);

      const extracted = await fetchArticle(article);

      if (!extracted) {
        console.log(' ✗ failed');
        stats.articlesFailed++;
        await page.waitForTimeout(BETWEEN_REQUESTS);
        continue;
      }

      const result = await saveArticle(extracted);

      if (result === 'saved') {
        console.log(' ✓');
        stats.articlesSaved++;
      } else if (result === 'exists') {
        console.log(' • exists');
        stats.articlesSkipped++;
      }

      await page.waitForTimeout(BETWEEN_REQUESTS);
    }

  } catch (error) {
    console.error('\n✗ Fatal error:', error.message);
    console.error(error.stack);
  } finally {
    await close();
  }

  // Print summary
  const elapsedSec = Math.round((Date.now() - startTime) / 1000);
  const mins = Math.floor(elapsedSec / 60);
  const secs = elapsedSec % 60;

  console.log('\n\n' + '='.repeat(50));
  console.log('Crawl complete');
  console.log('='.repeat(50));
  console.log(`Time:         ${mins}m ${secs}s`);
  console.log(`Categories:   ${stats.categoriesFound}`);
  console.log(`Articles:     ${stats.articlesFound} found`);
  console.log(`  saved:      ${stats.articlesSaved}`);
  console.log(`  skipped:    ${stats.articlesSkipped} (already exist)`);
  console.log(`  failed:     ${stats.articlesFailed}`);
  console.log('='.repeat(50));
}

crawl();
