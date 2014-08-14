// Load modules
define(['airplane'] ,function (airplane) {

	"use strict";

	console.log('Preloader script is loading....');


	var runSpinner = function() {
		for (var i = 0; i < 5; i++) {
		  $div
		    /* Slide the element up by 100px. */
		    .animate({ top: -100 })
		    /* Then animate back to the original value. */
		    .animate({ top: 0 });
		}
		$('.preloader').append('<span class="bull"></span>').velocity({ opacity: 0 });
	}

	return {
		activatePreloader: function() {
			console.log('Preloader activate!')
			$('.preloader').velocity({ opacity: 0}, 1500);
		},
		hidePreloader: function() {
			console.log('Preloader hidden!')
			$('.preloader').hide();
		}
	}

});
