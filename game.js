var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).on("keydown",function(){
    if(!started)
    {
        $("#level-title").text("Level "+level);
          nextSequence();
          started = true;
    }   
});

function nextSequence() {
    level++;
    $("#level-title").text("Level "+level);

    userClickedPattern = [];



    var randomNUmber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNUmber];
    //console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    console.log("nextSeq user "+userClickedPattern);
    console.log("nextSeq game "+gamePattern);
  
}
  // whnever any button clicked

  $(".btn").click(function(){
    var userChosenColour  = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    //var ismatched = compareArrays(gamePattern,userClickedPattern);
    checkAnswer(userClickedPattern.length - 1);
    /*if(ismatched == false)
    {
      gameOver();
    }
    else{
      setTimeout(function(){
        nextSequence();
      },1000);
      
    }*/
    //console.log(userClickedPattern);
  });
  
function checkAnswer(userAnswerIndex)
{
   if(gamePattern[userAnswerIndex] === userClickedPattern[userAnswerIndex])
   {
    console.log("success userAnserIndex"+userAnswerIndex);
    if(gamePattern.length === userClickedPattern.length)
    {
      setTimeout(function(){
        nextSequence();
      },1000);
    }

   }
   else{
    gameOver();
   }
    
}

///   Game Over
function gameOver(){

  $("#level-title").text("Game Over, press any Key to Restart");
      $("body").addClass("game-over");
      setTimeout(function(){
        $("body").removeClass("game-over");
      },100);
      playSound("wrong");
      started = false;
      level = 0;
      gamePattern = [];
      //userClickedPattern = [];

}

 function playSound(nameMusic)
  {
    var audioObj = new Audio("sounds/"+nameMusic+".mp3");
    audioObj.play();

  }

  // define animation
  function animatePress(currentColour){
    
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
      },100);

  }

  // both arrays compare function
/*function compareArrays(game,user)
{
  if(game.length != user.length)
  {return false;}
  else{
    for (var i=0; i < game.length; i++)
      {
        if(game[i] != user[i])
        {
          return false;
        }
      }
    return true;
  }
    
}*/



  // u can also use for flash
  //$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  

  /*function playSoundWithColor(inputPara) {

    switch(inputPara)
        {
                case "red":
                var red1 = new Audio('./sounds/red.mp3');
                    red1.play();
                break;
                case "blue":
                var blue1 = new Audio('./sounds/blue.mp3');
                    blue1.play();
                break;
                case "yellow":
                var yellow1 = new Audio('./sounds/yellow.mp3');
                yellow1.play();
                break;
                case "green":
                var green1 = new Audio('./sounds/green.mp3');
                    green1.play();
                break;

            default: 
                var wrong = new Audio('./sounds/wrong.mp3')
                wrong.play();
                break;
        }
}*/