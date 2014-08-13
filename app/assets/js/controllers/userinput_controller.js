// Load modules
define(['order!device', 'order!hammer'], 
	function (device, Hammer) {

	"use strict";

	var gameCanvas = document.getElementById("gameCanvas"),
		mc = new Hammer.Manager(gameCanvas);

	console.log('Userinput controller is loading....');

	if(device.deviceType() === 'device') {
		touchDevice();
	} else {
		window.addEventListener("keydown", keyboardInput, false);
	}

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
			    singleTap(ev);
			}
		});
	}

	function singleTap(ev) {
		
			alert('SingleTap');
	}
	function doubleTap(ev) {
		
			alert('doubleTap');
	}
 
	function keyboardInput(e) {
	    switch(e.keyCode) {
			case 8:
			    // Backspace key pressed
			    console.log('Backspace');
			    break;
			case 9:
			    // Tab key pressed
			    console.log('Tab');
			    break;
			case 13:
			    // Enter key pressed
			    console.log('Enter');
			    break;
			case 16:
			    // Shift key pressed
			    console.log('Shift');
			    break;
			case 17:
			    // Ctrl key pressed
			    console.log('Ctrl');
			    break;
			case 18:
			    // Alt key pressed
			    console.log('Alt');
			    break;
			case 32:
			    // left key pressed
			    console.log('Space');
			    break;
			case 37:
			    // Left key pressed
			    console.log('Left');
			    break;
			case 38:
			    // Up key pressed
			    console.log('Up');
			    break;
			case 39:
			    // Right key pressed
			    console.log('Right');
			    break;
			case 40:
			    // Down key pressed
			    console.log('Down');
			    break;
			case 112:
			    // f1 key pressed
			    console.log('f1');
			    break;
			case 113:
			    // f2 key pressed
			    console.log('f2');
			    break;
			case 114:
			    // f1 key pressed
			    console.log('f3');
			    break;
			case 115:
			    // f1 key pressed
			    console.log('f4');
			    break;
			case 116:
			    // f1 key pressed
			    console.log('f5');
			    break;
			case 117:
			    // f1 key pressed
			    console.log('f6');
			    break;
			case 118:
			    // f1 key pressed
			    console.log('f7');
			    break;
			case 119:
			    // f1 key pressed
			    console.log('f8');
			    break;
			case 120:
			    // f1 key pressed
			    console.log('f9');
			    break;
			case 121:
			    // f1 key pressed
			    console.log('f10');
			    break;
			case 122:
			    // f1 key pressed
			    console.log('f11');
			    break;
			case 123:
			    // f1 key pressed
			    console.log('f12');
			    break;
	    }
   
	}

});
