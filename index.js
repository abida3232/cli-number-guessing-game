#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Code with Abida CLI Number guessing game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessNumber",
        type: "number",
        message: "enter your guess number(number limit 1 to 6)",
    },
]);
if (answer.userguessNumber === randomNumber) {
    console.log("cogratulation! you guess a correct number.");
}
else {
    console.log("sorry! you guess wrong number ");
}
