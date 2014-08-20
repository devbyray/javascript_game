// Load modules
define(['canvas', 'preloader', 'airplane', 'modal'], 
function (canvas, preloader, airplane, modal) {


	"use strict";

	function loadCanvas(callback) {
		console.log('Canvas loaded!');
		$(document).ready( function() {
			canvas.windowSize();
		});

		$(window).resize(function() {
			reloadCanvas();
		});
		setTimeout( function() { 
			loadGame(); 
		}, 500);
	}

	function reloadCanvas() {
		setTimeout( function() {
			console.log('Please reload your game!');
			canvas.windowSize();
			location.reload();
		}, 1000);
	}

	$('#close_modal').click( function() {
				console.log('click');
				$('.modal').removeClass('introduction')
				.velocity({opacity: 0}, 2000)
				.hide();
			});
	
	function loadGame() {
		preloader.activatePreloader();

		window.setTimeout(function() {
			preloader.hidePreloader();
			modal.introModalWindow();
			modal.hideModal();
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
