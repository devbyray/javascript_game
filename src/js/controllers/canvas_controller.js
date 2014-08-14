// Load modules
define(['preloader', 'device', 'airplane', 'userinput'], 
	function (preloader, device, airplane, userinput) {

	"use strict";

	var gameCanvas = '#gameCanvas';

		// Activate the preloader
	window.setTimeout(function() {
		preloader.activatePreloader();
	}, 1500);

	window.setTimeout(function() {
		preloader.hidePreloader();
		airplane.loadAirplane();
	}, 5000);

	console.log(device.deviceType());
	console.log(device.deviceOS());


	return { 
		windowWidth: function() {
			return $(window).outerWidth();
		},
		windowHeight: function() {
			return $(window).outerHeight();
		},
		windowCenter: function() {
			return this.windowWidth();
		},
		// Setting the gameCanvas size
		windowSize: function() {
			$(gameCanvas).css({
				width: this.windowWidth(),
				height: this.windowHeight()
			});
		},

	}
});
