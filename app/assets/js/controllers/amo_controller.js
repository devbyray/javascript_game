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
		}

		function shootAmo() {
			console.log('Amo shooted');

			$(".amo").each(function() {
				$(this).css({
					top: airplane.planePosition().top+22,
					left: airplane.planePosition().left+42,
				});
				$(this).velocity(
					{ 
						top: -50+'px',
						opacity: 1
					}, 
					{ 
					    /* Log all the animated divs. */
					    duration: 1000,
					    complete: function() {
					    	$(this).remove();
					    	console.log('remove amo');
					    },
					    begin: function() { 
					    	loadAmo();
					    	console.log('loaded new amo'); 
					    }
					}
				);
		    });
	    	
		}

		return {
			shoot: function() {
				shootAmo();
			},
			load: function() {
				loadAmo();
			}
		}


});
