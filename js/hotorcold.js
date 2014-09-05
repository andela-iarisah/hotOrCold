	var cmpChoice = Math.ceil(Math.random() * 100);
	$(document).ready(function() {

	
	var prevGuess = 0;
	var compare = function() {
	$('#submit').click(function() {
		var userChoice = document.getElementById('digit').value;
		var userChoiceInt = parseInt(userChoice);
			if(isNaN(userChoiceInt) || userChoiceInt > 100 || userChoiceInt < 0) {
				alert('Please enter a valid input');
			}
			else {
				if (userChoiceInt === cmpChoice) {
				alert("I give up! You're a darn good guesser");
			}
			else if (userChoiceInt < cmpChoice) {
				alert("You're cold");
			} 
			else {
				alert("You're hot");
			}
		}
	});
		
};
	compare();
	console.log(cmpChoice);

});	
