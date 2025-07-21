import readline from 'readline';
import {checkNumber, isPrime} from './bai_1.js';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Nhập một số: ", (answer) => {
    const number = parseFloat(answer);
    checkNumber(number);
    rl.question("Nhập dãy số cách nhau bằng dấu cách: ", (input) => {
        const numberArray = input.split(" ").map(Number);
        const primeArray = numberArray.filter(isPrime);
        console.log("Các số nguyên tố là: ", primeArray);
        rl.close();
    })
});




