const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const operator = document.getElementById('operator');
const answerInput = document.getElementById('answer');
const feedback = document.getElementById('feedback');
const submitButton = document.getElementById('submit');
const newProblemButton = document.getElementById('new-problem');

// Generate a random math problem
function generateProblem() {
    const num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1-10
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*'];
    const selectedOperator = operators[Math.floor(Math.random() * operators.length)];

    number1.textContent = num1;
    number2.textContent = num2;
    operator.textContent = selectedOperator;

    return { num1, num2, selectedOperator };
}

// Check the answer
function checkAnswer(problem) {
    const userAnswer = parseInt(answerInput.value);
    let correctAnswer;

    switch (problem.selectedOperator) {
        case '+':
            correctAnswer = problem.num1 + problem.num2;
            break;
        case '-':
            correctAnswer = problem.num1 - problem.num2;
            break;
        case '*':
            correctAnswer = problem.num1 * problem.num2;
            break;
    }

    if (userAnswer === correctAnswer) {
        feedback.textContent = '🎉 Correct! Great job!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = `❌ Incorrect. The correct answer is ${correctAnswer}.`;
        feedback.style.color = 'red';
    }
}

// Main game logic
let currentProblem = generateProblem();

submitButton.addEventListener('click', () => {
    checkAnswer(currentProblem);
});

newProblemButton.addEventListener('click', () => {
    currentProblem = generateProblem();
    answerInput.value = '';
    feedback.textContent = '';
});
