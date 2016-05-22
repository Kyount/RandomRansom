WebFontConfig = {
google: { families: [ 'Lobster::latin', 'Patua+One::latin', 'Abril+Fatface::latin', 'Bangers::latin', 'Special+Elite::latin', 'Black+Ops+One::latin', 'Roboto+Mono::latin', 'PT+Mono::latin', 'Cutive+Mono::latin', 'Oswald::latin', 'PT+Sans::latin', 'Slabo+27px::latin', 'Lora::latin', 'Roboto+Slab::latin', 'Droid+Serif::latin', 'Merriweather::latin', 'Open+Sans::latin', 'Rubik:300,500:latin', 'Lato:400,600:latin'] }
};
(function() {
var wf = document.createElement('script');
wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
wf.type = 'text/javascript';
wf.async = 'true';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf, s);
})();

var colorMixin = {
	data: function() {
		return {
			colorMap: [//[TEXT, BACKGROUND]
				['#FF0000', '#FFE5BE'],//0  red on light orange
				['#CEE6FF', '#2E649A'],//1  lightblue on darkblue
				['#C7006D', '#F7B7B7'],//2  purple on pink
				['#5800FF', '#9F9FFF'],//3  dark indigo on light indigo
				['#75CC41', '#F8FF79'],//4  green on yellow
				['#81FF85', '#1BA074'],//5  lightgreen on darkgreen
				['#FFED00', '#7B7BE4'],//6  yellow on lavender
				['#FF9800', '#FFFEF0'],//7  Orange on off-white
				['#6B6B6B', '#CECECE'],//8  gray on light gray
				['#4C372C', '#985734'],//9  dark brown on brown
				['#FFED00', '#E80000'],//10  yellow on red
				['#3E5DFF', '#FFD100'],//11  blue on yellow
				['#CFE4FF', '#4E518E'],//12  light blue on dark purple-ish
				['#673AB7', '#F4EEFF'],//13  purple on light purple
				['#FF5722', '#ADFFA7'],//14  orangered on light green
				['#FF8E52', '#527B5D'],//15  orange on green
				['#00CEFF', '#383838'],//16  blue on dark gray
				['#CFEAFF', '#2196F3'],//17  light blue on blue
				['#FFC7C7', '#712E67'],//18  pink on purple
				['#FF0097', '#404040'],//19  pink on dark grey
				['#FFEB3B', '#673AB7'],//20  yellow on purple
				['#00BCD4', '#BDFFF2'],//21  blue on light blue
				['#FF3434', '#542761'],//22  red on dark purple
				['#19FFA1', '#FF67C1'],//23  light green on pink
				['#CECECE', '#6B6B6B'],//24  light gray on dark gray
				['#2196F3', '#FFEB3B'],//25  blue on yellow
				//end custom color schemes
				['#FF0000', '#FFFFFF'],//26  red
				['#FF8300', '#FFFFFF'],//27  orange
				['#0093FF', '#FFFFFF'],//28  blue
				['#3500FF', '#FFFFFF'],//29  dark blue
				['#9F00FF', '#FFFFFF'],//30  purple
				['#FF008B', '#FFFFFF'],//31  pink
				['#FFCA00', '#000000'],//32  orange
				['#00FF68', '#000000'],//33  green
				['#FD00FF', '#000000'],//34  pink
				//end black/white background
				['#000000', '#00FFAA'],//35  light green
				['#000000', '#FF0079'],//36  pink
				['#000000', '#A1D9FF'],//37  blue
				['#000000', '#FAFFA1'],//38  yellow
				['#FFFFFF', '#3B00D2'],//39  blue
				['#FFFFFF', '#5E9E59'],//39  green
				['#FFFFFF', '#99599E'],//40  purple
				['#FFFFFF', '#FF5D5D'],//41  red
				//end back/white text
				['#FFFFFF', '#000000'],//42
				['#FFFFFF', '#000000'],//43
				['#000000', '#FFFFFF'],//44
				['#000000', '#FFFFFF'],//45
				['#000000', '#FFFFFF'],//46
				['#000000', '#FFFFFF'],//47
				// ['#000000', '#FFFFFF'],
				// ['#000000', '#FFFFFF'],
				// ['#000000', '#FFFFFF']
				//black white text is more common,
			],
			fontList: [ //Fonts
				"'Lobster', cursive",
				"Patua One, cursive",
				"'Abril Fatface', cursive",
				"'Bangers', cursive",
				"'Special Elite', cursive",
				"'Black Ops One', cursive",
				"'Roboto Mono', ",
				"'PT Mono', ",
				"'Cutive Mono', ",
				"'Oswald', sans-serif",
				"'PT Sans', sans-serif",
				"'Slabo 27px', serif",
				"'Lora', serif",
				"'Roboto Slab', serif",
				"'Droid Serif', serif",
				"'Merriweather', serif",
				"'Open+Sans', sans-serif",
				"'Rubik', sans-serif",
				"'Lato', sans-serif"
			],
		}
	}
}

var randoMixin = {
	methods: {
		randomFromList: function(x) { //randomly selects an item from an array
			var l = x.length;
			var n = Math.floor(Math.random()*l);
			// console.log("number = " + n + "-- item = " + x[n]);
			return x[n];
		},
		randomBoolean: function(x, y, weight) { //randomly selects either x or y item based on the ratio in "weight"
			return Math.random()<weight ? x : y;
		}
	}
}

Vue.component('letter', { //the component block for each letter
	props: ['char'], //char = character; colors = color scheme passed in from color array, fonts = font list passed in from font array
	mixins: [randoMixin, colorMixin],
	data: function() {
		return {
			styleObj: {
				color: '', //All these coorespond to their CSS style values
				fontSize: '', 
				backgroundColor: '',
				fontFamily: '',
				textShadow: '',
				boxShadow: '',
				marginLeft: '',
				marginRight: '',
				paddingLeft: '',
				paddingRight: '',
				transform: ''
			},
			character: [],
			initSize: 100, //base size of letter
			sizeVariance: 50, //amount of random variance allowed per letter
			shadowAmt: 5, //amount of random shadow variance allowed per letter
			rotateVariance: 10, //amount of random rotation variance allowed per letter
		}
	},
	template: '#letter-template',
	created: function() { //when each letter is created
		this.setCharacter();
		this.setColors(); //set the colors
		this.setSize(); //set the letter size
		this.setFont(); //set the fonts
		this.setStyle(); //set the style
	},
	computed: {
		randomColor: function() {
			return this.randomFromList(this.colorMap);
		},
		randomFont: function() {
			return this.randomFromList(this.fontList);
		}
	},
	methods: {
		setCharacter() {
			this.character = this.char[this.char.length - 1];
		},
		setColors: function() {
			if (this.character !== " ") { //if the character isn't a space
				this.styleObj.color = this.randomColor[0]; //set the letter color
				this.styleObj.backgroundColor = this.randomColor[1]; //set the background color
			} else { //if the character is a space, make sure it doesn't have a color
				this.styleObj.color = '';
				this.styleObj.backgroundColor = '';
			}
		},
		setSize: function() {
			var siV = this.sizeVariance;
			var inS = this.initSize;
			this.styleObj.fontSize = (Math.floor((Math.random()*siV) - (siV/2)) + inS)/10 + 'em';
			//sets the size to be +- size variance based on the initial size randomly
		},
		setFont: function() {
			this.styleObj.fontFamily = this.randomFont; //grabs a font from the array
		},
		setStyle: function() {
			if (this.character !== " ") { //make sure a space isn't assigned a style
				if (this.randomBoolean(true, false, 0.5)) { // 50% chance
					var n = Math.floor(Math.random()*this.shadowAmt);
					var m = (Math.random() * (1 - 0.3)) + 0.3;
					this.styleObj.textShadow =
						this.randomBoolean(n, -n, 0.5) + "px "
						+ this.randomBoolean(n, -n, 0.5) + "px " +
						"0px " + "rgba(0,0,0," + m + ")";
				} //this just sets the drop shadow based on the shadow variance value
				if (this.randomBoolean(true, false, 0.5)) { // 50% chance
					var v = this.rotateVariance;
					var r = ((Math.random()*v*2)-v) + "deg";
					this.styleObj.transform = "rotate(" + r + ")"; //assign random rotation
				}
				if (this.randomBoolean(true, false, 0.5)) { // 50% chance
					this.styleObj.paddingRight = Math.random()/4 + "em"; //assign random padding right
				}
				if (this.randomBoolean(true, false, 0.5)) { // 50% chance
					this.styleObj.paddingLeft = Math.random()/4 + "em"; //assign random padding left
				}
			} else { //if the character is a space assign it a margin only
				this.styleObj.marginRight = "0.3em";
				this.styleObj.marginLeft = "0.3em";
			}
		}
	}
});

Vue.component('info', { //template for the info popup
	template: '#info-template',
	methods: {
		enableColors: function() {
			colorEnable = !colorEnable; //this won't be here once I figure out the random bug
		}
	}
});

var colorEnable = false;
var params = window.location.href

new Vue({
	el: '#app',
	mixins: [randoMixin, colorMixin],
	data: {
		letters: [], //The array that holds the letters
		infoShow: false, //show or hide the array
	},
	created: function() {
		this.preloadMessage();
	},
	computed: {
		typeShow: function() { //hide the "start typing..." when there are letters visible
			if (!this.letters.length) {
				return true;
			} else {
				return false;
			}
		},
		preload: function() {
			return '';
		}
	},
	methods: {
		// setCharacter: function(obj) { //triggers every time the users enters a character
		// 	console.log(obj);
		// 	window.scrollTo(0,document.body.scrollHeight); //scrolls the window to follow the characters
		// 	this.letters.push({ //pushing into the message array
		// 		char: String.fromCharCode(obj.charCode), //character code into actual character
		// 		color: this.randomFromList(this.colorMap), //color from list
		// 		font: this.randomFromList(this.fontList) //font from list
		// 	}); //Pushes letter into letters array
		// },
		// deleteLetter: function() {
		// 	this.letters.pop(); //deletes last letter in array
		// },
		reassignChar: function() {
			var children = this.$refs.item;
			var l = children.length;
			for (i=0; i<l; i++) {
				children[i].character = this.letters[i];
			}
		},
		randomizeLetters: function() { //randomization function
			var children = this.$refs.item; //grab all the children
			var l = children.length;
			var c = [];
			var f = [];
			for (i=0; i<l; i++) { //fill the array with random values from the respective lists
				c.push(this.randomFromList(this.colorMap));
				f.push(this.randomFromList(this.fontList));
			}
			for (i=0; i<l; i++) { //re-assign all the values randomly per child
				children[i].colors[0] = c[i][0];
				children[i].colors[1] = c[i][1];
				children[i].fonts = f[i];
				if (colorEnable) { //this is buggy, you have to hit the button in the info page to enable it.
					children[i].setColors();
				}
				children[i].setSize();
				children[i].setFont();
				children[i].setStyle();
			}
		},
		toggleInfo: function() { //show the info
			this.infoShow = !this.infoShow;
		},
		preloadMessage: function() {
			console.log(this.preload);
		}
	}
});