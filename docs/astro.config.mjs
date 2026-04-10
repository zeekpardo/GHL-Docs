// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import markdocGrammar from './grammars/markdoc.tmLanguage.json';

export const locales = {
	root: { label: 'English', lang: 'en' },
	de: { label: 'Deutsch', lang: 'de' },
	es: { label: 'Español', lang: 'es' },
	ja: { label: '日本語', lang: 'ja' },
	fr: { label: 'Français', lang: 'fr' },
	it: { label: 'Italiano', lang: 'it' },
	id: { label: 'Bahasa Indonesia', lang: 'id' },
	'zh-cn': { label: '简体中文', lang: 'zh-CN' },
	'pt-br': { label: 'Português do Brasil', lang: 'pt-BR' },
	'pt-pt': { label: 'Português', lang: 'pt-PT' },
	ko: { label: '한국어', lang: 'ko' },
	tr: { label: 'Türkçe', lang: 'tr' },
	ru: { label: 'Русский', lang: 'ru' },
	hi: { label: 'हिंदी', lang: 'hi' },
	da: { label: 'Dansk', lang: 'da' },
	uk: { label: 'Українська', lang: 'uk' },
};

/* https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables */
const NETLIFY_PREVIEW_SITE = process.env.CONTEXT !== 'production' && process.env.DEPLOY_PRIME_URL;

const site = NETLIFY_PREVIEW_SITE || 'https://help.example.com/';
const ogUrl = new URL('og.jpg?v=1', site).href;
const ogImageAlt = 'Help Center';

export default defineConfig({
	site,
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'Help Center',
			lastUpdated: true,
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.usefathom.com/script.js',
						'data-site': 'EZBHTSIG',
						defer: true,
					},
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: ogUrl },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image:alt', content: ogImageAlt },
				},
			],
			customCss: ['./src/assets/landing.css'],
			locales,
			sidebar: [
				{
					label: 'Dashboard & Reporting',
					collapsed: true,
					items: [
						{ label: 'Dashboard', collapsed: true, autogenerate: { directory: 'dashboard' } },
						{ label: 'Reporting', collapsed: true, autogenerate: { directory: 'reporting' } },
					],
				},
				{
					label: 'Contacts & CRM',
					collapsed: true,
					items: [
						{ label: 'Contacts', collapsed: true, autogenerate: { directory: 'contacts' } },
						{ label: 'Opportunities', collapsed: true, autogenerate: { directory: 'opportunities' } },
						{ label: 'Custom Objects', collapsed: true, autogenerate: { directory: 'custom-objects' } },
					],
				},
				{
					label: 'Conversations & Messaging',
					collapsed: true,
					items: [
						{ label: 'Conversations', collapsed: true, autogenerate: { directory: 'conversations' } },
						{ label: 'WhatsApp', collapsed: true, autogenerate: { directory: 'whatsapp' } },
						{ label: 'Phone', collapsed: true, autogenerate: { directory: 'phone' } },
						{ label: 'LC Phone', collapsed: true, autogenerate: { directory: 'lc-phone' } },
						{ label: 'Communities', collapsed: true, autogenerate: { directory: 'communities' } },
					],
				},
				{
					label: 'Workflows & Automation',
					collapsed: true,
					items: [
						{ label: 'Workflow', collapsed: true, autogenerate: { directory: 'workflow' } },
						{ label: 'Workflow Triggers', collapsed: true, autogenerate: { directory: 'workflow-triggers' } },
						{ label: 'Workflow Actions', collapsed: true, autogenerate: { directory: 'workflow-actions' } },
						{ label: 'Workflow Guides', collapsed: true, autogenerate: { directory: 'workflow-guides' } },
						{ label: 'Premium Triggers & Actions', collapsed: true, autogenerate: { directory: 'workflow-premium-triggers-and-actions' } },
						{ label: 'Triggers', collapsed: true, autogenerate: { directory: 'triggers' } },
						{ label: 'Campaigns (Automation)', collapsed: true, autogenerate: { directory: 'campaigns-automation' } },
					],
				},
				{
					label: 'Sites & Content',
					collapsed: true,
					items: [
						{ label: 'Funnels & Websites', collapsed: true, autogenerate: { directory: 'funnels-and-websites' } },
						{ label: 'Site Builder', collapsed: true, autogenerate: { directory: 'site-builder' } },
						{ label: 'Blogs', collapsed: true, autogenerate: { directory: 'blogs' } },
						{ label: 'Forms', collapsed: true, autogenerate: { directory: 'forms' } },
						{ label: 'Memberships', collapsed: true, autogenerate: { directory: 'memberships' } },
						{ label: 'Webinars', collapsed: true, autogenerate: { directory: 'webinars' } },
						{ label: 'Quizzes', collapsed: true, autogenerate: { directory: 'quizzes' } },
						{ label: 'Brand Boards', collapsed: true, autogenerate: { directory: 'brand-boards' } },
					],
				},
				{
					label: 'Marketing',
					collapsed: true,
					items: [
						{ label: 'Facebook Ad Launcher', collapsed: true, autogenerate: { directory: 'facebook-ad-launcher' } },
						{ label: 'Ad Manager', collapsed: true, autogenerate: { directory: 'ad-manager' } },
						{ label: 'Social Media', collapsed: true, autogenerate: { directory: 'social-media' } },
						{ label: 'Email Campaigns', collapsed: true, autogenerate: { directory: 'email-campaigns' } },
						{ label: 'Email & SMTP', collapsed: true, autogenerate: { directory: 'email-smtp' } },
						{ label: 'Reputation & Reviews', collapsed: true, autogenerate: { directory: 'reputation-management-and-reviews' } },
					],
				},
				{
					label: 'AI Features',
					collapsed: true,
					items: [
						{ label: 'AI Features', collapsed: true, autogenerate: { directory: 'ai-features' } },
						{ label: 'Conversation AI', collapsed: true, autogenerate: { directory: 'conversation-ai' } },
						{ label: 'Voice AI', collapsed: true, autogenerate: { directory: 'voice-ai' } },
					],
				},
				{
					label: 'Payments & Commerce',
					collapsed: true,
					items: [
						{ label: 'Payments', collapsed: true, autogenerate: { directory: 'payments' } },
						{ label: 'Stores', collapsed: true, autogenerate: { directory: 'stores' } },
						{ label: 'Affiliate', collapsed: true, autogenerate: { directory: 'affiliate' } },
					],
				},
				{
					label: 'Integrations',
					collapsed: true,
					items: [
						{ label: 'Integrations', collapsed: true, autogenerate: { directory: 'integrations' } },
						{ label: 'Mailgun', collapsed: true, autogenerate: { directory: 'mailgun' } },
						{ label: 'WordPress', collapsed: true, autogenerate: { directory: 'wordpress' } },
						{ label: 'Webhooks', collapsed: true, autogenerate: { directory: 'webhooks' } },
					],
				},
				{
					label: 'Settings & Admin',
					collapsed: true,
					items: [
						{ label: 'Settings', collapsed: true, autogenerate: { directory: 'settings' } },
						{ label: 'Domain', collapsed: true, autogenerate: { directory: 'domain' } },
						{ label: 'White Label Suite', collapsed: true, autogenerate: { directory: 'white-label-suite' } },
						{ label: 'Media Storage', collapsed: true, autogenerate: { directory: 'media-storage' } },
						{ label: 'Timers', collapsed: true, autogenerate: { directory: 'timers' } },
						{ label: 'Mobile App', collapsed: true, autogenerate: { directory: 'mobile-app' } },
					],
				},
				{
					label: 'Calendar & Services',
					collapsed: true,
					items: [
						{ label: 'Calendar', collapsed: true, autogenerate: { directory: 'calendar' } },
						{ label: 'Services', collapsed: true, autogenerate: { directory: 'services' } },
					],
				},
				{
					label: 'Troubleshooting & FAQ',
					collapsed: true,
					items: [
						{ label: 'Troubleshooting', collapsed: true, autogenerate: { directory: 'troubleshooting' } },
						{ label: '1000 FAQ', collapsed: true, autogenerate: { directory: '1000-faq' } },
					],
				},
			],
			expressiveCode: { shiki: { langs: [markdocGrammar] } },
			plugins: process.env.CHECK_LINKS
				? [
						starlightLinksValidator({
							errorOnFallbackPages: false,
							errorOnInconsistentLocale: true,
						}),
					]
				: [],
		}),
	],
});
