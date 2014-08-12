// Load modules
define(['preloader'], 
function (preloader) {

	"use strict";


	// Setting the gameCanvas size
	function windowSize(width, height) {
		$('#gameCanvas').css({
			width: width,
			height: height
		});
	};

	var windowWidth = function() {
		return $(window).outerWidth();
	};

	var windowHeight = function() {
		return $(window).outerHeight();
	};

	return { 
		init: function() {
			console.log("Application is loaded");

			$(document).ready( function() {
				windowSize(windowWidth(), windowHeight());
				console.log("The height: ", windowHeight(), "; The width:", windowWidth(), ";");
			});

			$(window).resize(function() {
				windowSize(windowWidth(), windowHeight());
				console.log("The height: ", windowHeight(), "; The width:", windowWidth(), ";");
			});			

		}
	}
});
