// Load modules
define(function () {

	"use strict";

	console.log('Device script is loading....');

	var checkUseragent = function() {
		return navigator.userAgent;
	}

	return {
		deviceType : function() {
			if(checkUseragent().match(/Android/i) || 
				checkUseragent().match(/webOS/i) || 
				checkUseragent().match(/iPhone/i) ||
				checkUseragent().match(/iPod/i) ||
				checkUseragent().match(/iPad/i)){
				return 'mobile';
			} else {
				return 'desktop';
			}
		},
		deviceOS : function() {
			if(deviceType().match(/mobile/i)) {
				if(checkUseragent().match(/Android/i)) {
					return 'Android';
				}
				if(checkUseragent().match(/webOS/i)) {
					return 'webOS';
				}
				if(checkUseragent().match(/iPhone/i)) {
					return 'iPhone';
				}
				if(checkUseragent().match(/iPod/i)) {
					return 'iPod';
				}
				if(checkUseragent().match(/iPad/i)) {
					return 'iPad';
				}
			} else {
				if(checkUseragent().match(/Windows NT/i)) {
					return 'Windows';
				}
				if(checkUseragent().match(/Mac OS/i)) {
					return 'Mac';
				}
				if(checkUseragent().match(/Linux/i)) {
					return 'Mac';
				}
			}
		}
	}

});
