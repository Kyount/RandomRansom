var colorMixin = {
	data: function() {
		return {
			colorMap: [//[TEXT, BACKGROUND]
				['#FF0000', '#FFE5BE'],//red on light orange
				['#CEE6FF', '#2E649A'],//lightblue on darkblue
				['#C7006D', '#F7B7B7'],//purple on pink
				['#5800FF', '#9F9FFF'],//dark indigo on light indigo
				['#75CC41', '#F8FF79'],//green on yellow
				['#81FF85', '#1BA074'],//lightgreen on darkgreen
				['#FFED00', '#7B7BE4'],//yellow on lavender
				['#FF9800', '#FFFEF0'],//Orange on off-white
				['#6B6B6B', '#CECECE'],//gray on light gray
				['#4C372C', '#985734'],//dark brown on brown
				['#FFED00', '#E80000'],//yellow on red
				['#3E5DFF', '#FFD100'],//blue on yellow
				['#CFE4FF', '#4E518E'],//light blue on dark purple-ish
				['#673AB7', '#F4EEFF'],//purple on light purple
				['#FF5722', '#ADFFA7'],//orangered on light green
				['#FF8E52', '#527B5D'],//orange on green
				['#00CEFF', '#383838'],//blue on dark gray
				['#CFEAFF', '#2196F3'],//light blue on blue
				['#FFC7C7', '#712E67'],//pink on purple
				['#FF0097', '#404040'],//pink on dark grey
				['#FFEB3B', '#673AB7'],//yellow on purple
				['#00BCD4', '#BDFFF2'],//blue on light blue
				['#FF3434', '#542761'],//red on dark purple
				['#19FFA1', '#FF67C1'],//light green on pink
				['#CECECE', '#6B6B6B'],//light gray on dark gray
				['#2196F3', '#FFEB3B'],//blue on yellow
				//end custom color schemes
				['#FF0000', '#FFFFFF'],//red
				['#FF8300', '#FFFFFF'],//orange
				['#0093FF', '#FFFFFF'],//blue
				['#3500FF', '#FFFFFF'],//dark blue
				['#9F00FF', '#FFFFFF'],//purple
				['#FF008B', '#FFFFFF'],//pink
				['#FFCA00', '#000000'],//orange
				['#00FF68', '#000000'],//green
				['#FD00FF', '#000000'],//pink
				//end black/white background
				['#000000', '#00FFAA'],//light green
				['#000000', '#FF0079'],//pink
				['#000000', '#A1D9FF'],//blue
				['#000000', '#FAFFA1'],//yellow
				['#FFFFFF', '#3B00D2'],//blue
				['#FFFFFF', '#5E9E59'],//green
				['#FFFFFF', '#99599E'],//purple
				['#FFFFFF', '#FF5D5D'],//red
				//end back/white text
				['#FFFFFF', '#000000'],
				['#FFFFFF', '#000000'],
				['#000000', '#FFFFFF'],
				['#000000', '#FFFFFF'],
				['#000000', '#FFFFFF'],
				['#000000', '#FFFFFF'],
				['#000000', '#FFFFFF'],
				['#000000', '#FFFFFF'],
				['#000000', '#FFFFFF']
				//black white text is more common,
			]
		}
	}
}

var randoMixin = {
	methods: {
		randomFromList: function(x) { //randomly selects an item from an array
			var l = x.length;
			var n = Math.floor(Math.random()*l);
			return x[n];
		}
	}
}

Vue.component('letter', {
	props: ['char', 'colors'],
	mixins: [randoMixin],
	data: function() {
		return {
			styleObj: {
				color: '',
				fontSize: '',
				backgroundColor: '',
				fontFamily: ''
			}
		}
	},
	template: '#letter-template',
	created: function() {
		this.setColors();
		this.setSize();
		this.setFont();
	},
	computed: {
		// compStyle: function() {
		// 	return {
		// 		color: this.colors[0],
		// 		backgroundColor: this.colors[1],
		// 		fontSize: this.size,
		// 		fontFamily: this.font
		// 	}
		// }
	},
	methods: {
		setColors: function() {
			this.styleObj.color = this.colors[0];
			this.styleObj.backgroundColor = this.colors[1];
		},
		setSize: function() {
			this.size = "50px";
		},
		setFont: function() {
			this.font = "Arial";
		}
	}
});

new Vue({
	el: '#app',
	mixins: [randoMixin, colorMixin],
	data: {
		letters: [], //The array that holds the letters
	},
	computed: {

	},
	methods: {
		setCharacter: function(obj) {
			this.letters.push({
				char: String.fromCharCode(obj.charCode),
				colors: this.randomFromList(this.colorMap)
			}); //Pushes letter into letters array
		},
		deleteLetter: function() {
			this.letters.pop(); //deletes last letter in array
		},
		randomizeLetters: function() {
			var children = this.$refs.item;
			for (i=0; i<children.length; i++) {
				var c = this.randomFromList(this.colorMap);
				children[i].colors[0] = c[0];
				children[i].colors[1] = c[1];
				children[i].setColors();
			}
		}
	}
});