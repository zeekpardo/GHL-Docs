---
title: "How To Add a Privacy Policy and Cookies Pop Up"
description: "If you'd like to add an \"Accept Cookies and Privacy Policy\" pop up to your page, follow the steps below:"
sourceUrl: "https://app.modalsupport.com/article/details/ZeRAsZjqowLqb1w85XkX/0397AM3me1h5yKlF0M4u"
sourceId: "0397AM3me1h5yKlF0M4u"
category: "Funnels and Websites"
---

If you'd like to add an "Accept Cookies and Privacy Policy" pop up to your page, follow the steps below:

**Step 1:** Click "Edit" on the Funnel/Website page you'd like to add the pop up to

**Step 2:** Select "Add Element" > Scroll down to Custom and select "Custom JS/HTML" > Drag and drop element to the TOP of the Funnel/Website page

[![](https://d29l98y0pmei9d.cloudfront.net/article/4783/65e74e2a-daa4-481b-ba96-9c17fca14c53.png)](https://d29l98y0pmei9d.cloudfront.net/article/4783/65e74e2a-daa4-481b-ba96-9c17fca14c53.png)

[![](https://d29l98y0pmei9d.cloudfront.net/article/4783/6da24c52-f6b9-4d1c-948d-e2d897e68943.png)](https://d29l98y0pmei9d.cloudfront.net/article/4783/6da24c52-f6b9-4d1c-948d-e2d897e68943.png)

**Step 3:** Navigate to the Settings menu on the left side > Select "Open Code Editor > Paste the following code: 

<script>
window.hlptcb = {};/\*
\* Editable Options
\*/
window.hlptcb.popup\_title = 'Accept Cookies & Privacy Policy?'; //Title/Heading Optional
window.hlptcb.popup\_message = 'This website uses cookies to improve your user experience. By accepting and closing the cookie information banner when first visiting the page you consent to our use of cookies when scrolling the front page, clicking on a link or continuing to navigate in other ways.... ';
window.hlptcb.popup\_more\_title = 'More information';
window.hlptcb.popup\_more\_link\_url = '#';
window.hlptcb.popup\_accept\_button\_title = 'Accept Cookies';
window.hlptcb.popup\_style\_width = '50%';
window.hlptcb.popup\_style\_mobile\_width = '100%';
window.hlptcb.popup\_style\_z\_index = '100';
window.hlptcb.popup\_style\_bgcolor = '#333333';
window.hlptcb.popup\_style\_title\_color = '#1571a8';
window.hlptcb.popup\_style\_more\_link\_color = '#1571a8';
window.hlptcb.popup\_style\_button\_color = '#FFFFFF';
window.hlptcb.popup\_style\_button\_bgcolor = '#1571a8';
/////Editable options end here. Please don't change the code below.
function hlpt\_cb\_docReady(fn) { if (document.readyState === "complete" || document.readyState === "interactive") { setTimeout(fn, 1); } else { document.addEventListener("DOMContentLoaded", fn); } }
hlpt\_cb\_docReady(function() {     console.log('Screen Width: ' + screen.availWidth);    hlpt\_display\_cookie\_banner();
});
window.hlptcb.popup\_title = window.hlptcb.popup\_title || '';
window.hlptcb.popup\_message = window.hlptcb.popup\_message || '';
window.hlptcb.popup\_more\_title = window.hlptcb.popup\_more\_title || '';
window.hlptcb.popup\_more\_link\_url = window.hlptcb.popup\_more\_link\_url || '';
window.hlptcb.popup\_accept\_button\_title = window.hlptcb.popup\_accept\_button\_title || 'Accept Cookies';
window.hlptcb.popup\_style\_width = window.hlptcb.popup\_style\_width || '50%';
window.hlptcb.popup\_style\_mobile\_width = window.hlptcb.popup\_style\_mobile\_width || '100%';
window.hlptcb.popup\_style\_z\_index = window.hlptcb.popup\_style\_z\_index || '100';
window.hlptcb.popup\_style\_bgcolor = window.hlptcb.popup\_style\_bgcolor || '#3D384A';
window.hlptcb.popup\_style\_title\_color = window.hlptcb.popup\_style\_title\_color || '#F04C5B';
window.hlptcb.popup\_style\_more\_link\_color = window.hlptcb.popup\_style\_more\_link\_color || '#F04C5B';
window.hlptcb.popup\_style\_button\_color = window.hlptcb.popup\_style\_button\_color || '#FFFFFF';
window.hlptcb.popup\_style\_button\_bgcolor = window.hlptcb.popup\_style\_button\_bgcolor || '#F14D5C';
window.hlptcb.popup\_html = '';
if(window.hlptcb.popup\_message)    {        window.hlptcb.popup\_html += '<div class="hlpt\_cb\_wrapper">';        if(window.hlptcb.popup\_title)   window.hlptcb.popup\_html += '<p class="hlpt\_cb\_title"><strong>'+window.hlptcb.popup\_title+'</strong></p>';        window.hlptcb.popup\_html += '<p>'+window.hlptcb.popup\_message;        if( window.hlptcb.popup\_more\_title && window.hlptcb.popup\_more\_link\_url )   window.hlptcb.popup\_html += ' <a href="'+window.hlptcb.popup\_more\_link\_url+'">'+window.hlptcb.popup\_more\_title+'</a>';        window.hlptcb.popup\_html += '<div class="hlpt\_cb\_btn\_wrapper"><button id="hlpt\_cb\_bclose" class="close" type="button" style="border:0px; padding:5px 15px;border-radius: 5px;">'+window.hlptcb.popup\_accept\_button\_title+'</button></div>';        window.hlptcb.popup\_html += '</p>';        window.hlptcb.popup\_html += '</div>'    }   
function hlpt\_display\_cookie\_banner() {    const hlpt\_cb\_div = document.createElement("div");    hlpt\_cb\_div.innerHTML = window.hlptcb.popup\_html;    hlpt\_cb\_div.setAttribute("id", "hlpt\_cb");    hlpt\_cb\_div.setAttribute("class", "cookie-banner");    hlpt\_cb\_div.style.setProperty("display", "none");
    if(screen.availWidth < 500)   hlpt\_cb\_div.classList.add("cookie-banner-mobile");
    document.body.append(hlpt\_cb\_div);    hlpt\_cb\_update\_styles();
    console.log('Is cookie shown? - ' + localStorage.getItem("hlpt\_cb\_closed"));
    if (localStorage.getItem("hlpt\_cb\_closed") != "accepted") {        document.getElementById('hlpt\_cb').classList.add("cookie-banner-opened");        hlpt\_cb\_div.style.setProperty("display", "block");                    };    var close\_buttons = document.getElementsByClassName("close");    for (var i = 0; i < close\_buttons.length; i++) {        close\_buttons\[i\].addEventListener('click', hlpt\_cb\_close\_banner, false);    }
}
function hlpt\_cb\_close\_banner() {    document.getElementById('hlpt\_cb').classList.add("cookie-banner-closed");    document.getElementById('hlpt\_cb').style.setProperty("display", "none");    localStorage.setItem("hlpt\_cb\_closed","accepted");
};
function hlpt\_cb\_update\_styles() {    document.querySelector(".cookie-banner").style.setProperty( "width", window.hlptcb.popup\_style\_width );    if(document.querySelector(".cookie-banner-mobile") !== null)   document.querySelector(".cookie-banner-mobile").style.setProperty( "width", window.hlptcb.popup\_style\_mobile\_width );    document.querySelector(".cookie-banner").style.setProperty( "position", "fixed" );    document.querySelector(".cookie-banner").style.setProperty( "z-index", window.hlptcb.popup\_style\_z\_index );    document.querySelector(".cookie-banner").style.setProperty( "bottom", "30px" );    document.querySelector(".cookie-banner").style.setProperty( "max-width", "315px" );    document.querySelector(".cookie-banner").style.setProperty( "margin-left", "30px" );    document.querySelector(".cookie-banner").style.setProperty( "right", "30px" );    document.querySelector(".cookie-banner").style.setProperty( "padding", "20px" );    document.querySelector(".cookie-banner").style.setProperty( "display", "none" );    document.querySelector(".cookie-banner").style.setProperty( "align-items", "center" );    document.querySelector(".cookie-banner").style.setProperty( "justify-content", "space-between" );    document.querySelector(".cookie-banner").style.setProperty( "background-color", window.hlptcb.popup\_style\_bgcolor );    document.querySelector(".cookie-banner").style.setProperty( "color", "#FFFFFF" );    document.querySelector(".cookie-banner").style.setProperty( "border-radius", "5px" );    document.querySelector(".cookie-banner").style.setProperty( "box-shadow", "0 6px 6px rgba(0,0,0,0.25)" );    document.querySelector(".cookie-banner").style.setProperty( "font-family", "system-ui" );    document.querySelector(".hlpt\_cb\_btn\_wrapper").style.setProperty( "margin-top", "20px" );    document.querySelector(".hlpt\_cb\_wrapper").style.setProperty( "position", "relative" );    if(document.querySelector(".hlpt\_cb\_wrapper .hlpt\_cb\_title") !== null)   document.querySelector(".hlpt\_cb\_wrapper .hlpt\_cb\_title").style.setProperty( "color", window.hlptcb.popup\_style\_title\_color );    if(document.querySelector(".hlpt\_cb\_wrapper .hlpt\_cb\_title") !== null)   document.querySelector(".hlpt\_cb\_wrapper .hlpt\_cb\_title").style.setProperty( "margin-bottom", "15px" );    if(document.querySelector(".hlpt\_cb\_wrapper a") !== null)   document.querySelector(".hlpt\_cb\_wrapper a").style.setProperty( "color", window.hlptcb.popup\_style\_more\_link\_color );    document.querySelector("#hlpt\_cb\_bclose").style.setProperty( "background-color", window.hlptcb.popup\_style\_button\_bgcolor );    document.querySelector("#hlpt\_cb\_bclose").style.setProperty( "color", window.hlptcb.popup\_style\_button\_color );    document.querySelector("#hlpt\_cb\_bclose").style.setProperty( "cursor", "pointer" );
}
</script>

**Step 4:**  Edit the "Editable Options" section within the code as you wish. You can edit the popup title, message, "More Information" and "Accept" button titles, colors, and more. Only edit information within the ' ' as shown below for the title (yellow underlined example). The 2nd Editable Option is circled in red below – this line is where you can edit the message that is displayed. You can also add the URL where the # is in the 4th editable option.  

![](https://lh4.googleusercontent.com/Xr4-CPREymB-VlHnrDCn4O5QW8sIDpMy9tQK_35m3TZxeshl9u9LpI-Q6MyFn5KHLRsP0opK1AV2iHQD8LTwHcECxzDDibteprXMsLT1NdljY4Cp9y7y1DG9BPRnsCmfQcrpjdg)

**Step 5:** Click "Save"  

_**NOTE:** This article is intended as a "how-to" showing you the steps to create a popup. Check with your compliance team, HR, or other legal expert regarding specific verbiage required for compliance in your region._