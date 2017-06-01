//Declaring global variables
var correctAnswerCount = 0;
var wrongAnswerCount = 0;

var questionTimer = 21;

var showQuestion;


var timerId;

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

// Starts game after pressing 'Start Button' on title page
$('.start').click(startGame);


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

      	$('div.questionarea').html("Time's Up!");

      	displayAnswer();

		clearInterval(timerId);

		setTimeout(newQuestion, 3000);

	}

}

function newQuestion() {

		questionTimer = 21;

		count++;

		displayQuestion();

		timer();

		answer();


}

function answer() {

	$('div.correct').click(function() {

		$('div.questionarea').html("That's right!");
		displayAnswer();

		clearInterval(timerId);

		questionTimer = 5;

		timer();

		correctAnswerCount++;



	})

	$('div.wrong').click(function() {

		$('div.questionarea').html('<p>Sorry, wrong answer!</p>');
		displayAnswer();

		clearInterval(timerId);

		questionTimer = 5;

		timer();

		wrongAnswerCount++;

	})

}

function displayAnswer() {

		$('div.questionarea').append('<p><img src="' + imageAnswer[count].url + '" height="200" alt="answerpic"></p>');
		$('div.questionarea').append('<p>The correct answer is: ' + imageAnswer[count].title + '</p>');


}


// function timeUp()

