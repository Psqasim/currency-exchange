#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let name = await inquirer.prompt({
    name: "name",
    type: "input",
    message: chalk.redBright("enter your name"),
});
console.log(chalk.bgRgb(0, 255, 0)(`${name.name}: WELCOME TO CURRENCY EXCHANGE`));
let currency = {
    usd: 1, // based currency
    euro: 0.92,
    riyal: 3.75,
    pounds: 0.79,
    inr: 83.30,
    pkr: 277.54,
    chinese_yaun: 7.23,
    afghani: 71.23,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.bgBlue("enter from currency"),
        choices: ["usd", "euro", "riyal", "pounds", "inr", "pkr", "chinese_yaun", "afghani"]
    },
    {
        name: "to",
        type: "list",
        message: chalk.bgRgb(222, 173, 237)("enter to currency"),
        choices: ["usd", "euro", "riyal", "pounds", "inr", "pkr", "chinese_yaun", "afghani"]
    },
    {
        name: "amount",
        type: "number",
        message: chalk.red("enter your amount")
    }
]);
let fromamount = currency[user_answer.from]; //exchange rates
let toamount = currency[user_answer.to]; // exchange rates 
let amount = user_answer.amount; //user amount which he give 
let basedamount = amount / fromamount; // in usd base currency excange in this first
let convertedAmount = basedamount * toamount; // then is multiply that acutal value he excahnge currency rate
console.log(chalk.blueBright(convertedAmount.toFixed(2))); // .to fixed is use for point ka bad 2 value aya 
