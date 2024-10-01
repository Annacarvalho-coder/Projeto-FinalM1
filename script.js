const startGameButton = document.querySelector(".start-quiz");
const questionsContainer = document.querySelector(".questions-container");
const title = document.querySelector(".title");
const answersContainer = document.querySelector(".answers-container");
const questionText = document.querySelector(".question");
const nextQuestionButton = document.querySelector(".next-question");

//Evento de Click para começar o Quiz e próxima pergunta
startGameButton.addEventListener("click", startGame);
nextQuestionButton.addEventListener("click", displayNextQuestion);
//Pergunta atual e percentual de acertos
let currentQuestionIndex = 0
let totalCorrect = 0
//let nome = prompt("Qual seu nome? ")
let nome;

while (!nome) {
    nome = prompt("Qual seu nome? (não pode estar vazio)");
    if (!nome) {
        alert("Por favor, digite um nome válido.");
    }
}

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

  if(questions.length == currentQuestionIndex) {
    return finishGame();
  }

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
//100% ou nada!
function selectAnswer(event){
  const answerClicked = event.target;
//acertou vai a próxima fase
  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct");
    totalCorrect++
  } else {
    //errou volta do iníco, retira o botão de próxima
    document.body.classList.add("incorrect");
    finishGame(); 
    button.disabled = true;
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

//Ao final das fases e/ou ao errar
function finishGame() {
  const totalQuestion = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestion)

  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente! :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  questionsContainer.innerHTML =
  `
  <p class="final-message">
    Você passou ${totalCorrect} de ${totalQuestion} fases, ${nome}!
    <span>Resultado: ${message}</span>
</p>
  <button onclick=window.location.reload() class="button">
    Refazer quiz
  </button>
  `
}


//FASES (5)
const questions = [
  {
    question: "FASE 1: Qual das seguintes tags HTML é usada para criar um link?",
    answers: [
      { text: "<div>", correct: false },
      { text: "<img>", correct: false },
      { text: "<a>", correct: true },
      { text: "<p>", correct: false },
    ],
  },

  {
    question:
      "FASE 2: Qual foi o primeiro navegador web a suportar a linguagem JavaScript?",
    answers: [
      { text: "Internet Explorer", correct: false },
      { text: "Mozilla Firefox", correct: false },
      { text: "Google Chrome", correct: false },
      { text: "Netscape Navigator", correct: true },
    ],
  },
  {
    question:
      "FASE 3:Em que ano foi lançado o primeiro site?",
    answers: [
      { text: "1990", correct: false },
      { text: "1991", correct: true },
      { text: "1970", correct: false },
      { text: "1995", correct: false },
    ],
  },
  {
    question:
      "FASE 4: Qual foi a inspiração para a utilização do termo 'bug' para descrever erros em programas de computador?",
    answers: [
      { text: "Um problema em um circuito lógico", correct: false },
      { text: "Uma referência à Segunda Guerra Mundial", correct: false },
      { text: "Um inseto encontrado em um dos primeiros computadores", correct: true },
      { text: "Uma homenagem a um pioneiro da computação", correct: false },
    ],
  },
  {
    question:
      "FASE 5: Qual protocolo é utilizado para transferir páginas web?",
    answers: [
      { text: "HTTP", correct: true },
      { text: "TCP", correct: false },
      { text: "FTP", correct: false },
      { text: "SMTP", correct: false },
    ],
  },
  {
    question:
      "FASE 6: Diferença entre hoisting de var, let e const?",
    answers: [
      { text: "var tem um comportamento mais permissivo, enquanto let e const tem regras rígidas para evitar erros comuns.", correct: true },
      { text: "O hoisting só ocorre com a palavra-chave var, sendo inexistente em let e const.", correct: false },
      { text: "O hoisting garante que todas as variáveis sejam inicializadas com o valor undefined.", correct: false },
      { text: "Nenhuma, apresenta a mesma função!", correct: false },
    ],
  },
  {
    question:
      "FASE 7: O que é a propriedade flex-flow?",
    answers: [
      { text: "Flex-flow é uma propriedade que combina as propriedades flex-direction e flex-wrap em um contêiner flexível. ", correct: true },
      { text: "Flex-flow é uma propriedade que define a cor de fundo de um contêiner flexível.", correct: false },
      { text: "Flex-flow controla a opacidade dos elementos dentro de um contêiner flexível.", correct: false },
      { text: "Flex-flow é responsável por aplicar animações a elementos em um layout flexível.", correct: false },
    ],
  }



];
