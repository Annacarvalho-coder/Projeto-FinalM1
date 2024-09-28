const startGameButton = document.querySelector(".start-quiz");
const questionsContainer = document.querySelector(".questions-container");
const title = document.querySelector(".title");
const answersContainer = document.querySelector(".answers-container");
const questionText = document.querySelector(".question");
const nextQuestionButton = document.querySelector(".next-question");

//Evento de Click para começar o Quiz e próxima pergunta
startGameButton.addEventListener("click", startGame);
nextQuestionButton.addEventListener("click", displayNextQuestion);
//Pergunta atual
let currentQuestionIndex = 0

//Começar o Quiz
function startGame() {
  //não está sendo usado
  startGameButton.classList.add("hide");
  title.classList.add("hide");
  questionsContainer.classList.remove("hide");
  displayNextQuestion();
}

//Remover elementos filhos do answer-container
function displayNextQuestion(){
  resetState();
    //Mostrar pergutas e respostas
    questionText.textContent = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button");
        newAnswer.classList.add("answer", "button");
        newAnswer.textContent = answer.text;
        
        //Verificar se a resposta é a correta
        if(answer.correct) {
            newAnswer.dataset.correct = answer.correct;
        }

        //Adicionar botões das respostas
        answersContainer.appendChild(newAnswer);

        newAnswer.addEventListener("click", selectAnswer);

    });
}

function resetState() {
  while(answersContainer.firstChild) {
    answersContainer.removeChild( answersContainer.firstChild);
}

document.body.removeAttribute("class");
nextQuestionButton.classList.add("hide");

}

function selectAnswer(event){
  const answerClicked = event.target;

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct");
  } else {
    document.body.classList.add("incorrect");
  }

document.querySelectorAll(".answer").forEach(button => {
  if (button.dataset.correct) {
    button.classList.add("correct");
  } else {
    button.classList.add("incorrect");
  }

  button.disabled = true;
})

nextQuestionButton.classList.remove("hide");
currentQuestionIndex++

}



const questions = [
  {
    question: "Qual das seguintes tags HTML é usada para criar um link?",
    answers: [
      { text: "<div>", correct: false },
      { text: "<img>", correct: false },
      { text: "<a>", correct: true },
      { text: "<p>", correct: false },
    ],
  },

  {
    question:
      "Qual foi o primeiro navegador web a suportar a linguagem JavaScript?",
    answers: [
      { text: "Internet Explorer", correct: false },
      { text: "Mozilla Firefox", correct: false },
      { text: "Google Chrome", correct: false },
      { text: "Netscape Navigator", correct: true },
    ],
  },
];
