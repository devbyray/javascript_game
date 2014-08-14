// Load modules
define(['airplane'], 
	function (airplane) {

	"use strict";

	var gameCanvas = document.getElementById("gameCanvas");

	console.log('Userinput controller is loading....');

	function keyboardCtrl() {
		window.addEventListener("keydown", keyboardInput, false);
	}

	function keyboardInput(e) {
		// console.log(keyboardCodes[e.keyCode].toLowerCase());

		var keyCtrl = keyboardCodes[e.keyCode].toLowerCase();
		if(keyCtrl === 'left') {
			airplane.planeCoorLeft();
			// console.log('Fly to left sir!');
			airplane.flyHorizontal(Math.round(airplane.planeCoorLeft()-50)+'px');
		}
		if(keyCtrl === 'right') {
			// console.log('Fly to right sir!');
			airplane.flyHorizontal(Math.round(airplane.planeCoorLeft()+50)+'px');
		}
		if(keyCtrl === 'up') {
			airplane.planeCoorTop();
			// console.log('Fly to up sir!');
			if(airplane.planeCoorTop() > 50){
				airplane.flyVertical(Math.round(airplane.planeCoorTop()-50)+'px');
			}
		}
		if(keyCtrl === 'down') {
			airplane.planeCoorTop();
			// console.log('Fly to down sir!');
			airplane.flyVertical(Math.round(airplane.planeCoorTop()+50)+'px');
		}
	}

	var keyboardCodes = {
		8: 'Backspace',
		9: 'Tab',
		13: 'Enter',
		16: 'Shift',
		17: 'Ctrl',
		18: 'Alt',
		32: 'Space',
		37: 'Left',
		38: 'Up',
		39: 'Right',
		40: 'Down',
		65: 'A - Left',
		87: 'W - Up',
		68: 'D - Right',
		83: 'S - Down',
	    96: "num_0",
	    97: "num_1",
	    98: "num_2 - Down",
	    99: "num_3",
	    100: "num_4 - Left",
	    101: "num_5",
	    102: "num_6 - Right",
	    103: "num_7",
	    104: "num_8 - Up",
	    105: "num_9"
	}

	return {
		loadKeyboardCtrl: function() {
			keyboardCtrl();
		}
	}


});
