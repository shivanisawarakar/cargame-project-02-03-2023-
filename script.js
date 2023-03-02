const startContainer=document.querySelector('.start');
const gameContainer=document.querySelector('.game');
const scoreContainer=document.querySelector('.score');



let previsousRenderredTime = 0;
let carPosition = {
    x:0,
    y:0
};

let player = {
 ArrowUp : false,
 ArrowDown : false,
 ArrowLeft : false,
 ArrowRight : false
};


function playGame (milliseconds) {
    
    // we can create a aninimaation loop ;
};


function startGame(){

     // hide the start container

     startContainer.classList.add('hide');

     //create car

     const car=document.createElement('div');
    car.setAttribute('class','car');

     //add it inside game container

     gameContainer.appendChild(car); 
     var top=0;
    

     //create lines

     for(var i=0;i<5;i++)
     {
        const line=document.createElement('div');
        line.classList.add('line');
        line.style.top=top+'px';
        gameContainer.appendChild(line);
        top+=150;
     }
     //add them in game container
}

function handleKeyUp (e) {
    e.preventDefult();
    console.log(e.key);
}

function handlekeyDown (e) {
    e.preventDefult();
    console.log(e.key);
}


window.requestAnimationFrame(playGame);
document.addEventListener('keyup',handleKeyUp);
document.addEventListener('keydown', handlekeyDown);
startContainer.addEventListener('click',startGame);