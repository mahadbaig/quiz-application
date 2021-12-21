var startQuizBtn = document.getElementById("start-quiz")
var continueQuizBtn = document.getElementById("continue")
var restartQuizBtn = document.getElementById("restart")
var quitQuizBtn = document.getElementsByClassName("quit")
var startQuizBox = document.getElementsByClassName("start-btn")
var nextBtn = document.getElementById("next-btn")
var infoBox = document.getElementsByClassName("info-box")
var quizBox = document.getElementsByClassName("quiz-box")
var resultBox = document.getElementsByClassName("result-box")
var options = document.getElementsByClassName("option")
var quesText = document.getElementById("ques-text")
var scoreText = document.getElementById("score-text")
var scoreCounter = 0
var wrongCounter = 0
var quesCounter = 0
var finalScore = document.getElementById("final-score")


function startQuiz() {
    startQuizBox[0].classList.add("hide")
    infoBox[0].classList.remove("hide")
}

function quitQuiz() {
    infoBox[0].classList.add("hide")
    quizBox[0].classList.add("hide")
    resultBox[0].classList.add("hide")
    startQuizBox[0].classList.remove("hide")

}

function restartQuiz(){
    location.reload();
}

function continueQuiz() {
    infoBox[0].classList.add("hide")
    quizBox[0].classList.remove("hide")

    quesText.innerText = quesArr[quesCounter].question
    // console.log(quesText)

    options[0].innerHTML = quesArr[quesCounter].options.a
    options[1].innerHTML = quesArr[quesCounter].options.b
    options[2].innerHTML = quesArr[quesCounter].options.c
    options[3].innerHTML = quesArr[quesCounter].options.d

}

function nextQues(){
    quesCounter++;
    if(quesCounter < quesArr.length){
        continueQuiz();
    }else{
        quizBox[0].classList.add("hide")
        resultBox[0].classList.remove("hide")
    }

    for ( var i=0 ; options.length > i ; i++){
        options[i].style.background = "transparent"
        options[i].classList.remove("disable")  
    }

    finalScore.innerHTML = scoreCounter;
    
}



function answer(e){
    var currentAnswer = quesArr[quesCounter].correctAns
    // console.log(e.innerHTML);
    if (currentAnswer == e.innerHTML){
       e.style.background = "yellowgreen"
        scoreCounter++;
    } else{
       e.style.background = "red"
       wrongCounter++;
    }

    for (var i = 0; options.length > i ; i++){
        options[i].classList.add("disable")
    }
}


var quesArr = [
    {
      num: 1,
      question: "HTML stand for",
      options: {
        a: "Hyper Text Markup Language",
        b: "Hyper text programming Language",
        c: "Hyper text styling Language",
        d: "Hyper text scripting Language",
      },
      correctAns: "Hyper Text Markup Language",
    },
    {
      num: 2,
      question: "Which type of JavaScript Languages is",
      options: {
        a: "Object-Oriented ",
        b: "Object-Base",
        c: "Assembly Languages",
        d: "high Level",
      },
      correctAns: "Object-Base",
    },
    {
      num: 3,
      question: "The 'function' and  'var' are known as:",
      options: {
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
      },
      correctAns: "Declaration statements",
    },
    {
      num: 4,
      question: "who is the present president of pakistan",
      options: {
        a: "Arif Alvi",
        b: "Imran Khan",
        c: "Nawaz Sharif",
        d: "Zardari",
      },
      correctAns: "Arif Alvi",
    },
    {
      num: 5,
      question: "How many prayers in a day:",
      options: {
        a: "6",
        b: "5",
        c: "3",
        d: "none",
      },
      correctAns: "5",
    },
  ];