// hw1
//Визначення ціни товару рандомно
const randomPrice = +(Math.random() * 1000).toFixed(2);

// hw2
function sumOfUserNumbers(firstNumber, secondNumber) {
  const includeEven = true;

  const maxNumber = Math.max(firstNumber, secondNumber);
  const minNumber = Math.min(firstNumber, secondNumber);
  let sum = 0;

  for (let i = minNumber; i <= maxNumber; i++) {
    if (includeEven && i % 2 === 0) {
      continue;
    }
    sum += i;
  }
  return sum;
};

// hw3
function getMaxDigit(number) {
  const maxNumberArray = number.split("").sort().reverse();
  return maxNumberArray[0];
};

// hw4
function addMark() {
  const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
  const marks = [4, 5, 5, 3, 4, 5];
  let studentMark = [];
  for (let i = 0; i < marks.length; i++) {
    studentMark.push([students[i], " " + marks[i]]);
  }
  return studentMark;
}

// hw5
const getRandomArray = (length, min, max) =>
  Array.from({ length }).map((el) =>
    Math.floor(Math.random() * (max + 1 - min) + min)
  );

// hw6
function calculateWordLetters(userPhrase) {
  if (!userPhrase.length || userPhrase.trim()=='') return "Ви нічого не вказали";
  const word = userPhrase.replaceAll(' ', '').toLowerCase();
  const counter = {};
  for (let i = 0; i < word.length; i++) {
    counter[word[i]] ? (counter[word[i]] += 1) : (counter[word[i]] = 1);
  }
  console.log(counter);
  return Object.entries(counter);
};

// hw7
const ukraine = {
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476,
};
function getMyTaxes(salary) {
  const myTax = salary * this.tax;

  return +myTax.toFixed(2);
}


// hw8
class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [];
    this.status = 'студент';
  }

  getInfo() {
    return `Cтудент ${this.course}го курсу, ${this.university}, ${this.fullName}`;
  }
};
let ostap = new Student(
  "Вищої Школи Психотерапії м.Одеса",
  "1",
  "Остап Родоманський Бендер"
);

// hw9
function randRGB() {
  const r = Math.trunc(Math.random() * 255);
  const g = Math.trunc(Math.random() * 255);
  const b = Math.trunc(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}


export {
  randomPrice,
  sumOfUserNumbers,
  getMaxDigit,
  addMark,
  getRandomArray,
  calculateWordLetters,
  ukraine,
  getMyTaxes,
  Student,
  ostap,
  randRGB,
};