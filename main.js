import inquirer from "inquirer";
// Generate random number
const randomNumber = Math.floor(Math.random() * 6 + 1);
// asking user 
const number = await inquirer.prompt({
    name: "GuessedNumber",
    type: "number",
    message: "Plese enter the number between 1-6"
});
// condition 
if (number.GuessedNumber === randomNumber) {
    console.log("Congratulations! you gussed correct answer");
}
else {
    console.log(`You guessed wrong answer. The correct answer is ${randomNumber}`);
}
