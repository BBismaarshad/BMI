#! /usr/bin/env node
import inquier from "inquirer";
const BMI = await inquier.prompt([
    {
        type: "number",
        name: "weight",
        message: " kindly enter your weight"
    },
    {
        type: "number",
        name: "hegiht",
        message: "kindly enter your hegiht"
    },
]);
let w = BMI.weight;
let h = BMI.hegiht;
console.log(`your body mass index is ${w / (h * h)}`);
console.log(BMI.weight);
console.log(BMI.hegiht);
