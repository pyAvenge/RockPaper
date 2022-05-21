let randomSelection = Math.floor((Math.random() * 3) + 1);
console.log(randomSelection);
function computerPlay(randomSelection){
    
    switch (randomSelection){
        case 1:
            return "Rock";
            
            
        case 2:
            return "Paper";
            
        case 3:
          return  "Scissor";
        

    }   
}
let choiceOne=computerPlay(randomSelection);
console.log(choiceOne)

let choice = prompt ("Please input your choice: ","You need to input the correct value: rock, paper or scissor!");
let choiceCase = choice.toLowerCase()
console.log(choiceCase);
console.log(choiceCase===choiceOne);
let a = choiceCase===choiceOne;
console.log(a);
function playAround(choiceCase,choiceOne){
    if (choiceCase===choiceOne){
        console.log("TIE");
    }
    else if (choiceCase=="rock"){
            if(choiceOne=="Paper"){
                console.log("You lose! Paper beats rock");
            }
            else{
                console.log('You win! Rock beats scissors!');
            }
        } 
     else if (choiceCase=="paper"){
            if(choiceOne=="Scissors"){
                console.log("You lose! Scissors beats paper");
            }
            else{
                console.log('You win! Paper beats rock!');
            }
        }else{
            if(choiceOne=="Rock"){
                console.log("You lose! Rock beats scissors");
            }
            else{
                console.log('You win! Scissors beats paper!');
            }

        }
}

function game(){
for (i=0;i<5; i++){
   playAround(choiceCase,choiceOne);
}     
}
