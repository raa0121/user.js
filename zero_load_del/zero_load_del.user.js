// ==UserScript==
// @name           zero_load_del
// @namespace      raa0121
// @description    zero_load_del
// @include        http://www.nicovideo.jp/*
// @include        http://live.nicovideo.jp/*
// ==/UserScript==

(function() {
	var bodys = document.getElementsById("zero_load");
	for(var i=0;i < bodys.length;i++){
		var body = bodys[i];
		body.parentNode.removeChild(body);
	}
})();
