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
		$(airplane_el).velocity({ opacity: 1}, 275).velocity({ bottom: '75px'},{
			duration: 1000,
			complete: function() {
				fillAmo();
			}
		});
	}

	var planeCoor = function() {
		var currentPos = $(airplane_el).offset();

		var left = currentPos.left;
		var top = currentPos.top;
		var right = left + $(airplane_el).outerWidth();
		var bottom = top + $(airplane_el).outerHeight();
	
		return {
			left: Math.round(left),
			top: Math.round(top),
			right: Math.round(right),
			bottom: Math.round(bottom),
		}
	}

	function fillAmo() {
		require(['amo'], function (amo) {
			amo.load();
		});
	}

	return {
		loadAirplane: function() {
			createAirplane();
		},
		planePosition: function() {
			return planeCoor();
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
