// Load modules
define(function () {

	"use strict";

	console.log('Device script is loading....');

	var checkUseragent = function() {
		return navigator.userAgent;
		console.log(navigator.userAgent);
	}

	return {
		deviceType : function() {
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
		}
	}

});
