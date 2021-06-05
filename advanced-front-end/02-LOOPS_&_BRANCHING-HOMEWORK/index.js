let firstNumber;
let secondNumber;
let firstNumberInt;
let secondNumberInt;

// Checks or input is an integer, a number and not empty string function
function integer(number) {
  if ((Number.isInteger(Number(number)) && Number(number)) || Number(number) === 0 && !Number(number) === '') {
    return true;
  } else {
    return false;
  }
}

// Do prompt while function isn't true
do {
  firstNumber = +prompt("Enter first (integer) number.");
  firstNumberInt = integer(firstNumber);
} while (!firstNumberInt === true);

// Do prompt while function isn't true and firstNumber!= secondNumber
do {
  secondNumber = +prompt("Enter ANOTHER second (integer) number.");
  secondNumberInt = integer(secondNumber);
} while (!secondNumberInt === true || firstNumber == secondNumber);

const includeEven = confirm("Skip even numbers?");

const maxNumber = Math.max(firstNumber, secondNumber);
const minNumber = Math.min(firstNumber, secondNumber);
let sum = 0;

// Check whether to include even numbers in the sum
if (includeEven) {
    for (let i = minNumber; i <= maxNumber; i++) {
      if (i % 2 != 0) {
        sum += i;
      }
    }
  } else {
    for (let i = minNumber; i <= maxNumber; i++) {
      sum += i;
    }
}

alert(`Sum is ${sum}`);
