// we need 3 main functions : startsGame ,showQuestions , select answer ;


const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
// // create the shuffle based on questions index
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

// // start the game
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
// // set next question
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
//  reset to origin
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
// //select answers
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
// questions is class and inside array . then we wnt to shuffle the questions .
const questions = [
  {
    question: 'What is Mardi Gras ?',
    answers: [
      { text: 'Mardi Gras was  pagan celebrations of spring and fertility.', correct: true },
        { text: 'just some drunk guys ', correct: false },
        { text: 'a pork named gras ', correct: false },
        { text: 'all answers are correct', correct: false },
    ]
  },
  {
    question: 'When is Mardi Gras?',
    answers: [
      { text: 'yesterday ', correct: false },
      { text: 'Wednesday , 4 , April ', correct: false },
      { text: 'Tuesday, 21 February', correct: true },
      { text: 'Friday , 24 ,January ', correct: false }
    ]
  },
  {
    question: ' Where was the first known carnival celebration?',
    answers: [
      { text: 'NYC, Usa', correct: false },
      { text: 'Nice, France', correct: true },
      { text: 'Dhaka , Bengladesh', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is the signature Mardi Gras dessert?',
    answers: [
      { text: 'Baba cake', correct: false },
        { text: 'Croissant', correct: false },
        { text: 'Shawarma', correct: false },
        { text: 'King cake', correct: true }
    ]
    },
    {
        question: ' Before the COVID-19 pandemic, when was the most recent cancellation of New Orleans Mardi Gras parades?',
        answers: [
          { text: '1847', correct: false },
            { text: '2001', correct: false },
            { text: '1945', correct: true },
            { text: '1993', correct: false}
        ]
      }
]
