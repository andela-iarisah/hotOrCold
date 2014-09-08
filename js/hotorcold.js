$(document).ready(function() {
	var cmpChoice = Math.ceil(Math.random() * 100);	
		$('input#submit').click(function() {
			function compare() {
				var userChoice = document.getElementById('digit').value;
				var userChoiceInt = parseInt(userChoice);
				var newGuess = 0;
					if (isNaN(userChoiceInt) || userChoiceInt > 100 || userChoiceInt < 0) {
						$('p.status').append("Please put in a valid input");
					}
					else {
						if (userChoiceInt === cmpChoice) {
						$('p.status').append("<p>I give up! You are a darn good guesser</p>");
					}
						// else {
						// 	function reCheck = 
						// }
				



				// 		else if (userChoiceInt < cmpChoice) {
				// 		$('p.status').append("<p>You are cold</p>");
				// 	} 
				// 		else {
				// 		$('p.status').append("<p>You are hot</p>");
				// 	}
				// }
				// 	$('p.status').
					// $('input#digit').setAttribute(userChoiceInt, newGuess) 
					// if ((cmpChoice - newGuess) > (cmpChoice - oldGuess)) {
					// 	$('div.guage').append("<p>You are hotter</p>");
					// }
	};
			compare();
			console.log(cmpChoice);
});
});