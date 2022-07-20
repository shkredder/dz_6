//task 1 ---------------
const findDaysInMonth = (monthStr, year) => {
    const month = new Date(monthStr + "-1-01").getMonth() + 1;
    const number = new Date(year, month, 0).getDate();
    return `The Month has ${number} days`;
};
let userMonth = String(prompt("Enter the month (January):"));
let userYear = Number(prompt("Enter the year (2012):"));

console.log(findDaysInMonth("February", 2012)); // "The Month has 29 days"
console.log(findDaysInMonth("February", 2013)); // "The Month has 28 days"
console.log(findDaysInMonth("April", 2012)); // "The Month has 30 days"
console.log(findDaysInMonth(userMonth, userYear));

//task 2 ---------------

let isNumeric = (n) => {
    return !isNaN(parseInt(n));
};
let isOperator = (x) => {
    return x == "+" || x == "-" || x == "*" || x == "/" || !isNaN(parseInt(x));
};

let result;

let operator = String(prompt("Enter operator:"));
while (operator === null || isOperator(operator) === false) {
    operator = String(prompt("Enter operator:"));
}

let firstNumber = Number(prompt("Enter first number:"));

while (isNumeric(firstNumber) === false) {
    firstNumber = Number(prompt("Enter first number:"));
}

let secondNumber = Number(prompt("Enter second number:"));

while (isNumeric(secondNumber) === false) {
    secondNumber = Number(prompt("Enter second number:"));
}
switch (operator) {
    case "+":
        result = firstNumber + secondNumber;
        break;
    case "-":
        result = firstNumber - secondNumber;
        break;
    case "*":
        result = firstNumber * secondNumber;
        break;
    case "/":
        result = firstNumber / secondNumber;
        break;
}

console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);

// task 3 -----------
let checkAnagram = (wordOne, wordTwo) => {
    let lenOne = wordOne.length;
    let lenTwo = wordTwo.length;
    if (lenOne !== lenTwo) {
        return `different word lengths: ${wordOne} is ${lenOne} and ${wordTwo} is ${lenTwo}`;
    }
    wordOne = wordOne.toLowerCase().split("").sort().join("");
    wordTwo = wordTwo.toLowerCase().split("").sort().join("");
    return wordOne === wordTwo;
};
console.log(checkAnagram("indian", "ndiani"));
console.log(checkAnagram("indiant", "ndiani"));

console.log(checkAnagram("sLeEP", "speel"));
console.log(checkAnagram("Hi", "Bye"));
