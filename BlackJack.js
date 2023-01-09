let firstCard = getRandomCard();
// Math.floor(Math.random() * 10)+2
// this is used to generate number randomly from 2 -11 in javascript using Math.random 
let secondCard = getRandomCard();
let cards = [firstCard,secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById('message-el');
let cardEl = document.getElementById('card-el');
let sumEl = document.querySelector('#sum-el');
let playerEl = document.getElementById('player-el');


let players = {
    name: "Monseiur",
    chips: 145
}

playerEl.textContent = players.name + ": $" + players.chips
//query selector does the same job as a get element by id

function getRandomCard(){
   let randomNumber =  Math.floor(Math.random()*13) + 1;
   if(randomNumber > 10){
    return 10;
   }
   else if(randomNumber === 1){
    return 11;
   }
   else{
    return randomNumber
   }
}


function startGame(){
    renderGame();
}
function renderGame(){
    if(sum <= 20 ){
        message = "do you want to get another hand of cards?"
    }
    else if(sum === 21){
        message = "yaaaay!! you won the black jack"
        hasBlackJack = true;
    }
    else{
        message = " you are out of the game"
        isAlive = false;
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i]+" ";
        
    }
    // console.log(message);
}
function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard);
    renderGame();
    console.log("new card are giving")
    }
    else{

        console.log("cant deliver more you are out of game")
    }
}