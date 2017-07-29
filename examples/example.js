$(document).ready(function () { 
// ----------------------------TRIVIA GAME----------------------------

var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var timeRemaining = 16;
var intervalID;
var indexQandA = 0; //index to load a different question each round without the game reset or screen refresh
var answered = false; //variable to stop the timer if user has clicked an answer
var correct;
var triviaGame = [{
  question: "Making Bacon, and I put it in a Pancake. What's it gonna make ?",
  answer: ["A Goldendoole", "An Artichoke", "Bacon Waffles", "Bacon Pancakes"],
  correct: "3",
  image: ("assets/images/baconPancakes.jpg")
}, {
  question: "Babies are most like which of the following?",
  answer: ["Dan Marino", "Drunk Adults", "Ace Ventura", "Dinosaurs"],
  correct: "1",
  image: ("assets//images/baby.jpg")
}, {
  question: "What does the Hubble Space Telescope do?",
  answer: ["Take Pix of the Cosmos for Memes", "Grow Basil", "Think Deep Thoughts", "Sing Songs"],
  correct: "0",
  image: ("assets//images/hubble.jpg")
}, {
  question: "What is the Answer to Life the Universe and Everything?",
  answer: ["Memes", "To Live a Good Life", "42", "Cloud Eggs"],
  correct: "2",
  image: ("assets//images/deepThoughts.png")
}, {
  question: "When Hippos are upset, their sweat turns: ",
  answer: ["Red", "Black", "Green", "Clear"],
  correct: "0",
  image: ("assets/images/hippo.jpg")
}, {
  question: "Banging your Head Against a wall burns how many calories an hour?",
  answer: ["10", "150", "25", "425"],
  correct: "1",
  image: ("assets//images/bang-head-on-wall.jpg")
}, {
  question: "What is Lionel Richie's MOST Greatest Song?",
  answer: ["All Night Long", "Deep Into the Night", "Carrabba Fiesta Forever", "Prince, formerly known as The Artist, formerly known as Prince"],
  correct: "0",
  image: ("assets//images/Lionel_Richie.jpg")
}, {
  question: "What is your quest?",
  answer: ["You seek the Holy Grail", "Blue, No...", "The airspeed of an unladen swallow", "I don't know that!"],
  correct: "2",
  image: ("assets//images/quest.jpeg")
}];

// ------------- FUNCTION DECLARATIONS ----------------------------


function startGame() {
  console.log("game has begun");
  $('.start-button').remove();
  correctAnswers = 0;
  incorrectAnswers = 0;
  unansweredQuestions = 0;
  loadQandA();
}

function loadQandA() {
  // console.log(correctAnswers);
  // console.log(incorrectAnswers);
  // console.log(unansweredQuestions);
  // console.log(indexQandA);
  answered = false; // will allow timeRemaining to be pushed back to <h5> after round reset....else statement in function timer()
  timeRemaining = 16;
  intervalID = setInterval(timer, 1000);
  if (answered === false) {
    timer();
  }
  correct = triviaGame[indexQandA].correct;
  var question = triviaGame[indexQandA].question;
  $('.question').html(question);
  for (var i = 0; i < 4; i++) {
    var answer = triviaGame[indexQandA].answer[i];
    $('.answers').append('<h4 class= answersAll id=' + i + '>' + answer + '</h4>');
  }

  $("h4").click(function() {
    var id = $(this).attr('id');
    // alert(id);
    if (id === correct) {
      answered = true; // stops the timer
      // alert("correct answer");
      $('.question').text("THE ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
      correctAnswer();
    } else {
      answered = true; //stops the timer
      // alert("incorrect answer");
      $('.question').text("YOU CHOSE: " + triviaGame[indexQandA].answer[id] + ".....HOWEVER THE ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
      incorrectAnswer();
    }
  });
}

function timer() {
  if (timeRemaining === 0) {
    answered = true;
    clearInterval(intervalID);
    $('.question').text("THE CORRECT ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
    unAnswered();
  } else if (answered === true) {
    clearInterval(intervalID);
  } else {
    timeRemaining--;
    $('.timeRemaining').text('YOU HAVE ' + timeRemaining + ' SECONDS TO CHOOSE').removeClass('animated pulse infinite');
  }
}

function correctAnswer() {
  correctAnswers++;
  $('.timeRemaining').text("YOU HAVE ANSWERED CORRECTLY!").css({
    'color': '#3D414F'
  }).addClass('animated pulse infinite');
  resetRound();
}

function incorrectAnswer() {
  incorrectAnswers++;
  $('.timeRemaining').text("YOU HAVE ANSWERED INCORRECTLY!").css({
    'color': '#3D414F'
  }).addClass('animated pulse infinite');
  resetRound();

}

function unAnswered() {
  unansweredQuestions++;
  $('.timeRemaining').text("YOU FAILED TO CHOOSE AN ANSWER").css({
    'color': '#3D414F'
  }).addClass('animated pulse infinite');
  resetRound();
}

function resetRound() {
  $('.answersAll').remove();
  $('.answers').append('<img class=answerImage width="150" height="150" src="' + triviaGame[indexQandA].image + ' ">'); // adds answer image
  indexQandA++; // increments index which will load next question when loadQandA() is called again
  if (indexQandA < triviaGame.length) {
    setTimeout(function() {
      loadQandA();
      $('.answerImage').remove();
    }, 5000); // removes answer image from previous round
  } else {
    setTimeout(function() {
      $('.question').remove();
      $('.timeRemaining').remove();
      $('.answerImage').remove();
      $('.answers').append('<h4 class= answersAll end>CORRECT ANSWERS: ' + correctAnswers + '</h4>');
      $('.answers').append('<h4 class= answersAll end>INCORRECT ANSWERS: ' + incorrectAnswers + '</h4>');
      $('.answers').append('<h4 class= answersAll end>UNANSWERED QUESTIONS: ' + unansweredQuestions + '</h4>');
      setTimeout(function() {
        location.reload();
      }, 7000);
    }, 5000);
  }
};








$('.startButton').on("click", function() {
  $('.startButton').removeClass('infinite').addClass('animated fadeOutDown'); //manages the Animate.css applied to Start Button
  startGame();

});

});








// // -----------------------------Background Gradient JS---------------------

// var colors = new Array(
//   [77, 99, 77], [178, 158, 135], [138, 146, 178], [178, 77, 77], [204, 194, 160], [178, 172, 149], [204, 174, 160]);

// var step = 0;
// //color table indices for: 
// // current color left
// // next color left
// // current color right
// // next color right
// var colorIndices = [0, 1, 2, 3];

// //transition speed
// var gradientSpeed = 0.002;

// function updateGradient() {

//   if ($ === undefined) return;

//   var c0_0 = colors[colorIndices[0]];
//   var c0_1 = colors[colorIndices[1]];
//   var c1_0 = colors[colorIndices[2]];
//   var c1_1 = colors[colorIndices[3]];

//   var istep = 1 - step;
//   var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
//   var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
//   var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
//   var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

//   var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
//   var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
//   var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
//   var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

//   $('#gradient').css({
//     background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
//   }).css({
//     background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
//   });



//   step += gradientSpeed;
//   if (step >= 1) {
//     step %= 1;
//     colorIndices[0] = colorIndices[1];
//     colorIndices[2] = colorIndices[3];

//     //pick two new target color indices
//     //do not pick the same as the current one
//     colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
//     colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

//   }
// }

// setInterval(updateGradient, 10);
