#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let answers = await inquirer.prompt([
    {
        name: "getPin",
        message: "Enter Your PIN",
        type: "number",
    },
]);
if (answers.getPin === myPin) {
    let answers = await inquirer.prompt([
        {
            name: "chooseAction",
            message: "what do you want to do",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Check Balance"],
        },
    ]);
    if (answers.chooseAction === "Withdraw") {
        let answers = await inquirer.prompt([
            {
                name: "withdrawAmount",
                message: "How much do you want to withdraw :",
                type: "number",
            },
        ]);
        if (answers.withdrawAmount <= myBalance) {
            myBalance = myBalance - answers.withdrawAmount;
            console.log(`You have withdrawn ${answers.withdrawAmount} from your account`);
            console.log(`Your current balance is ${myBalance}`);
        }
        else {
            console.log(`Insufficient Funds`);
        }
    }
    else if (answers.chooseAction === "Fast Cash") {
        let answers = await inquirer.prompt([
            {
                name: "fastCashOptions",
                message: "How much you want to withdraw ?",
                type: "list",
                choices: [1000, 2000, 5000, 10000],
            },
        ]);
        if (answers.fastCashOptions === 1000) {
            myBalance = myBalance - 1000;
            console.log(`You have withdrawn 1000 from your account`);
            console.log(`Your current balance is ${myBalance}`);
        }
        else if (answers.fastCashOptions === 2000) {
            myBalance = myBalance - 2000;
            console.log(`You have withdrawn 2000 from your account`);
            console.log(`Your current balance is ${myBalance}`);
        }
        else if (answers.fastCashOptions === 5000) {
            myBalance = myBalance - 5000;
            console.log(`You have withdrawn 5000 from your account`);
            console.log(`Your current balance is ${myBalance}`);
        }
        else if (answers.fastCashOptions === 10000) {
            myBalance = myBalance - 10000;
            console.log(`You have withdrawn 10000 from your account`);
            console.log(`Your current balance is ${myBalance}`);
        }
    }
    else {
        console.log(`Your Account Balance is ${myBalance}`);
    }
}
else {
    console.log(`Incorrect Pin Code`);
}
