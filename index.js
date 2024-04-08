import inquirer from "inquirer";
console.log("Welcome to Currency Converter");
const Currency = {
    USD: 1,
    EUR: 0.88,
    GBP: 0.74,
    INR: 74.54,
    PKR: 280
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from curency",
        type: 'list',
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to curency",
        type: 'list',
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: 'number',
    },
]);
let fromAmount = Currency[userAnswer.from];
let toAmount = Currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
