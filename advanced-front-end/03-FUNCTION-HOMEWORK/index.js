// Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.

function getMaxDigit(number) {
  let maxNumberArray = number.split("").sort().reverse();
  let maxNumber = maxNumberArray[0];
  return maxNumber
};
document.forms.digit_form.onsubmit = function (event) {
  event.preventDefault();
  let numberFromUserForMaxDigit =
  document.getElementById("input-max-digit").value;
  document.getElementById("max-number").innerHTML =
    "Найбільша цифра у числі: " + getMaxDigit(numberFromUserForMaxDigit);
};


// Створити функцію, яка визначає степінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

function degreeOfNumber(number, degree) {
  let result = 1;
  if (degree > 0) {
    for (let i = 1; i <= degree; i++){
      result = result * number;
    }
  }
  else {
    for (let i = -1; i >= degree; i--){
      result = result / number;
    }
  }
  return result;
};
document.forms.degree_form.onsubmit = function (event) {
  event.preventDefault();
  let numberFromUserForDegree = +document.getElementById("input-number-degree").value;
  let numberFromUserDegree = +document.getElementById("degree").value;
  document.getElementById("number-in-degree").innerHTML =
    `Число ${numberFromUserForDegree} у степені ${numberFromUserDegree} : ` +
    degreeOfNumber(numberFromUserForDegree, numberFromUserDegree);
};


// Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі)

function ucFirst(str) {
  if (!str) return str;
  let lowerStr = str.toLowerCase();
  let firstUpperStr = lowerStr[0].toUpperCase() + lowerStr.slice(1);
  return firstUpperStr;
};
document.forms.upperCase_form.onsubmit = function (event) {
  event.preventDefault();
  let nameFromUser = document.getElementById("name").value;
  document.getElementById("first-letter-upperCase").innerHTML =
    `${nameFromUser} відформатовано до ` + ucFirst(nameFromUser);
};

// Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. 
function taxCalc(salary, tax) {
  let newSalary = salary - (salary * tax / 100);
  return newSalary;
};
document.forms.tax_form.onsubmit = function (event) {
  event.preventDefault();
  let salaryFromUser = +document.getElementById("salary").value;
  let taxFromUser = +document.getElementById("tax").value;
  document.getElementById("salary-without-tax").innerHTML =
    "Ваша зарплатня становить: " + taxCalc(salaryFromUser, taxFromUser);
};

// Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
function randomNum(num1, num2) {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  let randNum = Math.round(rand);
  return randNum;
};
document.forms.rand_form.onsubmit = function (event) {
  event.preventDefault();
  let num1FromUser = +document.getElementById("number1").value;
  let num2FromUser = +document.getElementById("number2").value;
  document.getElementById("random-number").innerHTML =
    `Випадкове число між ${num1FromUser} i ${num2FromUser} : ` +
    randomNum(num1FromUser, num2FromUser);
};

// Створити функцію, яка рахує скільки разів певна буква повторюється в слові. 

function letterCalc(word, letter){
    let wordLowerCase = word.toLowerCase();
    let letterLowerCase = letter.toLowerCase();
    let result = 0;
    for(let i=0; i<word.length; i++){
        if (wordLowerCase[i] == letterLowerCase) {
          result += 1;
        }
    }
    return result;
};
document.forms.letter_form.onsubmit = function (event) {
  event.preventDefault();
  let wordFromUser = document.getElementById("word").value;
  let letterFromUser = document.getElementById("letter").value;
  document.getElementById(
    "number-of-letters"
  ).innerHTML = `Літера '${letterFromUser}' повторюється 
  ${letterCalc(wordFromUser, letterFromUser)} разів`;
};

// Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку
function currencyConv(currency) {
  let convValue = 25;
  let currencyNum;
  let convertedNum;
  if (currency.indexOf("UAH") !== -1 || currency.indexOf("uah") !== -1) {
    currencyNum = currency.substring(0, currency.length - 3);
    convertedNum = currencyNum / convValue;
  }
  else if (currency.indexOf("$") !== -1) {
    currencyNum = currency.substring(0, currency.length - 1);
    convertedNum = currencyNum * convValue;
  }
  else {
    convertedNum = "Будь ласка, вкажіть правильну валюту";
  }
  return convertedNum;
};
document.forms.currency_form.onsubmit = function (event) {
  event.preventDefault();
  let currencyFromUser = document.getElementById("currency").value;
  document.getElementById("currency-conversion").innerHTML =
    "Конвертовано: " + currencyConv(currencyFromUser);
};

// Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам. 
function generatePassword(length) {
  let password;
  if (length == '') {
    password = Math.floor(Math.random() * 100000000);
  }
  else {
    let cache = 1;
    for (let i = 1; i <= length; i++){
      cache = cache * 10;
    }
    password = Math.floor(Math.random() * cache);
  }
  return password;
};
document.forms.password_form.onsubmit = function (event) {
  event.preventDefault();
  let passwordLenghtFromUser = document.getElementById("password").value;
  document.getElementById("password-lenght").innerHTML =
    "Пароль: " + generatePassword(passwordLenghtFromUser);
};

// Створіть функцію, яка видаляє всі букви з речення.
function removeLetter(sentence, letter) {
  let newSentence = '';
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == letter.toUpperCase() || sentence[i] == letter.toLowerCase()) {
      continue;
    }
    else {
      newSentence = newSentence + sentence[i];
    }    
  }
  return newSentence;
};
document.forms.remove_form.onsubmit = function (event) {
  event.preventDefault();
  let sentenceFromUser = document.getElementById("sentence").value;
  let letterToRemoveFromUser = document.getElementById("letter-remove").value;
  document.getElementById("remove-letter-sentence").innerHTML =
    `Речення без літери ${letterToRemoveFromUser}: ` +
    removeLetter(sentenceFromUser, letterToRemoveFromUser);
};

// Створіть функцію, яка перевіряє, чи є слово паліндромом.
function isPalindrom(phrase) {
  let newPhrase = phrase.toLowerCase().replace(/\s/g, "");
  let reversePhrase = newPhrase.split("").reverse().join("");
  if (newPhrase === reversePhrase) {
    return true;
  }
  else
    return false;
};
document.forms.palindrom_form.onsubmit = function (event) {
  event.preventDefault();
  let phraseFromUser = document.getElementById("phrase").value;
  document.getElementById("is-palindrom").innerHTML =
    `Речення паліндром? ` + isPalindrom(phraseFromUser);
};