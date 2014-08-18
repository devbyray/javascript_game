// Load modules
define(function() {
	
	
	"use strict";
	
		console.log('Airplane Amo controller is loading....');

		function loadAmo() {
			console.log('Amo created');
			$(gameCanvas).prepend('<span class="amo"></span>');
			shootAmo();
		}

		function shootAmo() {
			console.log('Amo shooted');
			require(['airplane'], function (airplane) {

				$(".amo").each(function() {
					$(this).css({
						top: airplane.planePosition().top+22,
						left: airplane.planePosition().left+42
					});
					$(this).velocity({ opacity: 1}, 100).velocity({ top: -50+'px'}, { 
					    /* Log all the animated divs. */
					    duration: 1000,
					    complete: function() {
					    	$(this).remove();
					    	console.log('remove amo');
					    }
					});
			    });

			});
		}

		return {
			shoot: function() {
				loadAmo();
			}
		}


});
