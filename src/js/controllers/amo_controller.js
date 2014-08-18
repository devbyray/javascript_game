// Load modules
define([ 'airplane' ], function(airplane) {
	
	
	"use strict";
	
		console.log('Airplane Amo controller is loading....');

		function loadAmo() {
			console.log('Amo created');
			$(gameCanvas).prepend('<span class="amo"></span>');
			$('.amo').css({
				opacity: 0
			});
			shootAmo();
		}

		function shootAmo() {
			console.log('Amo shooted');

			$(".amo").each(function() {
				$(this).css({
					top: airplane.planePosition().top+22,
					left: airplane.planePosition().left+42,
				});
				$(this).velocity({ opacity: 1}).velocity({ top: -50+'px'}, { 
				    /* Log all the animated divs. */
				    duration: 1000,
				    complete: function() {
				    	$(this).remove();
				    	console.log('remove amo');
				    }
				});
		    });
		}

		return {
			shoot: function() {
				loadAmo();
			}
		}


});
