/* this is a 

JS comment */
// This is also a comment (but only one line)

function askQuestions() {
	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName+' '+lastName;

	console.log(fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('User is an adult.');
	} else if (age >= 13) {
		console.log('User is a teenager.');
	} else {
		console.log('User is a child.');
	}

	/*
	Option 1
	if (firstName == "General"  && lastName !== "Assembly") {
	     console.log ("Yes greeting");
	} else {
		console.log ("No greeting")
	} */

	if (fullName !== 'General Assembly' && firstName.trim() === 'General') {
		console.log ('Greetings, General!');

	}
	/*
	Option 3
	if (firstName === 'General') {
		if (lastName !== 'Assembly') {
			console.log ('Greetings, General!')
		}
	} */



	var faveColour = prompt('What is your favourite colour?');

	var colours = ['red','green', 'yellow','blue']; 

	for (i = 0; i < colours.length; i++) {
		if (faveColour.toLowerCase() === colours[i]) {
			$('h1').css('color', faveColour);
		}
	}

	/* This is the easy way to change things into 100+ colours, 
	instead of having faveColour = blue, faveColour = red.....,
	'for' makes a loop, see more here: https://www.w3schools.com/js/js_loop_for.asp
	length refers to how many colours there are, i could be anything*/
}


	// When the page has loaded
$(function () {
	// Run askquestions when image is clicks
	$('img').on('click',askQuestions);
	// Hide all the content
	$('h3').next().hide();

	// When the user clicks on a heading
	$('h3').on('click', function (){
	
	// Hide the next element
	$(this).next().slideToggle(100);

	});

});