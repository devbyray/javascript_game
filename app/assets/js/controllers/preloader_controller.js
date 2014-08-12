// Load modules
define(['jquery', 'velocity'], 
function ($, velocity) {

	"use strict";

	$(function () {

		console.log('Preloader script is loading....');

		var activatePreloader = function() {
			$('.preloader').velocity({ opacity: 0 }, 3500);
		}

		// Activate the preloader
		window.setTimeout(function() {
			console.log('Preloader activate!')
			activatePreloader();
		}, 1500);

	});

});
