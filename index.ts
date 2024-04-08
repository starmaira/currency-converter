
import inquirer from "inquirer";




console.log("Welcome to Currency Converter");

const Currency:any ={
    USD:1,
    EUR:0.88,
    GBP:0.74,
    INR:74.54,
    PKR:280
};

let userAnswer:any = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from curency",
        type:'list',
        choices: ["USD", "EUR", "GBP","INR","PKR"]
    },
    {
        name: "to",
        message: "Enter to curency",
        type:'list',
        choices: ["USD", "EUR", "GBP","INR","PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type:'number',
    },
]);


let fromAmount = Currency [userAnswer.from]  //exchange rate//
let toAmount = Currency [userAnswer.to]      //exchange rate//
let amount = userAnswer.amount              // input amount //
let baseAmount = amount / fromAmount;        //convert input amount to base currency//
let convertAmount = baseAmount * toAmount;    //now convert to desired currency///

console.log(convertAmount);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);


