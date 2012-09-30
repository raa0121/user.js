// ==UserScript==
// @name        shindanmaker_ad_del
// @namespace   raa0121
// @description shindanmaker_ad_del
// @include     http://shindanmaker.com/*
// @version     1
// ==/UserScript==

(function() {
	if(document.getElementById("div-gpt-ad-1327887939545-4") != null){
		var ad = document.getElementById("div-gpt-ad-1327887939545-4"); 
		ad.parentNode.removeChild(ad);
	}
	
	if(document.getElementById("div-gpt-ad-1327887939545-0") != null){
		var ad = document.getElementById("div-gpt-ad-1327887939545-0"); 
		ad.parentNode.removeChild(ad);
	}
})();
