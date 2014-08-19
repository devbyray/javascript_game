// Load modules
define([ 'airplane' ], function(airplane) {
	
	
	"use strict";
	
		console.log('Airplane Amo controller is loading....');

		function loadAmo() {
			console.log('Amo created');
			$(gameCanvas).prepend('<span class="amo"></span>');
			$(gameCanvas).prepend('<div id="scoreboard"></div>');
			$('#scoreboard').prepend('<span class="total_bullets">Shots fired: 0</span>');
		}

		var fired = 0;

		function shootAmo() {
			console.log('Amo shooted');
			$(".amo").each(function() {
				$(this).css({
					top: airplane.planePosition().top+22,
					left: airplane.planePosition().left+42,
					opacity: 1
				});
				// debugger;
				$(this).velocity(
					{ 
						top: -50+'px'
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
			countBullets(fired++);
		}

		function countBullets(fired) {
			$('.total_bullets').text('Shots fired: ' + fired);
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
