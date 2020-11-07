var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var startButton = document.getElementById('start');
var questionbutton = document.getElementById('question');
var answerA = document.getElementById('a');
var answerB = document.getElementById('b');
var answerC = document.getElementById('c');
var answerD = document.getElementById('d');
var count = -1
var timer = 30
var interval

function endGame(){
    clearInterval(interval)
    questionbutton.style.display='none'
    answerA.style.display='none'
    answerB.style.display='none'
    answerC.style.display='none'
    answerD.style.display='none'
    resultsContainer.textContent='score: '+timer
    var initials= document.createElement("input")
    initials.setAttribute('id', 'initials')
    resultsContainer.appendChild(initials)
    var submitbutton= document.createElement('button')
    submitbutton.textContent= "Initials"
    resultsContainer.appendChild(submitbutton)
    submitbutton.addEventListener('click', function(){
        localStorage.setItem('initials', initials.value);
        console.log(document.getElementById("initials").value);
    })
}

var quizQuestions = [
    {

        question: "What is your quest?",
        answers: {

            A: 'Holy Grail',
            B: 'Holy Cow',
            C: 'Holy Moley',
            D: 'Holy Holy'
        },
        correctAnswer: 'a'
    },

    {
        question: "What is your favorite colour?",
        answers: {

            A: 'I dont know',
            B: 'Blue',
            C: 'Blue...no wait!',
            D: 'Orange',
        },
        correctAnswer: 'b'

    },
    {
        question: "What is the average speed of a coconut laiden swallow?",
        answers:{

            A: 'What?',
            B: 'I dont know',
            C: 'African or European',
            D: 'slow'

        },
        correctAnswer: 'c'
    },

    {
        question: "Was this a good reference?",
        answers:{

            A: 'Reference?',
            B: 'No not really',
            C: 'Life of Brian was better',
            D: 'Yes',
        },
        correctAnswer: 'd'
    }



];

startButton.addEventListener("click", function(){
    count++;
    questionbutton.textContent = quizQuestions[count].question;
    answerA.textContent = quizQuestions[count].answers.A;
    answerB.textContent = quizQuestions[count].answers.B;
    answerC.textContent = quizQuestions[count].answers.C;
    answerD.textContent = quizQuestions[count].answers.D;
    startButton.style.display= 'none';
    
    
    
     interval = setInterval(function(){
            timer--;
            console.log(timer)
            if(timer===0){
                endGame()
            }

        }, 1000);
        
    

});

answerA.addEventListener("click", function(){
    if(quizQuestions[count].correctAnswer==='a'){
        alert('Correct!')
    }
    else{
        timer= timer - 10
    }
    count++; 
    if(count>3){
        endGame()
        return
    }
    questionbutton.textContent = quizQuestions[count].question;
    answerA.textContent = quizQuestions[count].answers.A;
    answerB.textContent = quizQuestions[count].answers.B;
    answerC.textContent = quizQuestions[count].answers.C;
    answerD.textContent = quizQuestions[count].answers.D;
});

answerB.addEventListener("click", function(){
    if(quizQuestions[count].correctAnswer==='b'){
        alert('Correct!')
    }
    else{
        timer= timer - 10
    }
    count++;
    if(count>3){
        endGame() 
        return
    }
    questionbutton.textContent = quizQuestions[count].question;
    answerA.textContent = quizQuestions[count].answers.A;
    answerB.textContent = quizQuestions[count].answers.B;
    answerC.textContent = quizQuestions[count].answers.C;
    answerD.textContent = quizQuestions[count].answers.D;
});

answerC.addEventListener("click", function(){
    if(quizQuestions[count].correctAnswer==='c'){
        alert('Correct!')
    }
    else{
        timer= timer - 10
    }
    count++;
    if(count>3){
        endGame()
        return
    }
    questionbutton.textContent = quizQuestions[count].question;
    answerA.textContent = quizQuestions[count].answers.A;
    answerB.textContent = quizQuestions[count].answers.B;
    answerC.textContent = quizQuestions[count].answers.C;
    answerD.textContent = quizQuestions[count].answers.D;
});

answerD.addEventListener("click", function(){
    if(quizQuestions[count].correctAnswer==='d'){
        alert('Correct!')
    }
    else{
        timer= timer - 10
    }
    count++;
    if(count>3){
        endGame()
        return
    }
    questionbutton.textContent = quizQuestions[count].question;
    answerA.textContent = quizQuestions[count].answers.A;
    answerB.textContent = quizQuestions[count].answers.B;
    answerC.textContent = quizQuestions[count].answers.C;
    answerD.textContent = quizQuestions[count].answers.D;
});