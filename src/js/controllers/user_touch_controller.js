// Load modules
define(['airplane', 'hammer'], 
	function (airplane, Hammer) {

	"use strict";

	var gameCanvas = document.getElementById("gameCanvas"),
		getAirplane = document.getElementById("airplane"),
		mc = new Hammer.Manager(gameCanvas);

	var START_X = airplane.planeCoorLeft();
	var START_Y = airplane.planeCoorTop();

	var ticking = false;
	var transform;
	var timer;

	function touchDevice() {
		console.log('touchDevice!');
		// Tap recognizer with minimal 2 taps
		mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
		// Single tap recognizer
		mc.add( new Hammer.Tap({ event: 'singletap' }) );

		mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));


		// we want to recognize this simulatenous, so a quadrupletap will be detected even while a tap has been recognized.
		mc.get('doubletap').recognizeWith('singletap');
		// we only want to trigger a tap, when we don't have detected a doubletap
		mc.get('singletap').requireFailure('doubletap');


		mc.on("singletap doubletap", function(ev) {
		    // gameCanvas.textContent += '<h1>'+ ev.type +"</h1> ";
		 //    console.log(ev.type);
		 //    if(ev.type === 'singletap') {
			//     singleTap(ev);
			// }
		 //    if(ev.type === 'doubletap') {
			//     doubleTap(ev);
			// }
		});

		mc.on("panstart panmove", onPan);

		
	}

	function singleTap(ev) {
		alert('SingleTap');
	}
	function doubleTap(ev) {
		alert('doubleTap');
	}

	function logEvent(ev) {
	    //el.innerText = ev.type;
	}

	function resetElement() {
	    getAirplane.className = 'animate';
	    transform = {
	        translate: { x: START_X, y: START_Y },
	        scale: 1,
	        angle: 0,
	        rx: 0,
	        ry: 0,
	        rz: 0
	    };
	    requestElementUpdate();
	}

	function updateElementTransform() {
	    var value = [
	        'translate3d(' + transform.translate.x + 'px, ' + transform.translate.y + 'px, 0)',
	        'scale(' + transform.scale + ', ' + transform.scale + ')',
	        'rotate3d('+ transform.rx +','+ transform.ry +','+ transform.rz +','+  transform.angle + 'deg)'
	    ];

	    value = value.join(" ");
	    getAirplane.style.webkitTransform = value;
	    getAirplane.style.mozTransform = value;
	    getAirplane.style.transform = value;
	    ticking = false;
	}

	function requestElementUpdate() {
	    if(!ticking) {
	        reqAnimationFrame(updateElementTransform);
	        ticking = true;
	    }
	}

	function onPan(ev) {
	    getAirplane.className = '';
	    transform.translate = {
	        x: START_X + ev.deltaX,
	        y: START_Y + ev.deltaY
	    };

	    logEvent(ev);
	    requestElementUpdate();
	}

	return {
		loadTouchCtrl: function() {
			touchDevice();
		}
	}


});
