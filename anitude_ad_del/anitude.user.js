// ==UserScript==
// @name           anitude_ad_del
// @namespace      raa0121
// @description    anitude_ad_del
// @include        http://www.anitube.jp/*
// ==/UserScript==

(function() {
	var bodys = document.getElementById("arrowchat_base");
	var body = bodys.parentNode;
	body.removeChild(bodys);
})();
