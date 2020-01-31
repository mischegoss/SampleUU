



/*In the real world our Javascript would not be so messy. These are just examples */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* +++++++++++++++++ ARRAYS +++++++++++++++++++++++++++++++++++++++++++++++++ */

var questionOne = ["what is she doing?", "is she serious?", "what is going on?"]

/*This is an array of strings 

question1[0] would equal the first item in the array

*/

var questionOne = ["what is she doing?", 2, "what is going on?"]

/*Arrays are NOT type specific, you can mix integers and strings */


/*You can also call methods on arrays

Here are some:

questionOne.push()  would push a new item to the END of the array
questionOne.pop()  would remove element from END of array
questionOne.splice() Insert and remove between existing elements of an array

See: https://www.geeksforgeeks.org/javascript-basic-array-methods/

*/

/* You can also call an array of objects like this */
var questions = [

   { question: "What is she talking about GGGG?",
    answers: ["one", "two", "three"]
},
    

    { question: "What is she talking about HHHH?",
    answers: ["one", "two", "three"]
    },


    { question: "What is she talking about UUUUGG?",
    answers: ["one", "two", "three"]
   

    }
];
/* To call it you are going to first call the arrayname and its location 
(like questions[0) then the item you are looking for (here question or answers) */
var questionOne = questions[0].question
console.log(questionOne)

/*But wait! Answers is ALSO an array, so you have to go one deeper */

var questionTwo = questions[0].answers[1];

console.log(questionTwo)

/*You can also call methods on strings */

/*++++++++++++++++ STRING METHOD DETOUR +++++++++++++++++++++++++++++*/

var stringyName = "My string"

stringyName.split(" ") // breaks it up into two substrings "My" and "string"
stringyName.split("") //will divide each letter like "M", "y", etc...


/*+++++++++++++++++++++++++JQUERY++++++++++++++++++++++++++++++++++++++*/

//Here we are targeting the div that is marked by the id quiz-stuff

var quizStuff = $("#quiz-stuff")


//Here was are setting the text of that div to be a question from above
quizStuff.text(questions[2].question)

//targeting the button from the html
var buttonss = $("#my_button")
//changing the value of the button to 15
// Don't forget parseInt to change string to INT
var buttonVal = buttonss.val("15")

console.log(buttonVal)

//targeting the div with id add-stuff

var addStuff = $("#add-stuff")

//This adds html to that div dynamically

addStuff.html("<p>does this work? </p>")
// to grab html from div
var checkStuff = addStuff.html()
console.log(checkStuff)
/* note to those who were there
I have no idea why it is working now
and didn't work last nite
but if you spot the difference
let me know! */

/*+++++++++++++++++++++++++++TIMER ++++++++++++++++++++++++++++++++*/

//Targeting the timer div
var timer = $("#timer")
//Set value for counter for 2 minutes
var counter = 120;
// sets text of counter to be the counter variable
timer.text(counter);
//Here we are using set variable to count down

setInterval(function(){ counter--; timer.text(counter);}, 1000);

//In the real world, you would want to make this neater
//And don't forget to stop the counter. This one will keep going


/* We briefly talked about event click for a button */
/* Here is an example Note buttonss is declared above*/

buttonss.click(function() {
    alert( "I clicked a button" );
  });



















