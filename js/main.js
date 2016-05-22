WebFontConfig = {
    google: { families: [ 'Lobster::latin', 'Patua+One::latin', 'Abril+Fatface::latin', 'Bangers::latin', 'Special+Elite::latin', 'Black+Ops+One::latin', 'Roboto+Mono::latin', 'PT+Mono::latin', 'Cutive+Mono::latin', 'Oswald::latin', 'PT+Sans::latin', 'Slabo+27px::latin', 'Lora::latin', 'Roboto+Slab::latin', 'Droid+Serif::latin', 'Merriweather::latin' ] }
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
			fontList: [
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
				"'Merriweather', serif"
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
		randomBoolean: function(x, y, weight) {
			return Math.random()<weight ? x : y;
		}
	}
}

Vue.component('letter', {
	props: ['char', 'colors', 'fonts'],
	mixins: [randoMixin],
	data: function() {
		return {
			styleObj: {
				color: '',
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
			initSize: 100,
			sizeVariance: 50,
			shadowAmt: 5,
			rotateVariance: 10,

		}
	},
	template: '#letter-template',
	created: function() {
		this.setColors();
		this.setSize();
		this.setFont();
		this.setStyle();
	},
	computed: {
		
	},
	methods: {
		setColors: function() {
			if (this.char !== " ") {
				this.styleObj.color = this.colors[0];
				this.styleObj.backgroundColor = this.colors[1];
			} else {
				this.styleObj.color = '';
				this.styleObj.backgroundColor = '';
			}
		},
		setSize: function() {
			var siV = this.sizeVariance;
			var inS = this.initSize;
			this.styleObj.fontSize = (Math.floor((Math.random()*siV) - (siV/2)) + inS)/10 + 'em';
		},
		setFont: function() {
			this.styleObj.fontFamily = this.fonts;
		},
		setStyle: function() {
			if (this.char !== " ") {
				if (this.randomBoolean(true, false, 0.5)) {
					var n = Math.floor(Math.random()*this.shadowAmt);
					var m = (Math.random() * (1 - 0.3)) + 0.3;
					this.styleObj.textShadow =
						this.randomBoolean(n, -n, 0.5) + "px "
						+ this.randomBoolean(n, -n, 0.5) + "px " +
						"0px " + "rgba(0,0,0," + m + ")";
				}
				if (this.randomBoolean(true, false, 0.5)) {
					// this.styleObj.marginRight = Math.random()/8 + "em";
					// this.styleObj.marginLeft = Math.random()/8 + "em";
				} else {
					var v = this.rotateVariance;
					var r = ((Math.random()*v*2)-v) + "deg";
					this.styleObj.transform = "rotate(" + r + ")";
				}
				if (this.randomBoolean(true, false, 0.5)) {
					this.styleObj.paddingRight = Math.random()/4 + "em";
				}
				if (this.randomBoolean(true, false, 0.5)) {
					this.styleObj.paddingLeft = Math.random()/4 + "em";
				}
			} else {
				this.styleObj.marginRight = "0.5em";
				this.styleObj.marginLeft = "0.5em";
			}
		}
	}
});

Vue.component('info', {
	template: '#info-template'
});

new Vue({
	el: '#app',
	mixins: [randoMixin, colorMixin],
	data: {
		letters: [], //The array that holds the letters
		infoShow: false
	},
	computed: {

	},
	methods: {
		setCharacter: function(obj) {
			this.letters.push({
				char: String.fromCharCode(obj.charCode),
				color: this.randomFromList(this.colorMap),
				font: this.randomFromList(this.fontList)
			}); //Pushes letter into letters array
		},
		deleteLetter: function() {
			this.letters.pop(); //deletes last letter in array
		},
		randomizeLetters: function() {
			var children = this.$refs.item;
			var l = children.length;
			var c = [];
			var f = [];
			for (i=0; i<l; i++) {
				c.push(this.randomFromList(this.colorMap));
				f.push(this.randomFromList(this.fontList));
			}
			for (i=0; i<l; i++) {
				children[i].colors[0] = c[i][0];
				children[i].colors[1] = c[i][1];
				children[i].fonts = f[i];
				children[i].setColors();
				children[i].setSize();
				children[i].setFont();
				children[i].setStyle();
			}
		},
		showInfo: function() {
			this.infoShow = !this.infoShow;
		}
	}
});