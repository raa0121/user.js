// ==UserScript==
// @name           pixiv_ad_del
// @namespace      raa0121
// @description    pixiv_ad_del
// @include        http://*.pixiv.net/*
// ==/UserScript==

(function() {
	var bodys = document.getElementsByClassName("ads_area");
	bodys = Array.slice(bodys, 0);
	for(i=0;i<bodys.length;i++){
		bodys[i].parentNode.removeChild(bodys[i]);
	}
})();
