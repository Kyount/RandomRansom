(function() {
	var app = angular.module('ransom', []);

	app.controller('MessageController', function() {

		this.message = []; //array for cumulation of individual letters

		this.checkForBackspace = function(key) {
			if (key.keyCode === 8) { //delete last letter if key was backspace
				this.deleteLetter();
			}
		};

		this.addLetter = function(key) { //on keypress
			var m = setLetterObj(String.fromCharCode(key.charCode)); //transform the letter
			this.message.push(m); //push the letter to the message
		};

		this.deleteLetter = function() { //on backspace, remove last letter
			this.message.pop();
		};

		var setLetterObj = function(letter) {
			var n = new letterObj(letter);
			n.background = getRandomBackgroundColor(n);
			n.color = randomBoolean(blackOrWhite(), randomizeTextColor(n), 0.5);
			n.size = "100px";
			return n;
		};

		var blackOrWhite = function() {
			return randomBoolean("#FFFFFF", "#000000", 0.5);
		};

		var getRandomBackgroundColor = function(n) {
			var c = n.color;
			if (n.letter !== " ") {//do not color background on space character

				if (c === "#FFFFFF") { return randomColor({
						luminosity: randomBoolean('dark', 'bright', 0.5),
						hue: randomBoolean('', 'monochrome', 0.7)
					});
				} else { return randomColor({
						luminosity: randomBoolean('light', 'bright', 0.5),
						hue: randomBoolean('', 'monochrome', 0.7)
					});
				}
			}
		};
	});

	function letterObj(letter) {
		this.letter = letter;
		this.color = '#000000';
		this.font = 'Arial';
		this.size = "50px";
		this.background = '#FFFFFF';
		this.blend = 1;
	}

	var randomBoolean = function(x, y, weight) { //randomly selects boolean based on weight (as decimal)
		if(Math.random()<weight) {
			return x;
		} else {
			return y;
		}
	}

	var randomFromList = function(x) { //randomly selects an item from an array
		var l = x.length;
		var n = Math.floor(Math.random()*l);
		console.log(n);
		for (i=0; i<l; i++) {
			if (n === i) {
				return x[i];
			}
		}
	}

})();