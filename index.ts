#! /usr/bin/env node


import inquirer from "inquirer"
const randomnumber=  Math.floor(Math.random() * 6+1);
// console.log(randomnumber);

const answer= await inquirer.prompt([
    {
        name:"userguessnumber",
        type:"number",
        message:"please guess a number between 1-6:",

    }
]);
// console.log(answer);
if(randomnumber===answer.userguessnumber){
console.log("CongtratulationS! you guessed rigth number");

}
else{
    console.log("you guessed wrong number");
    
}
