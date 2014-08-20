// Load modules
define(function () {

	"use strict";

	console.log('Canvas script is loading....');

	var gameCanvas = '#gameCanvas';

	// Activate the preloader

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
