function clicker(){
    var btn=this.innerHTML;
    makeSound(btn);
    btnAnimation(btn);
}

function makeSound(button){
    switch(button){
        case 'w':
            var a=new Audio("./sounds/tom-1.mp3");
            a.play();
            break;
        
        case 's':
            var a=new Audio("./sounds/tom-2.mp3");
            a.play();
            break;

        case 'a':
            var a=new Audio("./sounds/tom-3.mp3");
            a.play();
            break;
        case 'd':
            var a=new Audio("./sounds/tom-4.mp3");
            a.play();
            break;
        
        case 'j':
            var a=new Audio("./sounds/snare.mp3");
            a.play();
            break;
        
        case 'k':
            var a=new Audio("./sounds/crash.mp3");
            a.play();
            break;
        
        case 'l':
            var a=new Audio("./sounds/kick.mp3");
            a.play();
            break;
    }
}
var a=document.querySelectorAll(".drum");
for(var i=0;i<a.length;i++){
    a[i].addEventListener("click", clicker);
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    btnAnimation(event.key);
});

function btnAnimation(keyPressed){
    document.querySelector("."+keyPressed).classList.add('pressed');
    setTimeout(function(){
        document.querySelector("."+keyPressed).classList.remove('pressed');
    },100);
}