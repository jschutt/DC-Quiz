//Question 1
let questionOne = document.querySelectorAll("input[name='questionOne']");
let q1ChoiceTrue = document.querySelector("#q1ChoiceTrue");
let q1ChoiceFalse = document.querySelector("#q1ChoiceFalse");
//Question 3
let questionThree = document.querySelectorAll("input[name='questionThree']");
let q3ChoiceTrue = document.querySelector("#q3ChoiceTrue");
let q3ChoiceFalse = document.querySelector("#q3ChoiceFalse");
//Question 6
let questionSix = document.querySelectorAll("input[name='questionSix']");
let q6ChoiceTrue = document.querySelector("#q6ChoiceTrue");
let q6ChoiceFalse = document.querySelector("#q6ChoiceFalse");

let resultBtn = document.querySelector("#resultBtn");

let score = 0;

resultBtn.addEventListener("click", () => {
  score = 0;
  //Question 1 - true or false
  if (q1ChoiceTrue.checked) {
    console.log("Correct choice!");
    score++;
  } else if (q1ChoiceFalse.checked) {
    console.log("WROOOONG");
  } else {
    console.log("Please choose an answer for question 1!");
  }

  //Question 3 - true or false
  if (q3ChoiceTrue.checked) {
    console.log("WROOONG");
  } else if (q3ChoiceFalse.checked) {
    console.log("Correct choice!");
    score++;
  } else {
    console.log("Please choose an answer for question 3!");
  }

  //Question 6 - true or false
  if (q6ChoiceTrue.checked) {
    console.log("Correct choice!");
    score++;
  } else if (q6ChoiceFalse.checked) {
    console.log("WROOONG");
  } else {
    console.log("Please choose an answer for question 3!");
  }
  console.log(score);
});
