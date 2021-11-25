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
let resultContainer = document.querySelector("#resultContainer");

//Variables for dark/light mode
let modeBtn = document.querySelector("#modeBtn");
let allH1 = document.querySelectorAll("h1");
let allH2 = document.querySelectorAll("h2");
let allH3 = document.querySelectorAll("h3");
let allLabels = document.querySelectorAll("label");
let darkMode = false;

let score = 0;
let questionsAnswered = true;

//Check true or false questions
let checkAnswer = (choice1, choice2) => {
  if (choice1.checked) {
    console.log("Correct!");
    score++;
  } else if (choice2.checked) {
    console.log("Wrong!");
  } else {
    console.log("Please choose an answer!");
    questionsAnswered = false;
  }
};

//Check questions with 3 choices
let check3Answers = (choice1, choice2, choice3) => {
  if(choice1.checked) {
    console.log("Correct!");
    score++;
  } else if(choice2.checked || choice3.checked) {
    console.log("Wrong!");
  } else {
    console.log("Please choose an answer!")
    questionsAnswered = false;
  }
}

//Check question with multiple answers
let checkMultipleAnswers = (choice1, choice2, choice3, choice4) => {
  if(choice1.checked && choice2.checked && !choice3.checked && !choice4.checked) {
    console.log("Correct!!");
    score++;
  } else if(choice1.checked || choice2.checked || choice3.checked || choice4.checked) {
    console.log("Wrong!");
  } else {
    console.log("Please choose an answer!")
    questionsAnswered = false;
  }

};

resultBtn.addEventListener("click", () => {
  let resultMessage = document.createElement("h2");
  resultMessage.style.color = "black";
  resultContainer.innerHTML = "";
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

  //Question 7 - multiple answers (first and second argument is the correct choice)
  checkMultipleAnswers(q7Choice2, q7Choice3, q7Choice1, q7Choice4);

  //Append results if all questions are answered
  if(questionsAnswered === false){
      resultMessage.textContent = "Please answer all the questions!";
      resultContainer.appendChild(resultMessage);
  } else if(questionsAnswered === true){
    if(score === 7){
      resultMessage.style.color = "green";
      resultMessage.textContent = `You had ${score} out of 7 correct answers!`
      resultContainer.appendChild(resultMessage);
    } else if(score >= 4){
      resultMessage.style.color = "orange";
      resultMessage.textContent = `You had ${score} out of 7 correct answers!`
      resultContainer.appendChild(resultMessage);
    } else if(score <= 3){
      resultMessage.style.color = "red";
      resultMessage.textContent = `You had ${score} out of 7 correct answers!`
      resultContainer.appendChild(resultMessage);
    }
  }
  console.log(score);
});

//darkmode toggle function
// let changeMode = () => {
//   let bodyBG = document.body.backgroundColor;
//   bodyBG.classList.toggle("darkMode");
//   allH2.classList.toggle("darkH2");
// };


// modeBtn.addEventListener("click", (() => {
//   changeMode();
// }));

//Function to change color for specific headings etc
let colorChange = (element, color) => {
  element.forEach((item) => {
    item.style.color = color;
  });
};

modeBtn.addEventListener("click", (() => {
  if(darkMode === false){
    colorChange(allH1, "#c6ced8");
    colorChange(allH2, "#c6ced8");
    colorChange(allH3, "#a1a8b1");
    colorChange(allLabels, "#a1a8b1");
    //BG color
    document.body.style.backgroundColor = "#282f38";

    console.log("Now it's darkmode")
    darkMode = true;
  } else if(darkMode){
    
    console.log("Now it's lightmode")
    darkMode = false;
  }

}));

