// Load modules
define(['canvas'], function(canvas) {
	
	
	"use strict";

	console.log('Airplane controller is loading....');

	var airplane_el = '#airplane';

	var center = Math.round($(window).outerWidth()/2)-48;

	function createAirplane() {
		console.log('Airplane created');
		$(gameCanvas).append('<div id="airplane"></div>');
		fadeInAirplane();
	}

	function fadeInAirplane() {
		console.log('Airplane fadeIn');
		$(airplane_el).css('left', center+'px');
		$(airplane_el).velocity({ opacity: 1}, 275).velocity({ top: '75%'}, 1000);

	}

	function planeCoor() {
		var planeCor = $(airplane_el).offset();
		return {
			left: planeCor.left,
			top: planeCor.top,
		}
	}
	return {
		loadAirplane: function() {
			createAirplane();
		},
		planePosition: function() {
			planeCoor();
		},
		flyHorizontal: function(horz) {
			if(typeof(horz)==='undefined') horz = this.planePosition(['left'])-50+'px';
			$(airplane_el).velocity({ left: horz}, 275);
		},
		flyVertical: function(vert) {
			if(typeof(vert)==='undefined') vert = this.planePosition(['top'])-50+'px';
			$(airplane_el).velocity({ top: vert}, 275);
		},
	}


});
