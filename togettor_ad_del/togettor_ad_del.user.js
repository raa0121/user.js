// ==UserScript==
// @name        togettor_ad_del
// @namespace   raa0121
// @description togettor_ad_del
// @include     http://togetter.com/*
// @version     1
// ==/UserScript==

(function() {
	if(document.getElementsByClassName("ad_rectangle") != null){
		var bodys = document.getElementsByClassName("ad_rectangle");
		bodys = Array.slice(bodys, 0);
		body = new Array();
		for(i=0;i<bodys.length;i++){
			body[i] = bodys[i].parentNode;
			body[i].removeChild(bodys[i]);
		}
	}

	if(document.getElementsByClassName("advertise_box") != null){
		var bodys = document.getElementsByClassName("advertise_box");
		bodys = Array.slice(bodys, 0);
		body = new Array();
		for(i=0;i<bodys.length;i++){
			body[i] = bodys[i].parentNode;
			body[i].removeChild(bodys[i]);
		}
	}

	if(document.getElementById("google_ads_div_right_campaign_ad_wrapper") != null){
		var ad = document.getElementById("google_ads_div_right_campaign_ad_wrapper"); 
		ad.parentNode.removeChild(ad);
	}
})();
