var cmpChoice = Math.ceil(Math.random() * 100);;
var prevGuess, newGuess;
var tries = 0;

var game =  {

	init: function() {
		$('input#submit').click(game.gamePlan);
		$('div.guage').hide();
		console.log(cmpChoice);
	},

 gamePlan: function(event) {
	event.preventDefault();
	newGuess = parseInt($('input#digit').val());
	if (newGuess > 100 || newGuess < 0) {
		$('div.guage').show().text('Please enter a valid input');
			$('input#digit').val('');
	}
	else {
	 	if(tries === 0) { 
	 		if (cmpChoice === newGuess) {
				$('div.guage').show().text('I give up! You are a darn good guesser');
					$('input#digit').val('');
			}
			else if (cmpChoice > newGuess) {
				$('div.guage').show().text("You're on the low low. Climb!");
					$('input#digit').val('');
			}
			else {
				$('div.guage').show().text("You're hot. Come down!");
					$('input#digit').val('');
				}
	 		} 
	 	else {
	 		game.compare(newGuess);
	 	}
	 		prevGuess = newGuess;
	 		tries++;
	}
	
},

compare: function(guess) {

	if (cmpChoice === newGuess) {
		$('div.guage').show().text('You are a good guesser');
	} else if (newGuess === prevGuess) {
		$('div.guage').show().text('Giving up already?');
		$('input#digit').val('');
	} else if (Math.abs(cmpChoice - newGuess) > Math.abs(cmpChoice - prevGuess)) {
		$('div.guage').show().text('I can feel the chills coming. Urgh!');
		$('input#digit').val('');
	} else {
		$('div.guage').show().text('Za weee! You my friend are getting hotter');
		$('input#digit').val('');
	}

},

}

$(document).ready(game.init);

