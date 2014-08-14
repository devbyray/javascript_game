// Load modules
define(['canvas'], function(canvas) {

	"use strict";

	console.log('Airplane controller is loading....');

	var airplane_el = '#airplane';


	function createAirplane() {
		console.log('Airplane created');
		$(gameCanvas).append('<div id="airplane"></div>');
		fadeInAirplane();
	}

	function fadeInAirplane() {
		console.log('Airplane fadeIn');
		$(airplane_el).velocity({ opacity: 1}, 1500).velocity({ top: '75%'}, 1500);
		var windowCenter = canvas.windowCenter();

		$(airplane_el).css({
			left: windowCenter
		});
	}

	return {
		loadAirplane: function() {
			createAirplane();
		},
		flyHorizontal: function(horz) {
			if(typeof(horz)==='undefined') horz = -10;
			$(airplane_el).velocity({ left: horz}, 500);
		}
	}


});
