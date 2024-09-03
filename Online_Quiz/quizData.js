const quizData = [
{
question: "Which language runs in a web browser?",
a: "Java",
b: "C",
c: "Python",
d: "JavaScript",
correct: "d",
},
{
question: "What does CSS stand for?",
a: "Central Style Sheets",
b: "Cascading Style Sheets",
c: "Cascading Simple Sheets",
d: "Cars SUVs Sailboats",
correct: "b",
},
{
question: "What does HTML stand for?",
a: "Hypertext Markup Language",
b: "Hypertext Markdown Language",
c: "Hyperloop Machine Language",
d: "Helicopters Terminals Motorboats Lamborginis",
correct: "a",
},
{
question: "What year was JavaScript launched?",
a: "1996",
b: "1995",
c: "1994",
d: "none of the above",
correct: "b",
},
{
question: "Attributes of <frameset> are?",
a: "cols,rows",
b: "Colspan,rowspan",
c: "frameborder",
d: "name",
correct: "a",
},
{
question: " \d Metacharacter is used for...",
a: "a non digit",
b: "a word character",
c: "a digit(0-9)",
d: "Find a tab character",
correct: "c",
},
{
question: "Which is the property of History?",
a: "assign",
b: "length",
c: "back",
d: "protocol",
correct: "b",
},
{
question: "Which are the Form element attributes?",
a: "Target",
b: "Button",
c: "Label",
d: "CheckBox",
correct: "a",
},
{
question: "Which are the array methods?",
a: "Substr()",
b: "parseInt()",
c: "push()",
d: "toString()",
correct: "c",
},
{
question: "What are the features of JavaScript?",
a: "Case Sensitive",
b: "Light Weight",
c: "Scripting Language ",
d: "All of the above",
correct: "d",
},
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
let answer;
answerElements.forEach((answerElement) => {
if (answerElement.checked) answer = answerElement.id;
});
return answer;
};
const loadQuiz = () => {
deselectAnswers();
const currentQuizData = quizData[currentQuiz];
questionElement.innerText = currentQuizData.question;
a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
const answer = getSelected();
if (answer) {
if (answer === quizData[currentQuiz].correct) score++;
currentQuiz++;
if (currentQuiz < quizData.length) loadQuiz();
else {
quiz.innerHTML = `
<h2>You answered ${score}/${quizData.length} questions correctly</h2>
<button onclick="history.go(0)">Play Again</button>
` // location.reload() won't work in CodePen for security reasons;
}
}
});