const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Stephen King", correct: false },
            { text: "J.K. Rowling", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    // Add more questions as needed
];

const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const submitButton = document.getElementById('submit-button');
const resultContainer = document.getElementById('result-container');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.innerHTML = '';
    scoreDisplay.textContent = score;
    showQuestion();
    quizContainer.style.display = 'block';
    scoreContainer.style.display = 'none';
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`;
    answerButtons.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        button.onclick = () => selectAnswer(answer.correct);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(correct) {
    if (correct) {
        score++;
        scoreDisplay.textContent = score;
    }
}

function submitAnswer() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = 'none';
    scoreContainer.style.display = 'block';
    resultContainer.innerHTML = `<p>Your final score is ${score} out of ${questions.length}.</p>`;
}

function restartQuiz() {
    startQuiz();
}

startQuiz();
