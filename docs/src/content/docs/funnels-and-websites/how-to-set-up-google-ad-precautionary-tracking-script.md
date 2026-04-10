---
title: "How to set up Google Ad Precautionary Tracking Script"
description: "This article covers the steps required to set up the Google Ad Precautionary Tracking Script, a fail-safe mechanism designed to ensure accurate attribution…"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/XEObO5UPb4U00RYP5VGa"
sourceId: "XEObO5UPb4U00RYP5VGa"
category: "Funnels and Websites"
---

This article covers the steps required to set up the Google Ad Precautionary Tracking Script, a fail-safe mechanism designed to ensure accurate attribution data when the UTM template fails. This script tracks all clicks on a specific link and sends the data to Google Analytics. The only customization needed is updating the URL for the tracking page to match the one used by your website.

#### **Steps to Set Up Google Ad Precautionary Tracking Script**

**Step 1: Visit Your Google Ad Account**

1.  Log in to your Google Ad account.

**Step 2: Navigate to Scripts in Google Ads**

1.  Click on **Tools and Settings**.
2.  Select **Bulk Actions**.
3.  Click on **Scripts**.

**Please Note:** If you cannot find this option, switch to advanced view to see the Tools and Settings option.

**Step 3: Add the Script**

1.  Remove any predefined code in the script editor.
2.  Copy and paste the following script:

function main() {

    var TrackingTemplate = "{lpurl}?utm\_source=adwords&utm\_medium={AdName}&utm\_campaign={CampaignName}&utm\_content={AdGroupName}&utm\_keyword={keyword}&utm\_matchtype={matchtype}&campaign\_id={campaignid}&ad\_group\_id={adgroupid}&ad\_id={creative}";

    var \_CAMPAIGN\_CONTAINS = "";

    var \_ADGROUP\_CONTAINS = "";

    var STATUS = "ENABLED";

    if (TrackingTemplate.search(/{AdGroupName}|{CampaignName}|{AdName}/g) == -1) {

        Logger.log("Enter at least one of the {CampaignName} or {AdGroupName} or {AdName} parameter in the tracking template");

        return;

    }

    if (TrackingTemplate.search("{AdGroupName}") > 0) {

        var adgroupIterator = {

            hasNext: function() {

                return false;

            }

        };

        if (\_ADGROUP\_CONTAINS == "" && \_CAMPAIGN\_CONTAINS == "") {

            adgroupIterator = AdsApp.adGroups().withCondition("Status = " +  STATUS).get();

        } else if (\_ADGROUP\_CONTAINS == "" && \_CAMPAIGN\_CONTAINS !== "") {

            adgroupIterator = AdsApp.adGroups().withCondition("CampaignName contains '" + \_CAMPAIGN\_CONTAINS + "'").withCondition("Status = " + STATUS).get();

        } else if (\_ADGROUP\_CONTAINS !== "" && \_CAMPAIGN\_CONTAINS !== "") {

            adgroupIterator = AdsApp.adGroups().withCondition("CampaignName contains '" + \_CAMPAIGN\_CONTAINS + "'").withCondition("Name contains '" + \_ADGROUP\_CONTAINS + "'").withCondition("Status = " + STATUS).get();

        } else if (\_ADGROUP\_CONTAINS !== "" && \_CAMPAIGN\_CONTAINS == "") {

            adgroupIterator = AdsApp.adGroups().withCondition("Name contains '" + \_ADGROUP\_CONTAINS + "'").withCondition("Status = " + STATUS).get();

        }

        if (!adgroupIterator.hasNext()) {

            Logger.log("No Campaigns/Adgroups matched with this condition");

            return;

        }

        while (adgroupIterator.hasNext()) {

            var adgroup = adgroupIterator.next();

            var adgrouptemplate = TrackingTemplate.replace(/{AdGroupName}/g, adgroup.getName().replace(/\\s/g, '%20'));

            if (TrackingTemplate.search("{CampaignName}") > 0) {

                adgrouptemplate = adgrouptemplate.replace(/{CampaignName}/g, adgroup.getCampaign().getName().replace(/\\s/g, '%20'));

            }

            if (TrackingTemplate.search("{AdName}") > 0) {

                var adsIterator = adgroup.ads().get();

                while (adsIterator.hasNext()) {

                  var ad = adsIterator.next();

                  var adType = ad.getType();

                  var headline = "";

                  if (ad.getHeadline()) {

                    headline = ad.getHeadline();

                  } else if(ad.isType().expandedTextAd()) {

                    headline = ad.asType().expandedTextAd().getHeadlinePart1();

                  } else if(ad.isType().gmailImageAd()) {

                    headline = ad.asType().gmailImageAd().getName();

                  } else if(ad.isType().gmailMultiProductAd()) {

                    headline = ad.asType().gmailMultiProductAd().getHeadline();

                  } else if(ad.isType().gmailSinglePromotionAd()) {

                    headline = ad.asType().gmailSinglePromotionAd().getHeadline();

                  } else if(ad.isType().html5Ad()) {

                    headline = ad.asType().html5Ad().getName();

                  } else if(ad.isType().imageAd()) {

                    headline = ad.asType().imageAd().getName();

                  } else if(ad.isType().responsiveDisplayAd()) {

                    headline = ad.asType().responsiveDisplayAd().getShortHeadline();

                  } else if(ad.isType().responsiveSearchAd()) {

                    var headlines = ad.asType().responsiveSearchAd().getHeadlines();

                    if (headlines && headlines\[0\].text) {

                      headline = headlines\[0\].text;

                    }

                  }

                  Logger.log("Headline text : " + headline);

                  if (headline) {

                    adgrouptemplate = adgrouptemplate.replace(/{AdName}/g, headline.replace(/\\s/g, '%20'));

                  } else {

                    adgrouptemplate = adgrouptemplate.replace(/{AdName}/g, ad.getId());

                  }

                }

            }

            adgroup.urls().setTrackingTemplate(adgrouptemplate);

            Logger.log(adgroup.getCampaign().getName() + " => " + adgroup.getName() + " => " + adgrouptemplate);

        }

    }

}

**Step 4: Finalize the Script**

1.  After closing the script editor, rename the script to something recognizable.
2.  Change the frequency from the list to **Hourly**.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXchDQQgKINUMoS0F9NPwvyGAWxgsxAE5lCSgUMfSWuqq8CHS9-DxBBTeZLK65cgFZ3F_WvcunrQg3dtB2v_8Nrr1vsxHTC8q0H3Rq1HUJsQ3cnWuhKl-S3Vh0bk5cZrtY7ZbyIUQBo7wRdlAfuKua3AI-DV?key=nm0GO652599JOkGkmHiiLg)

### **FAQ's**




**Question:** If I have another script, will it affect it?

**Answer:** Yes, scripts can override each other as they affect UTM parameters.




**Question:** Why do I need to authorize it?

**Answer:** Authorization is necessary because the script is implemented on your Google Ad Account. It is essential to check the preview before running it to ensure it shows most campaigns as successful with the landing page found.




**Question:** How do I update the URL in the tracking template?

**Answer:** You need to update the TrackingTemplate variable in the script to match the URL structure used by your website. The URL should be adjusted to include the appropriate UTM parameters that correspond to your campaign, ad group, and other relevant details. This is essential for the script to track clicks correctly.




**Question:** What happens if the script doesn’t find a campaign or ad group?

**Answer:** If no campaigns or ad groups match the conditions, the script logs a message saying “No Campaigns/Adgroups matched with this condition” and does not apply any tracking templates.




**Question:** Do I need to keep the Google Ads tab open for the script to run?
**Answer:** No. Once you have authorized and saved the script with an hourly frequency, it runs on Google’s servers automatically. You can close the tab and the script will continue to function.




**Question:** Can I use this script if I already use a third-party tracking software?

**Answer:** Use caution. Many third-party tracking tools provide their own scripts. If you run both, they may compete to overwrite the same UTM parameters, leading to "Flapping" (where the URL changes back and forth every hour). If you use a third-party tool, check their documentation before adding a manual precautionary script.




**Question:** What should I do if I cannot find the "Scripts" option under the Tools and Settings menu in Google Ads?
**Answer:** If the option is not visible, you should switch your Google Ads account to the **Advanced View**. This will reveal the full "Tools and Settings" menu, allowing you to navigate to Bulk Actions and select Scripts.