let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getComputerChoice(){
    const choices=['r', 'p', 's'];
    const randomNumber=Math.floor(Math.random()* 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter=="r") return "Rock";
    if (letter=="p") return "Papper";
    else return "Scissor";
    
}
function win(userchoice, computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=convertToWord(userchoice) + "  Beats " + convertToWord(computerChoice) + "   You Win...!!😁";
   // or -> result_p.innerHTML=`${convertToWord(userchoice)} Beats ${convertToWord(computerChoice)} You Win...!!  `;
}
function loss(userchoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=convertToWord(userchoice) + " Beats " + convertToWord(computerChoice) + "   You Loss...!! 😭 ";
}
function draw(userchoice, computerChoice){
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=convertToWord(userchoice) + " == " + convertToWord(computerChoice) + "  Ohh Its Draw  😉";
}
function game(userchoice)
{
    const computerChoice=getComputerChoice();
    switch(userchoice + computerChoice){
       case "rs":
       case "pr":
       case "sp":
           win(userchoice, computerChoice);
           break;
       case "rp":
       case "ps":
       case "sr":
           loss(userchoice, computerChoice);
           break;
       case "rr":
       case "pp":
       case "ss":
           draw(userchoice, computerChoice);
           break; 

    }
}
function main(){

    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    
    scissor_div.addEventListener('click', function(){
        game("s");
    })

}

main();




