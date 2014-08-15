// Load modules
define(['canvas', 'preloader', 'airplane'], 
function (canvas, preloader, airplane) {


	"use strict";

	function loadCanvas(callback) {
		console.log('Canvas loaded!');
		$(document).ready( function() {
			canvas.windowSize();
		});

		$(window).resize(function() {
			canvas.windowSize();
		});
		setTimeout( function() { 
			loadGame(); 
		}, 500);
	}

	function loadGame() {
		preloader.activatePreloader();

		window.setTimeout(function() {
			preloader.hidePreloader();
			airplane.loadAirplane();
			loadUserInput();
		}, 2000);
	}

	function loadUserInput() {
		require(['userinput'], function (userinput) {});
	}

	return { 
		init: function() {
			console.log("Application is loaded");

			loadCanvas();
		}
	}
	
});
