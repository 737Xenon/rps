//GAME USING ADDEVENTLISTENER

let score = JSON.parse( localStorage.getItem("score")) || { 
      
  wins: 0,
  losses: 0,                        // if left === truthy it will use left side else use right
  draws: 0
 };                                    //save score when refreshing page

/*
if (score === null){
 score = {
   wins: 0,                          // same as the right side of the OR operator above
   losses: 0,
   draws: 0
 };

}
*/


updateScoreHTML();


let isAutoPlaying = false;
let intervalID;


function autoPlay(){
  if (!isAutoPlaying){
  intervalID =  setInterval(function(){
      const playerMove = chooseComputerMove();
      startGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  }
  else {
    clearInterval(intervalID);
    isAutoPlaying = false;
  }
}

document.querySelector(".js-rockButton").addEventListener("click", () => {
  startGame("Rock");
});

document.querySelector(".js-paperButton").addEventListener("click", () => {
  startGame("Paper");
});

document.querySelector(".js-scissorsButton").addEventListener("click", () => {
  startGame("Scissors");
});

// using keyboard to play game
document.body.addEventListener("keydown", (event) => {
  if (event.key === "r"){
    startGame("Rock");
  }
  else if (event.key === "p"){
    startGame("Paper");
  }
  else if (event.key === "s"){
    startGame("Scissors");
  }
}); 


function startGame(playerMove){

         const computerMove = chooseComputerMove();
     console.log(computerMove);
     let result = '';

         if (playerMove === 'Scissors'){
           
           if (computerMove === 'Rock'){
         result = 'You lose';
     }

     else if (computerMove === 'Paper'){
         result = 'You win';
     }

     else if (computerMove === 'Scissors'){
         result = 'Draw';
     }  

 }

         else if (playerMove === 'Paper'){
          
     console.log(computerMove);

   

     if (computerMove === 'Rock'){
         result = 'You win';
     }

     else if (computerMove === 'Paper'){
         result = 'Draw';
     }

     else if (computerMove === 'Scissors'){
         result = 'You lose';
     }

 }

           else if (playerMove === 'Rock'){
         

  

     if (computerMove === 'Rock'){
         result = 'Draw';
     }

     else if (computerMove === 'Paper'){
         result = 'You lose';
     }

     else if (computerMove === 'Scissors'){
         result = 'You win';
     }
 }
 
 if (result === "You win"){
   score.wins ++;
 }
 else if (result === "You lose"){
   score.losses ++;
 }
 else if (result === "Draw"){
   score.draws ++;
 }


 localStorage.setItem("score", JSON.stringify(score));       //storage can only save string, JSON.stringify convets score into a string 


document.querySelector(".js-result")
   .innerHTML = result;


document.querySelector(".js-moves")
 .innerHTML = `You <img src="${playerMove}.png" class="moveIcons" alt="emoji" "-">
 
 <img src="${computerMove}.png" class="moveIcons" alt="emoji"> Computer`

 updateScoreHTML();
 
} 


function updateScoreHTML(){
 document.querySelector(".js-score")
   .innerHTML = "Wins: " +score.wins + " Losses: " +score.losses + " Draws: " + score.draws;
}

function chooseComputerMove(){
 const randomNumber= Math.random(); 
 let computerMove ='';

if (randomNumber >=0 && randomNumber < 1/3) {
computerMove = 'Rock';
}

else if (randomNumber >=1/3 && randomNumber < 2/3){
computerMove = 'Paper';   
}

else if (randomNumber >= 2/3 && randomNumber <1){
computerMove = 'Scissors';
}


return computerMove;
}
