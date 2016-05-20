Vue.component('letterForm', {
	props: ['list'], //bind list to letter array (v-bind:list="letters")
	template: '#letter-template', //Assign the template for this object
	data: function() {
		return {
			
		}
	},
	computed: {
		
	},
	methods: {
		addLetter: function(obj) { //add letter to array on keypress
			this.list.push(new letterObj(String.fromCharCode(obj.charCode)));
		},
		deleteLetter: function() { //delete letter on backspace
			this.list.pop();
		}
	}
});

new Vue({
	el: '#app',
	data: {
		letters: [ //This array is bound to the letter form (v-bind:list="letters")
		]
	}
});

function letterObj(char) {
	this.char = char;
	this.color = 'red';
	this.font = 'Arial';
	this.size = "50px";
	this.background = '';
};