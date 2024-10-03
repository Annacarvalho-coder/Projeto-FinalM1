
## QUIZ NERD

# Quiz Nerd do SQUAD 9

Este é um quiz interativo desenvolvido com o objetivo é testar seus conhecimentos sobre HTML, JavaScript e a história da web.

## Tecnologias Utilizadas
<div style="display: flex; justify-content: space-around;">

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" width="100" />
<img src="https://stgsys.net/wp-content/uploads/2012/03/html-5.png" alt="HTML" width="100" />
<img src="https://cdn.pixabay.com/photo/2016/11/19/23/00/css3-1841590_640.png" alt="CSS" width="100" />
</div>


## Funcionalidades 🛠 

- **Início do Jogo**: O jogo começa quando o usuário clica no botão “Start Quiz”.
- **Perguntas e Respostas**: O quiz apresenta uma série de perguntas com múltiplas escolhas.
- **Feedback Imediato**: O usuário recebe feedback imediato sobre a resposta correta ou incorreta.
- **Resultado Final**: Ao final do quiz, o usuário recebe uma mensagem de desempenho e a opção de refazer o quiz.

## Estrutura do Código

### Seleção de Elementos

```javascript
const startGameButton = document.querySelector(".start-quiz");
const questionsContainer = document.querySelector(".questions-container");
const title = document.querySelector(".title");
const answersContainer = document.querySelector(".answers-container");
const questionText = document.querySelector(".question");
const nextQuestionButton = document.querySelector(".next-question");
```

### Seleção de Eventos

Início do Jogo: 
```
startGameButton.addEventListener("click", startGame);
```
Próxima Pergunta: 
```
nextQuestionButton.addEventListener("click", displayNextQuestion);
```
### Lógica do Jogo
Variáveis de Estado
```
let currentQuestionIndex = 0;
let totalCorrect = 0;
let nome;
```
### Prompt para Nome
```
while (!nome) {
    nome = prompt("Qual seu nome? (não pode estar vazio)");
    if (!nome) {
        alert("Por favor, digite um nome válido.");
    }
}
```

### Função de Início do Jogo
```
function startGame() {
  startGameButton.classList.add("hide");
  title.classList.add("hide");
  questionsContainer.classList.remove("hide");
  displayNextQuestion();
}
```
### Exibição da Próxima Pergunta
```
function displayNextQuestion() {
  resetState();

  if (questions.length == currentQuestionIndex) {
    return finishGame();
  }

  questionText.textContent = questions[currentQuestionIndex].question;
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAnswer = document.createElement("button");
    newAnswer.classList.add("answer", "button");
    newAnswer.textContent = answer.text;

    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct;
    }

    answersContainer.appendChild(newAnswer);
    newAnswer.addEventListener("click", selectAnswer);
  });
}
```
### Perguntas
```
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
  ...2,3,4,5,6 e 7...
}
]
```
### Seleção de Resposta
```
function selectAnswer(event) {
  const answerClicked = event.target;

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct");
    totalCorrect++;
  } else {
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
  });

  nextQuestionButton.classList.remove("hide");
  currentQuestionIndex++;
}
```
### Resetar Estado
```
function resetState() {
  while (answersContainer.firstChild) {
    answersContainer.removeChild(answersContainer.firstChild);
  }

  document.body.removeAttribute("class");
  nextQuestionButton.classList.add("hide");
}
```
### Finalização do Jogo
```
function finishGame() {
  const totalQuestion = questions.length;
  const performance = Math.floor(totalCorrect * 100 / totalQuestion);

  let message = "";

  switch (true) {
    case (performance >= 90):
      message = "Excelente!";
      break;
    case (performance >= 70):
      message = "Muito bom!";
      break;
    case (performance >= 50):
      message = "Bom!";
      break;
    default:
      message = "Pode melhorar!";
  }

  questionsContainer.innerHTML = `
    <p class="final-message">
      Você passou ${totalCorrect} de ${totalQuestion} fases, ${nome}!
      <span>Resultado: ${message}</span>
      <p id="smile">🚀 🙂</p>
    </p>
    <button onclick="window.location.reload()" class="button">
      Refazer quiz
    </button>
  `;
}
```
## Html

```
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Nerd!</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="container">
        <h1 class="title">Bem vindo ao Quiz Nerd do SQUAD 9!</h1>
        <div class="questions-container hide">
            <span class="question">Pergunta aqui</span>
            <div class="answers-container">
                <button class="answer button">Resposta 1</button>
                <button class="answer button">Resposta 2</button>
                <button class="answer button">Resposta 3</button>
                <button class="answer button">Resposta 4</button>
            </div>
        </div>
        <div class="controls-container">
            <button class="start-quiz button">Começar Quiz!</button>
            <button class="next-question button hide">Proxima Pergunta</button>    
        </div>
    </div>
    <script src="./script.js"></script>
</body>
</html>
```
## Como Executar

Clone o repositório.
```
git clone https://github.com/Annacarvalho-coder/Projeto-FinalM1.git
```
Abra o arquivo index.html em um navegador web.

Ou acesse por aqui a página: 
```
https://annacarvalho-coder.github.io/Projeto-FinalM1/
```
Clique no botão “Start Quiz” para iniciar o quiz.

## Licença

[MIT](https://choosealicense.com/licenses/mit/)


Responda às perguntas e veja seu desempenho ao final.
