// class Question {
//   text;
//   answers = [];

//   constructor(text, answers) {
//     this.text = text;
//     this.answers = answers;
//   }
// }
// class Answer {
//   prefix;
//   text;
//   isCorrect = false;

//   constructor(prefix, text, isCorrect) {
//     this.prefix = prefix;
//     this.text = text;
//     this.isCorrect = isCorrect;
//   }
// }
// const Questions = [
//   new Question("What displays on console: console.log(0) ?", [
//     new Answer("A", "0", true),
//     new Answer("B", "1", false),
//     new Answer("C", "2", false),
//     new Answer("D", "3", false),
//   ]),
//   new Question("What keyword decribes context ?", [
//     new Answer("A", "context", false),
//     new Answer("B", "scope", false),
//     new Answer("C", "this", true),
//     new Answer("D", "undefined", false),
//   ]),
//   new Question("What the global object of JavaScript file ?", [
//     new Answer("A", "global", false),
//     new Answer("B", "document", false),
//     new Answer("C", "Window", true),
//     new Answer("D", "DOM", false),
//   ]),
//   new Question("What is ... ? ", [
//     new Answer("A", "null coalescing operator", false),
//     new Answer("B", "sum operator", false),
//     new Answer("C", "boolean operator", false),
//     new Answer("D", "rest operator", true),
//   ]),
//   new Question("Where correct arrow function ? ", [
//     new Answer("A", "function(){}", false),
//     new Answer("B", "function=>{}", false),
//     new Answer("C", "() => {}", true),
//     new Answer("D", "() -> {}", false),
//   ]),
// ];


// class AnswerComponent {
//   static render(answerModel) {
//     return `<li class="answer" onclick="CheckAnswer(event)">
//           <p class="asnwer-variant">${answerModel.prefix}</p>
//           <p class="answer-text">${answerModel.text}</p>
//         </li>`;
//   }
// }


// class QuestionComponent {
//   static render(questionModel) {
//     return `<p class="question-text">${questionModel.text}</p>
//     <ul class="answers">
//     ${questionModel.answers
//       .map((answer) => AnswerComponent.render(answer))
//       .reduce((html, answer) => (html += answer), "")}
//     </ul>
//     `;
//   }
// }

// const renderApp = (currQuestionIndex) => {
//   const app = document.querySelector("#question");
//   const questionOf = document.querySelector("#questionOf");
//   questionOf.innerHTML = `${currQuestionIndex + 1} of ${Questions.length}`;
//   app.innerHTML = QuestionComponent.render(Questions[currQuestionIndex]);
// };

// let currentQuestionIndex = 0;
// renderApp(currentQuestionIndex);

// function RenderNextQuestion() {
//   nextQuestionIndex = currentQuestionIndex + 1;
//   if (nextQuestionIndex >= Questions.length) return;
//   currentQuestionIndex = nextQuestionIndex;
//   renderApp(currentQuestionIndex);
// }
// function RenderPreviousQuestion() {
//   previousQuestionIndex = currentQuestionIndex - 1;
//   if (previousQuestionIndex < 0) return;
//   currentQuestionIndex = previousQuestionIndex;
//   renderApp(currentQuestionIndex);
// }
// function CheckAnswer(event) {
//   const answerElement = event.target;
//   const currentQuestion = Questions[currentQuestionIndex];
//   const selectedVariant = answerElement.children[0];
//   let message = "";
//   if (
//     currentQuestion.answers.find(
//       (answer) =>
//         answer.prefix === selectedVariant.innerHTML && answer.isCorrect
//     )
//   ) {
//     answerElement.classList.add("correct");
//     selectedVariant.innerHTML = "✓";
//     message = "Юююуухххууу!!! Вы правильно ответили))";
//   } else {
//     answerElement.classList.add("wrong");
//     selectedVariant.innerHTML = "✗";
//     message = "Увы( Вы ответили неправильно";
//   }

//   setTimeout(() => {
//     alert(message);
//   }, 200);
// }
// document
//   .querySelector("#buttonNext")
//   .addEventListener("click", RenderNextQuestion);
// document
//   .querySelector("#buttonPrevious")
//   .addEventListener("click", RenderPreviousQuestion);






// let Cars = ["характеристики", "toyota", "1,6", "100000"];

// alert( Cars[0] ); // марка
// alert( Cars[1] ); // обЪем
// alert( Cars[2] ); // пробег
  
  
var User = { login:"user@Gmail.com" , password :"*****"}
console.log(typeof User);