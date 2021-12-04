let playerOneHand = document.getElementById("player1hand");
let playerTwoHand = document.getElementById("player2hand");
let playerOneScore = document.getElementById("player1");
let playerTwoScore = document.getElementById("player2");
let showButton  = document.querySelector('.show');
let resetButton  = document.querySelector('.reset');
let endButton  = document.querySelector('.end');

let reset = () => 
 {
    playerOneScore.innerText=0;
    playerTwoScore.innerText=0;
    playerOneHand.src = "assets/Group 6.png";
    playerTwoHand.src = "assets/Group 4.png";
 }

let randomNumberGenerator = () => 
 {
    return Math.ceil(Math.random()*3);
 }

let game = (hand) => 
{
    let randomNumber = randomNumberGenerator();
    if(randomNumber===1)
    {
        hand.src = "assets/paper.png";
    }
    else if(randomNumber===2)
    {
        hand.src = "assets/rock.png";
    }
    else if(randomNumber===3)
    {
        hand.src = "assets/scissor.png";
    }
    return randomNumber;
}

let increment = (score) => 
{
  score.innerText = parseInt(score.innerText) + 1;
}


// To change hand signs

showButton.addEventListener('click',()=>
{
    let playerOne = game(playerOneHand);
    let playerTwo = game(playerTwoHand);
   if(playerOne===playerTwo)
   {
    // Do nothing   
   }
   else if(playerOne===1&&playerTwo===2)
   {
       increment(playerOneScore);
   }
   else if(playerOne===1&&playerTwo===3)
   {
       increment(playerTwoScore);
   }
   else if(playerOne===2&&playerTwo===1)
   {
       increment(playerTwoScore);
   }
   else if(playerOne===2&&playerTwo===3)
   {
       increment(playerOneScore);
   }
   else if(playerOne===3&&playerTwo===1)
   {
       increment(playerOneScore);
   }
   else if(playerOne===3&&playerTwo===2)
   {
       increment(playerTwoScore);
   }
   

    
})

// To end the game
endButton.addEventListener('click',()=>
{
    if(playerOneScore.innerText>playerTwoScore.innerText)
    {
        alert("player One Won");
        reset();
    }
    else if(playerOneScore.innerText<playerTwoScore.innerText)
    {
        alert("player Two won");
        reset();
    }
    else if(playerOneScore.innerText==="0"&&playerTwoScore.innerText==="0")
    {
        alert("Please Continue");
    }
    else if(playerOneScore.innerText===playerTwoScore.innerText)
    {
        alert("Draw");
        reset();
    }
    
})


// To reset the game
resetButton.addEventListener("click",()=>
{
   reset();
})