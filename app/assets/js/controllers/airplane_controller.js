// Load modules
define(['canvas'], function(canvas) {

	"use strict";

	console.log('Airplane controller is loading....');

	var airplane_el = '#airplane';
	var planeCor = $(airplane_el).offset();

	var center = $(window).outerWidth()/2;

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

	return {
		loadAirplane: function() {
			createAirplane();
		},
		planeCoorLeft: function() {
			planeCor = $(airplane_el).offset();
			// console.log(planeCor.left);
			return planeCor.left;
		},
		planeCoorTop: function() {
			planeCor = $(airplane_el).offset();
			// console.log(planeCor.top);
			return planeCor.top;
		},
		flyHorizontal: function(horz) {
			this.planeCoorLeft();
			if(typeof(horz)==='undefined') horz = planeCor.left-50+'px';
			$(airplane_el).velocity({ left: horz}, 275);
			this.planeCoorLeft();
		},
		flyVertical: function(vert) {
			this.planeCoorLeft();
			if(typeof(vert)==='undefined') vert = planeCor.top-50+'px';
			$(airplane_el).velocity({ top: vert}, 275);
			this.planeCoorLeft();
		},
	}


});
