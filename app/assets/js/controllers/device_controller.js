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
				checkUseragent().match(/iPad/i) ||
				checkUseragent().match(/Windows Phone/i) ||
				checkUseragent().match(/SymbianOS/i) ||
				checkUseragent().match(/RIM/i) ||
				checkUseragent().match(/BB/i)
			) {
				return 'device';
			} else {
				return 'computer';
			}
		},
		deviceOS : function() {
			if(this.deviceType().match(/device/i)) {
				if(checkUseragent().match(/Android/i)) {
					return 'android';
				}
				if(checkUseragent().match(/webOS/i)) {
					return 'webos';
				}
				if(checkUseragent().match(/iPhone/i)) {
					return 'iphone';
				}
				if(checkUseragent().match(/iPod/i)) {
					return 'ipod';
				}
				if(checkUseragent().match(/iPad/i)) {
					return 'ipad';
				}
				if(checkUseragent().match(/Windows Phone/i)) {
					return 'windows phone';
				}
				if(checkUseragent().match(/SymbianOS/i)) {
					return 'symbian';
				}
				if(checkUseragent().match(/RIM/i) || checkUseragent().match(/BB/i)) {
					return 'blackberry';
				}
			} else {
				if(checkUseragent().match(/Windows NT/i)) {
					return 'windows';
				}
				if(checkUseragent().match(/Mac OS/i)) {
					return 'mac';
				}
				if(checkUseragent().match(/Linux/i)) {
					return 'linux';
				} else {
					return 'unknown';
				}
			}
		}
	}

});
