// assign elements 
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const questionImage = document.getElementById("questionImage");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const scoreDiv = document.getElementById("resultsContainer");

// questions array
let questions = [
    {
        question: "What is the name of this popular tropical fruit?",
        imgSrc: "images/tropicalfruit.jpg",
        choiceA: "Durian",
        choiceB: "Jackfruit",
        choiceC: "Rambutan",
        correct: "A"
    }, {
        question: "What is the name of the tallest tower in the world?",
        imgSrc: "images/tallesttower.jpg",
        choiceA: "Marina Tower",
        choiceB: "Burj Khalifa",
        choiceC: "Petronas Tower",
        correct: "B"
    }, {
        question: "Where was the movie <b>The Hobbit </b> filmed in?",
        imgSrc: "images/hobbit.jpg",
        choiceA: "New Zealand",
        choiceB: "Ireland",
        choiceC: "Greenland",
        correct: "A"
    }, {
        question: "Where is the Mount. Everest located?",
        imgSrc: "images/everest.jpg",
        choiceA: "Nepal",
        choiceB: "Bhutan",
        choiceC: "China",
        correct: "A"
    }, {
        question: "What is the capital city of Brazil?",
        imgSrc: "images/brazil.png",
        choiceA: "Brasilia",
        choiceB: "Rio di Janeiro",
        choiceC: "Sao Paulo",
        correct: "A"
    }, {
        question: "What is the national language of Malaysia?",
        imgSrc: "images/malaysia.jpg",
        choiceA: "Malayalam",
        choiceB: "Mali",
        choiceC: "Malay",
        correct: "C"
    }

];

// define variables
const finalIndex = questions.length - 1;
let currentIndex = 0;
let score = 0;
var indexArray=[];
var N=5; //number of question to be asked per quiz
var count=0;

//generate random index

for (let i=0; i<questions.length; i++){
    indexArray.push(i);
} //[0,1,2,3...]

var indexArray=fisherYatesShuffle(indexArray); //returns shuffled index Array

console.log(indexArray);

function fisherYatesShuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }

  
function generateQuestion(currentIndex) {

    let q = questions[currentIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    questionImage.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    generateQuestion(indexArray[count]);
    quiz.style.display = "block";

}

if (count < N-1) {
    generateQuestion(indexArray[count]);
    count++;
    function checkAnswer(answer) {
        if (answer == questions[count].correct) {
            // If the answer is correct
            score++;
        } else {
            score = score;
        }
    console.log("current score",score)
        if (count < N-1) {
            count++;
            generateQuestion(indexArray[count]);
        } else {
            showResult();
        }
    }
} else {
    // end the quiz and show the score
    showResult();
}

// checking answers

// score display
function showResult() {
    start.style.display = "none";
    quiz.style.display = "none";
    scoreDiv.style.display = "block";

    // calculating percentage score and displaying results
    const scorePerCent = Math.round(100 * score /(N-1));
    scoreDiv.innerHTML = "You have answered " + score + " out of " + N-1 + " questions correctly." + "<br/><br/>" + "Your score: " + scorePerCent + "%";
}