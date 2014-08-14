// Load modules
define(['order!canvas', 'order!device'], 
function (canvas, device) {

	"use strict";

	function loadCanvas() {
		console.log('Canvas loaded!');
		$(document).ready( function() {
			canvas.windowSize();
		});

		$(window).resize(function() {
			canvas.windowSize();
		});
	}

	return { 
		init: function() {
			console.log("Application is loaded");

			loadCanvas();
			console.log(device.deviceType());
			console.log(device.deviceOS());

		}
	}
});
