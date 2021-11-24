//Question 1
let q1ChoiceTrue = document.querySelector("#q1ChoiceTrue");
let q1ChoiceFalse = document.querySelector("#q1ChoiceFalse");
//Question 2
let q2Choice1 = document.querySelector("#q2Choice1");
let q2Choice2 = document.querySelector("#q2Choice2");
let q2Choice3 = document.querySelector("#q2Choice3");
//Question 3
let q3ChoiceTrue = document.querySelector("#q3ChoiceTrue");
let q3ChoiceFalse = document.querySelector("#q3ChoiceFalse");
//Question 4
let q4Choice1 = document.querySelector("#q4Choice1");
let q4Choice2 = document.querySelector("#q4Choice2");
let q4Choice3 = document.querySelector("#q4Choice3");
//Question 5
let q5Choice1 = document.querySelector("#q5Choice1");
let q5Choice2 = document.querySelector("#q5Choice2");
let q5Choice3 = document.querySelector("#q5Choice3");
//Question 6
let q6ChoiceTrue = document.querySelector("#q6ChoiceTrue");
let q6ChoiceFalse = document.querySelector("#q6ChoiceFalse");
//Question 7
let q7Choice1 = document.querySelector("#q7Choice1");
let q7Choice2 = document.querySelector("#q7Choice2");
let q7Choice3 = document.querySelector("#q7Choice3");
let q7Choice4 = document.querySelector("#q7Choice4");

let resultBtn = document.querySelector("#resultBtn");

let score = 0;
let questionsAnswered = true;

//Check true or false questions
let checkAnswer = (choice1, choice2) => {
  if (choice1.checked) {
    console.log("Correct choice!");
    score++;
  } else if (choice2.checked) {
    console.log("WROOOONG");
  } else {
    console.log("Please choose an answer!");
    questionsAnswered = false;
  }
};

//Check questions with 3 choices
let check3Answers = (choice1, choice2, choice3) => {
  if(choice1.checked) {
    console.log("Correct answer!");
    score++;
  } else if(choice2.checked || choice3.checked) {
    console.log("WRONG ANSWER");
  } else {
    console.log("Please choose an answer!")
    questionsAnswered = false;
  }
}

//Check question with multiple answers
let checkMultipleAnswers = (choice1, choice2, choice3, choice4) => {

};

resultBtn.addEventListener("click", () => {
  score = 0;
  questionsAnswered = true;

  //First argument is the correct choice
  //Question 1 - true or false
  checkAnswer(q1ChoiceTrue, q1ChoiceFalse);

  //Question 2 - Three choices
  check3Answers(q2Choice2, q2Choice1, q2Choice3);

  //Question 3 - true or false
  checkAnswer(q3ChoiceFalse, q3ChoiceTrue);

  //Question 4 - Three choices
  check3Answers(q4Choice3, q4Choice1, q4Choice2);

  //Question 5 - Three choices
  check3Answers(q5Choice1, q5Choice2, q5Choice3);

  //Question 6 - true or false
  checkAnswer(q6ChoiceTrue, q6ChoiceFalse);

  //Question 7 - multiple answers
  checkMultipleAnswers();

  if(questionsAnswered === false){
      console.log("Please answer all the questions!");
  }

  console.log(score);
});
