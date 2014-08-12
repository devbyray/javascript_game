// Load modules
define(['jquery', 'velocity', 'preloader'], 
function ($, velocity, preloader) {

	"use strict";

	$(function () {

		// Setting the gameCanvas size
		var windowSize = function(width, height) {
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

		var init = function() {
			console.log("Application is loaded");

			$(document).ready( function() {
				windowSize(windowWidth(), windowHeight());
				console.log("The height: ", windowHeight(), "; The width:", windowWidth(), ";");
			});

			$(window).resize(function() {
				windowSize(windowWidth(), windowHeight());
				console.log("The height: ", windowHeight(), "; The width:", windowWidth(), ";");
			});			

		};


		// Load the application
		init();
	});

});
