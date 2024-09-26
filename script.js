const starGameButton = document.querySelector(".start-quiz button")
const questionsContainer = document.querySelector("question-container")
const answersContainer = document.querySelector("answers-container")
const questionText = document.querySelector(".question")

starGameButton.addEventListener("click", starGame)

let currentQuestionIndex = 0




function starGame(){
    starGameButton.classList.add("hide")
    questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion(){
    while(answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }
}

    questionText.textContent = question[currentQuestionIndex].question

const question = [
{
    question: "Qual das seguintes tags HTML é usada para criar um link?",
    answers: [
        { text: "<div>", correct: false},
        { text: "<img>", correct: false},
        { text: "<a>", correct: true},
        { text: "<p>", correct: false}
    ]
},

{   question: "Qual foi o primeiro navegador web a suportar a linguagem JavaScript?",
    { text: "Internet Explorer", correct: false},
    { text: "Mozilla Firefox", correct: false},
    { text: "Google Chrome", correct: false},
    { text: "Netscape Navigator", correct: true}
}

]