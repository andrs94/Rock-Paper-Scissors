function playRound(computerSelection, playerSelection){
    switch (playerSelection){
        case "rock":
            if(computerSelection == "scissors"){ return "You win, rock beats scissors!"}
            else if( computerSelection == "paper"){return "You lose, paper beats rock!"}
            else return playRound(getComputerChoice(),playerSelection);
        
        case "paper":
            if(computerSelection == "rock"){ return "You win, paper beats rock!"}
            else if( computerSelection == "scissors"){return "You lose, scissors beats paper!"}
            else return playRound(getComputerChoice(),playerSelection);    

        case "scissors":
            if(computerSelection == "paper"){ return "You win, scissors beats paper!"}
            else if( computerSelection == "rock"){return "You lose, rock beats scissors!"}
            else return playRound(getComputerChoice(),playerSelection);    
    }

}

function getRandomChoice(arre){
   
    let random = Math.floor(Math.random() * arre.length);
    
    return arre[random];
}

function getComputerChoice(){
let choice= ["rock","paper","scissors"];
return getRandomChoice(choice);
}


function game(){
    
    for( let i = 0; i<5; i++){
        const playerSelection= prompt("rock, paper or scissors?");
        const computerSelection= getComputerChoice();
        console.log(playRound(computerSelection,playerSelection.toLowerCase()));
    }
}
game();