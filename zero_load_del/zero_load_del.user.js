// ==UserScript==
// @name           zero_load_del
// @namespace      raa0121
// @description    zero_load_del
// @include        http://www.nicovideo.jp/*
// @include        http://live.nicovideo.jp/*
// @include        http://dic.nicovideo.jp/*
// @include        http://com.nicovideo.jp/*
// @include        http://seiga.nicovideo.jp/*
// @include        http://news.nicovideo.jp/*
// ==/UserScript==

(function() {
	delID = new Array("zero_lead_index", "zero_lead", "carousel",
	                  "ichibaPanel", "web_pc_watch", "banner-top",
	                  "banner-side", "head_ads", "bnr_side224",
	                  "google_ads_div_nd_ft01_rect_ad_wrapper",
	                  "google_ads_div_nd_rt01rect-s_ad_wrapper",
	                  "google_ads_div_nd_rt04_w-skys_ad_wrapper",
	                  "google_ads_div_nd_tp01_full_ad_wrapper",
	                  "PAGEURGENT_sp", "followContainer", "jasrac",
	                  "community_pc_top", "web_pc_top", "news_pc_sidepanel",
	                  "news_pc_skyscraper", "web_pc_360", "leftPanel",
	                  "watch_zapping_box");

	delClass = new Array("adsense-728", "mb10", "c_banners");
	
	for(i = 0; i < delID.length; i++){
		if (document.getElementById(delID[i]) != null){
			var innerID = document.getElementById(delID[i]);
			innerID.parentNode.removeChild(innerID);
		}
	}
	for(i = 0; i < delClass.length; i++){
		if (document.getElementsByClassName(delClass[i]) != null && document.getElementsByClassName("mt10") == null ){
			var innerClass = document.getElementsByClassName(delClass[i]);
			innerClass = Array.slice(innerClass, 0);
			for(j=0;j<innerClass.length;j++){
				innerClass[j].parentNode.removeChild(innerClass[j]);
			}
		}
	}
})();
