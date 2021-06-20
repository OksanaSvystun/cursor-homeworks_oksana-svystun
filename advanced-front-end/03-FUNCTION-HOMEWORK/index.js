// Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.

function getMaxDigit(number) {
  const maxNumberArray = number.split("").sort().reverse();
  return maxNumberArray[0];
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

// Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі)

function ucFirst(str) {
  if (!str) return str;
  const lowerStr = str.toLowerCase();
  return lowerStr[0].toUpperCase() + lowerStr.slice(1);
};

// Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. 
function taxCalc(salary, tax) {
  return salary - (salary * tax / 100);
};

// Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
function randomNum(num1, num2) {
  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

// Створити функцію, яка рахує скільки разів певна буква повторюється в слові. 

function letterCalc(word, letter){
    const wordLowerCase = word.toLowerCase();
    const letterLowerCase = letter.toLowerCase();
    let result = 0;
    for(let i=0; i<word.length; i++){
        if (wordLowerCase[i] == letterLowerCase) {
          result += 1;
        }
    }
    return result;
};

// Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку
function currencyConv(currency) {
  const convValue = 25;
  let currencyNum;
  let convertedNum;
  if (currency.indexOf("UAH") !== -1 ) {
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

// Створіть функцію, яка перевіряє, чи є слово паліндромом.
function isPalindrom(phrase) {
  const newPhrase = phrase.toLowerCase().replace(/\s/g, "");
  const reversePhrase = newPhrase.split("").reverse().join("");
  return (newPhrase === reversePhrase) ? true : false;
};
