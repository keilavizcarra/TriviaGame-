var wrongAnswer =0;
var rightAnswer = 0;
var score = 0;


var questions = [
{ question: "Darth Vader is Luke Skywalkers father.",
  options: ["true", "false"],
  answer: 0
},
{ question:"Luke's calling signal on Hoth is Echo 7.",
  options: ["true", "false"],
  answer: 0
},
{ question:"Leia is Luke Skywalkers sister.",
  options: ["true", "false"],
  answer: 1
},
{ question4:"It was Lando's idea to put Han in carbon freezing.",
  options: ["true", "false"],
  answer: 1
},
{ question5:"Luke gets his hand cut by a lightsaber.",
  options: ["true", "false"],
  answer: 0
},
{ question5:"Order 55 brought the death of the Jedi's.",
  options: ["true", "false"],
  answer: 1

}];

// the connection between buttons and clicks

$('#true-button').on("click", function(){
 var trueButton= document.getElementById('true-button');
})

$('#false-button').on("click", function(){
var falseButton= document.getElementById('false-button');
})

//
for (var i = 0; 1 < questions.length; i++){
    var response = window.question(questions[i].question);
    if (response == questions [i].answer){
        score++;
        alert("Correct!");
    }
    else{
        alert("Wrong!");
    }
}

//score

//reset



//timer
$('#count').on("click", function(){
    var counter = 60;

    var interval = setInterval(function(){
        counter--;
        if(counter >=0){
            $('#count').html(counter);
        }
        if(counter === 0){
            clearInterval(interval);
        }

    },1000); 
})


