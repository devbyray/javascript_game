// Load modules
define(function () {

	"use strict";

	console.log('Preloader script is loading....');

	function activatePreloader() {
		$('.preloader').velocity({ opacity: 0 }, 3500);
	}

	var runSpinner = function() {
		for (var i = 0; i < 5; i++) {
		  $div
		    /* Slide the element up by 100px. */
		    .animate({ top: -100 })
		    /* Then animate back to the original value. */
		    .animate({ top: 0 });
		}
		$('.preloader').append('<span class="bull"></span>').velocity({ opacity: 0 })

		$('.preloader').velocity({ opacity: 0 }, 3500);
	}

	// Activate the preloader
	window.setTimeout(function() {
		console.log('Preloader activate!')
		activatePreloader();
	}, 1500);

});
