var start = document.createElement('button');
start.setAttribute('class', 'btn');
start.setAttribute('type', 'submit');
start.textContent= "Start the test";
main.append('start');
console.log(start);


var button = document.createElement("button");
button.setAttribute("dataAnswer", questions[i].answer);

var myQuestions = [
    {
Question: "The answer to this is C",
Answers: ["A","B","C","D"], 
Correct: "C",
    },

{
Question: "What was the answer to your last question?",
Answers: ["Not this one", "Nope", "This one", "Nu uh"],
Correct: "This one",
},

{
Question: "What is the average speed of a coconut laiden swallow?",
Answers: ['What?', "<I don't know that!","Blue!", "African or European?" ],
Correct: "African or European?",
},
];
var score = 0;

for (var i = 0; i < myQuestions.length; i++){
var response
}