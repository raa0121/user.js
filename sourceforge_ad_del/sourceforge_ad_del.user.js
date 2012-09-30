// ==UserScript==
// @name        sourceforge_ad_del
// @namespace   raa0121
// @description sourceforge_ad_del
// @include     http://sourceforge.jp/*
// @version     1
// ==/UserScript==

(function() {
	if(document.getElementById("ad-leaderboard") != null){
		var ad = document.getElementById("ad-leaderboard"); 
		ad.parentNode.removeChild(ad);
	}
})();
