//Declaring global variables

    //variables to keep track of wrong/right questions
var correctAnswerCount = 0;
var wrongAnswerCount = 0;

	//variable with value of start of timer
var questionTimer = 21;

	
var showQuestion;


var timerId;

	//variable for index
var count = -1;

// Array of objects for Q&A
var questions = [

	{ 
		question: 'Which was the first restaurant, recognized by the Library of Congress, to serve hamburgers?', 
		answer1: ' class="correct"> Louis&#39; Lunch in New Haven, CT',
		answer2: ' class="wrong">White Castle  in Witchita, KS',
		answer3: ' class="wrong">Bob&#39;s Burgers in Seymour&#39;s Bay, RI',
		answer4: ' class="wrong">McDonald&#39;s in San Bernadino, CA'
		
	},

	{
		question: 'What is a cronut?',
		answer1: ' class="wrong">An old doughnut',
		answer2: ' class="wrong">A snack eaten by pirates',
		answer3: ' class="correct">A croissant and a doughnut',
		answer4: ' class="wrong">It&#39;s not a food.'
	},

	{
		question: "Which restaurant was named the best restaurant in the world by &#39;The World&#39;s 50 Best Restaurants&#39;?",
		answer1: ' class="wrong">Per Se',
		answer2: ' class="wrong">French Laundry',
		answer3: ' class="correct">Eleven Madison Park',
		answer4: ' class="wrong">Jean Georges'

	},

	{
		question: 'What is the name of the long time street food group, located in New Brunswick, NJ, that became defunct on August 15, 2013?',
		answer1: ' class="correct">Grease Trucks',
		answer2: ' class="wrong">Stuff Yer Face',
		answer3: ' class="wrong">Criff Dogs',
		answer4: ' class="wrong">Clydz'

	},

	{
		question: 'Which of the following foods has the most amount of protein in 1 cup?',
		answer1: ' class="wrong">Broccoli raab',
		answer2: ' class="wrong">Quinoa',
		answer3: ' class="correct">Black beans',
		answer4: ' class="wrong">Onions'
	},

	{
		question: 'In shoyu ramen, &#39;shoyu&#39;, refers to what in the ramen?',
		answer1: ' class="wrong">Type of noodle',
		answer2: ' class="correct">Soy sauce',
		answer3: ' class="wrong">Meat',
		answer4: ' class="wrong">Vegetable'

	},

	{
		question: 'The more bread is kneaded, more of what is formed?',
		answer1: ' class="wrong">Fiber',
		answer2: ' class="correct">Gluten',
		answer3: ' class="wrong">Flour',
		answer4: ' class="wrong">Salt'

	},

	{
		question: 'What does a roux consist of?',
		answer1: ' class="wrong">Cornstarch and milk',
		answer2: ' class="correct">Butter and flour',
		answer3: ' class="wrong">Butter and milk',
		answer4: ' class="wrong">Butter, milk, and flour'

	},

	{
		question: 'Which French confection is made using finely ground almonds?',
		answer1: ' class="wrong">Eclair',
		answer2: ' class="wrong">Kouign amman',
		answer3: ' class="wrong">Creme brulee',
		answer4: ' class="correct">Macaron'

	},

	{
		question: 'What is ube?',
		answer1: ' class="wrong">A traditional Hungarian dessert',
		answer2: ' class="wrong">An experimental superfood being developed in California',
		answer3: ' class="correct">A purple yam',
		answer4: ' class="wrong">A type of honey'
	},

]

// Array of objects for correct answer images and titles
var imageAnswer = [

	{
		url: 'assets/images/00-louislunch.png',
		title: 'Louis&#39; Lunch in New Haven, CT',
	},

	{
		url: 'assets/images/01-cronut.jpg',
		title: 'A croissant and a doughnut',
	},

	{
		url: 'assets/images/02-emp.jpg',
		title: 'Eleven Madison Park',
	},

	{
		url: 'assets/images/03-greasetrucks.jpg',
		title: 'Grease Trucks',
	},

	{
		url: 'assets/images/04-blackbeans.jpg',
		title: 'Black beans',
	},

	{
		url: 'assets/images/05-shoyu.jpg',
		title: 'Soy sauce',
	},

	{
		url: 'assets/images/06-bread.jpg',
		title: 'Gluten',
	},

	{
		url: 'assets/images/07-roux.jpg',
		title: 'Butter and flour',
	},

	{
		url: 'assets/images/08-macaron.png',
		title: 'Macaron',
	},

	{
		url: 'assets/images/09-ube.jpg',
		title: 'A purple yam',
	}

]

function begin() {

	count = -1;

	// Start screen display
	$('div.questionarea').html('<h1>Food Trivia Game!</h1>');
	$('div.questionarea').append('<img id="titleimage" src="assets/images/title-image.png" alt="food"><br>');
	$('div.questionarea').append('<button type="button" class="btn btn-success start">Start</button>');

	// Starts game after pressing 'Start Button' on title page
	$('.start').click(startGame);

}

begin();

// Function to start game
function startGame() {

	showQuestion = setTimeout(newQuestion, 100);

}

// Displays question and answers, creates divs for answeres and timer
function displayQuestion() {

	$('div.questionarea').html(questions[count].question + '<hr>');
	$('div.questionarea').append('<div ' + questions[count].answer1 + '</div>');
	$('div.questionarea').append('<div ' + questions[count].answer2 + '</div>');
	$('div.questionarea').append('<div ' + questions[count].answer3 + '</div>');
	$('div.questionarea').append('<div ' + questions[count].answer4 + '</div><hr>');
	$('div.questionarea').append('<div id="timer"></div>');
	
}

// Function to count down timer by 1 second increments
function timer() {

	timerId = setInterval(decrement, 1000);

}

// Function to count down timer and display in html
function decrement() {

	questionTimer--;

  	// Shows timer in question
      $("#timer").html("<h2>" + questionTimer + "</h2>");

      // If runs out of time, alerts user and moves to new question
      if (questionTimer === 0) {

      	wrongAnswerCount++;

      	$('div.questionarea').html("Time's Up!");

      	displayAnswer();

		clearInterval(timerId);

		setTimeout(newQuestion, 3000);

	}

}

// Function to show a new question and reset timer, also adds to count
function newQuestion() {

		questionTimer = 21;

		count++;

	// if statement to continue this part of function for the length of the array (matches index with length)
	if (count <= questions.length - 1) {

		displayQuestion();

		timer();

		answer();
	}

	// else statement to display stats of game after the questions run out
	else {

		$('div.questionarea').html("<p>Great job!</p>");
		$('div.questionarea').append('<p><img src="assets/images/nohface.gif" width="350" alt="nohface"></p>');
		$('div.questionarea').append("<p>You got " + correctAnswerCount + " questions correct!</p>");
		$('div.questionarea').append("<p>You got " + wrongAnswerCount + " questions incorrect!</p>");
		$('div.questionarea').append('<button type="button" class="btn btn-success restart">Play Again</button>');


		$('.restart').click(begin);
	}

		// For testing purposes
		// console.log('Count: ' + count);
		// console.log('Questions length: ' + questions.length);


}

// function to add keep track of user's correct/wrong answers
function answer() {

	$('div.correct').click(function() {

		$('div.questionarea').html("That's right!");
		displayAnswer();

		clearInterval(timerId);

		correctAnswerCount++;

		setTimeout(newQuestion, 3000);





	})

	$('div.wrong').click(function() {

		$('div.questionarea').html('<p>Sorry, wrong answer!</p>');
		displayAnswer();

		clearInterval(timerId);

		wrongAnswerCount++;

		setTimeout(newQuestion, 3000);

	})

}

// Function to display image for the correct answer (with corresponding title)
function displayAnswer() {

		$('div.questionarea').append('<p><img src="' + imageAnswer[count].url + '" height="200" alt="answerpic"></p>');
		$('div.questionarea').append('<p>The correct answer is: ' + imageAnswer[count].title + '</p>');

}


