let buttons = document.querySelectorAll("button");
let userScore = document.getElementById("user_score");
let computerScore = document.getElementById("computer_score");
let result1 = document.getElementById("result");
// console.log(buttons);
let userPoints =0;
let computerPoints =0;

buttons.forEach((button)=>{
    button.addEventListener('click' ,()=>{
        // console.log(button.id);
    let result = matchTheConditions(button.id,computerRandomvalue());
    result1.innerText = result;
    })
})
function computerRandomvalue(){
    let array = ['rock', 'paper', 'scissor'];
    let randomValue = Math.floor(Math.random() * array.length);
    // console.log(array[randomValue]);
    return array[randomValue];
}
function matchTheConditions(userValue, computerValue){
 if(userValue == computerValue){
    
    return "It's a tie!";
 }else if(userValue == "rock" && computerValue == "scissor" || userValue == "paper" && computerValue == "rock" || userValue == "scissor" && computerValue == "paper"){
    userPoints++;
    userScore.innerText = userPoints;
    return "you win! " + userValue + " beats " + computerValue;
 }else{
    computerPoints++;
    computerScore.innerText = computerPoints;
 return "you lose! " +  computerValue + " beats " + userValue;
 
 }
}
