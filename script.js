const timerEl = document.getElementById('countdown');
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
var timeLeft = 45;
const myQuestions = [
    {
      question: "What does HTML stand for? (Coding vocab)",
      answers: {
        a: "Hype Tom More Life",
        b: "Hyper Temp Make Large",
        c: "Hyper Text Markup Language"
      },
      correctAnswer: "c"
    },
    {
      question: "What does CSS stand for? (Coding vocab)",
      answers: {
        a: "Clowns Scare Snakes",
        b: "Calling Super Stores",
        c: "Cascading Style Sheets"
      },
      correctAnswer: "c"
    },
    {
      question: "What does JS stand for? (Coding vocab)",
      answers: {
        a: "Just Slide",
        b: "Jump Sideways",
        c: "Jordan's Shadow",
        d: "JavaScript"
      },
      correctAnswer: "d"
    }
  ];
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }
  function countdown() {

    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds left."

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timerEl.remove();
            endQuiz();
        }
    }, 1000);
}
    countdown();
    buildQuiz();
    function showResults(){
      quizContainer.remove();
      submitButton.remove();
    }
    
  submitButton.addEventListener('click', showResults);