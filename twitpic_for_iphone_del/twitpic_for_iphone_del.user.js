// ==UserScript==
// @name           twitpic_for_iphone_del
// @namespace      raa0121
// @description    twitpic_for_iphone_del
// @include        http://twitpic.com/*
// ==/UserScript==

(function() {
	var bodys = document.getElementById("announcement");
	var body = bodys.parentNode;
	body.removeChild(bodys);
	document.getElementById("navbar-wrap").style.top='0px';
	document.getElementById("infobar-wrap").style.paddingTop='55px';
})();
