var buttonColors=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userChosenColor;
var userClickedPattern=[];
var colorCheck=true;
var started=false;
var level=0;
var gameOver=false;

var counter=0;

function resetUCPattern(){
    userClickedPattern=[];
}

function startOver(){
    started=false;
    gamePattern=[];
    userChosenColor="";
    userClickedPattern=[];
    level=0;
}

function nextSequence(){
    started=true;
    gameOver=false;
    counter=0;
    var randomNumber=Math.round(Math.random()*3);
    var RandomChosenColor=buttonColors[randomNumber];
    gamePattern.push(RandomChosenColor);

    $("#"+RandomChosenColor).fadeOut(50).fadeIn(50);
    playSound(RandomChosenColor);

    level++;
    $("h1").text("level "+level);
    resetUCPattern();

    console.log("next seq:"+gamePattern);
    console.log("next seq:"+userClickedPattern);
    
}

$(".btn").click(function(){
    userChosenColor=this.id;
    userClickedPattern.push(userChosenColor);
    console.log("cliced:"+gamePattern);
    console.log("clicked usp:"+userClickedPattern);
    playSound(userChosenColor);
    animatePress();
    checkAnswer();
    if(gameOver==true){
        
        $("h1").text("Game over,press any key to restart.");
        var go=new Audio("./sounds/wrong.mp3");
        go.play();
        startOver();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },100);
        $(document).keypress(function(){
        nextSequence();
        if(started==true){
            $(document).off("keypress");
        }
    });
    }
    else if(colorCheck=true && counter==gamePattern.length){
        setTimeout(function(){
            nextSequence();
        },1000);
    }


    

    
    console.log("counter:"+counter);
});

//playing sound
function playSound(name){
    var audio=new Audio("./sounds/"+name+".mp3");
    audio.play();
}

//animation
function animatePress(){
    $(".btn").click(function(){
        $("#"+this.id).addClass("pressed");
        setTimeout(function(){
            $(".btn").removeClass("pressed");
        },100);
    });
}

if(started==false){
    
    $(document).keypress(function(){
        nextSequence();
        if(started==true){
            $(document).off("keypress");
        }
    });
    
}

function checkAnswer(){
    if(userClickedPattern[counter]!=gamePattern[counter]){
        colorCheck=false;
        gameOver=true;
        console.log("check answer counter"+counter);
        console.log("ucp:"+userClickedPattern[counter]);
        console.log("gp:"+gamePattern[counter]);
        console.log("false logged");
    }
    else{
        colorCheck=true;
        counter++;
        console.log("true logged")
    }

    
    
}

