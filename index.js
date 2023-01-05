//read input from user
var readlineSync = require('readline-sync');
console.log("--------------------------------------");
console.log("Let's see. How well do you know me?");
console.log("--------------------------------------");

var userName = readlineSync.question("\nWhat is your name ? ");
console.log("\nWelcome " + userName + " \nLet's get started!!")
//count score 
var countScore = 0

//check if user answer is valid or not
function checkAnswer(question, optionA, optionB, optionC, optionD, answer) {
  console.log("\nselect ONE OPTION from A,B,C,D");
  console.log(question + "\nA: " + optionA + "\nB: " + optionB + "\nC: " + optionC + "\nD: " + optionD);


  var userAnswer = readlineSync.question("Your answer: ");
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("\nKudos to you!! ");
    countScore++;
    console.log("Current score: " + countScore);
  }
  else
    console.log("\nBetter luck next time..");

  console.log("------------------------------------");

}


//store question and answer in array
var questionList = [
  {
    question: "\nwhat is my nick name? ",
    optionA: "Shreya",
    optionB: "Radha",
    optionC: "Pacha",
    optionD: "Ishu",
    answer: "B"
  },
  {
    question: "\nwhere do I live? ",
    optionA: "Nashik",
    optionB: "Pune",
    optionC: "Aurangabad",
    optionD: "Nagpur",
    answer: "D"
  },
  {
    question: "\nwho is my favourite actor?",
    optionA: "Manoj Bajpayee",
    optionB: "Pankaj Tripathi",
    optionC: "Raj Kumar Rao",
    optionD: "Salman Khan",
    answer: "A"
  },
  {
    question: "\nwhere do I work? ",
    optionA: "Infosys",
    optionB: "Infocepts",
    optionC: "Capgemini",
    optionD: "Codidas",
    answer: "A"
  },

  {
    question: "\nwhat is favorite dish?",
    optionA: "Gulab Jamun",
    optionB: "Rasgulla",
    optionC: "Puranpoli",
    optionD: "Basundi",
    answer: "C"
  }
];
//track of high score
var highScore = [{
  Name: "Shweta",
  score: 5
}, {
  Name: "Ishwari",
  score: 3
}]

//call function using each object of array
for (var i = 0; i < questionList.length; i++) {
  checkAnswer(questionList[i].question, questionList[i].optionA, questionList[i].optionB, questionList[i].optionC, questionList[i].optionD, questionList[i].answer);
}

//total score

console.log("\nHey..You SCORED  " + countScore);
console.log("---------------------");
//Name of high scorers
console.log("\nName of High scorer:\n ")
for (var i = 0; i < highScore.length; i++) {
  console.log("Name: " + highScore[i].Name + "\nscore: " + highScore[i].score);
}
console.log("---------------------");
console.log("Remember to send me screenshot if you beat the score..\n I will update your name in high scorer list...")