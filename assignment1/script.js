const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: "4"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correct: "Tokyo"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const currentQuestion = questions[currentQuestionIndex];

    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const li = document.createElement('li');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = option;
        li.appendChild(input);
        li.appendChild(document.createTextNode(option));
        optionsContainer.appendChild(li);
    });
}

function saveAndNext() {
    const options = document.getElementsByName('answer');
    let selectedOption;

    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }

    if (selectedOption === questions[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');

    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultContainer.textContent = `You scored ${score} out of ${questions.length}!`;
    
}


// Load the first question when the page loads
window.onload = loadQuestion;
