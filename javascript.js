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
        question: "which country is famous for Maple syrup?",
        imgSrc: "images/maplesyrup.jpg",
        choiceA: "Italy",
        choiceB: "Canada",
        choiceC: "Australia",
        correct: "B"
    }, {
        question: "What is the name of the country highlighted in red",
        imgSrc: "images/worldmap.png",
        choiceA: "India",
        choiceB: "Sri Lanka",
        choiceC: "Bhutan",
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

// generate a question
function generateQuestion() {
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
    generateQuestion();
    quiz.style.display = "block";
}

answerIsWrong();
if (currentIndex < finalIndex) {
    currentIndex++;
    generateQuestion();
} else {
    // end the quiz and show the score
    showResult();
}

// checking answers
function checkAnswer(answer) {
    if (answer == questions[currentIndex].correct) {
        // If the answer is correct
        score++;
    } else {
        score = score;
    }
    if (currentIndex < finalIndex) {
        currentIndex++;
        generateQuestion();
    } else {
        showResult();
    }
}
// score display
function showResult() {
    start.style.display = "none";
    quiz.style.display = "none";
    scoreDiv.style.display = "block";

    // calculating percentage score and displaying results
    const scorePerCent = Math.round(100 * score / questions.length);
    scoreDiv.innerHTML = "You have answered " + score + " out of " + questions.length + " questions correctly." + "<br/><br/>" + "Your score: " + scorePerCent + "%";
}