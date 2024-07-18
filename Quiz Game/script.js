document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const nextButton = document.getElementById('next-btn');
    const resultContainer = document.getElementById('result-container');
    const scoreElement = document.getElementById('score');
    const restartButton = document.getElementById('restart-btn');

    let currentQuestionIndex = 0;
    let score = 0;
    let questions = [];

    const fetchQuestions = async () => {
        const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
        const data = await response.json();
        questions = data.results;
        showQuestion();
    };

    const showQuestion = () => {
        resetState();
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.innerText = decodeHTML(currentQuestion.question);
        currentQuestion.incorrect_answers.forEach((answer) => {
            const button = createButton(decodeHTML(answer));
            button.addEventListener('click', () => selectAnswer(button, false));
            answersElement.appendChild(button);
        });
        const correctButton = createButton(decodeHTML(currentQuestion.correct_answer));
        correctButton.addEventListener('click', () => selectAnswer(correctButton, true));
        answersElement.appendChild(correctButton);
    };

    const resetState = () => {
        while (answersElement.firstChild) {
            answersElement.removeChild(answersElement.firstChild);
        }
    };

    const createButton = (text) => {
        const button = document.createElement('button');
        button.innerText = text;
        button.classList.add('answer-btn');
        return button;
    };

    const selectAnswer = (button, isCorrect) => {
        if (isCorrect) {
            score++;
            button.style.backgroundColor = 'green';
        } else {
            button.style.backgroundColor = 'red';
        }
        Array.from(answersElement.children).forEach(btn => {
            btn.disabled = true;
        });
        nextButton.classList.remove('hidden');
    };

    const decodeHTML = (html) => {
        const text = document.createElement('textarea');
        text.innerHTML = html;
        return text.value;
    };

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
        nextButton.classList.add('hidden');
    });

    const showResults = () => {
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreElement.innerText = `${score} out of ${questions.length}`;
    };

    restartButton.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        fetchQuestions();
    });

    fetchQuestions();
});
