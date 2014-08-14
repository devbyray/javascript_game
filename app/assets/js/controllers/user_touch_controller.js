// Load modules
define(['airplane', 'hammer'], 
	function (airplane, Hammer) {

	"use strict";

	var gameCanvas = document.getElementById("gameCanvas"),
		mc = new Hammer.Manager(gameCanvas);

	function touchDevice() {
		console.log('touchDevice!');
		// Tap recognizer with minimal 2 taps
		mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
		// Single tap recognizer
		mc.add( new Hammer.Tap({ event: 'singletap' }) );


		// we want to recognize this simulatenous, so a quadrupletap will be detected even while a tap has been recognized.
		mc.get('doubletap').recognizeWith('singletap');
		// we only want to trigger a tap, when we don't have detected a doubletap
		mc.get('singletap').requireFailure('doubletap');


		mc.on("singletap doubletap", function(ev) {
		    // gameCanvas.textContent += '<h1>'+ ev.type +"</h1> ";
		    console.log(ev.type);
		    if(ev.type === 'singletap') {
			    singleTap(ev);
			}
		    if(ev.type === 'doubletap') {
			    doubleTap(ev);
			}
		});
	}

	function singleTap(ev) {
		alert('SingleTap');
	}
	function doubleTap(ev) {
		alert('doubleTap');
	}


	return {
		loadTouchCtrl: function() {
			touchDevice();
		}
	}


});
