// Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
document.forms.digit_form.onsubmit = function (event) {
  event.preventDefault();
  let numberFromUserForMaxDigit =
    document.getElementById("input-max-digit").value;
  document.getElementById("max-number").innerHTML =
    "Найбільша цифра у числі: " + getMaxDigit(numberFromUserForMaxDigit);
};

// Створити функцію, яка визначає степінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
document.forms.degree_form.onsubmit = function (event) {
  event.preventDefault();
  let numberFromUserForDegree = +document.getElementById("input-number-degree")
    .value;
  let numberFromUserDegree = +document.getElementById("degree").value;
  document.getElementById("number-in-degree").innerHTML =
    `Число ${numberFromUserForDegree} у степені ${numberFromUserDegree} : ` +
    degreeOfNumber(numberFromUserForDegree, numberFromUserDegree);
};

// Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі)
document.forms.upperCase_form.onsubmit = function (event) {
  event.preventDefault();
  let nameFromUser = document.getElementById("name").value;
  document.getElementById("first-letter-upperCase").innerHTML =
    `${nameFromUser} відформатовано до ` + ucFirst(nameFromUser);
};

// Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
document.forms.tax_form.onsubmit = function (event) {
  event.preventDefault();
  let salaryFromUser = +document.getElementById("salary").value;
  let taxFromUser = +document.getElementById("tax").value;
  document.getElementById("salary-without-tax").innerHTML =
    "Ваша зарплатня становить: " + taxCalc(salaryFromUser, taxFromUser);
};

// Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
document.forms.rand_form.onsubmit = function (event) {
  event.preventDefault();
  let num1FromUser = +document.getElementById("number1").value;
  let num2FromUser = +document.getElementById("number2").value;
  document.getElementById("random-number").innerHTML =
    `Випадкове число між ${num1FromUser} i ${num2FromUser} : ` +
    randomNum(num1FromUser, num2FromUser);
};

// Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
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
document.forms.currency_form.onsubmit = function (event) {
  event.preventDefault();
  let currencyFromUser = document.getElementById("currency").value.toUpperCase();
  document.getElementById("currency-conversion").innerHTML =
    "Конвертовано: " + currencyConv(currencyFromUser);
};

// Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
document.forms.password_form.onsubmit = function (event) {
  event.preventDefault();
  let passwordLenghtFromUser = document.getElementById("password").value;
  document.getElementById("password-lenght").innerHTML =
    "Пароль: " + generatePassword(passwordLenghtFromUser);
};

// Створіть функцію, яка видаляє всі букви з речення.
document.forms.remove_form.onsubmit = function (event) {
  event.preventDefault();
  let sentenceFromUser = document.getElementById("sentence").value;
  let letterToRemoveFromUser = document.getElementById("letter-remove").value;
  document.getElementById("remove-letter-sentence").innerHTML =
    `Речення без літери ${letterToRemoveFromUser}: ` +
    removeLetter(sentenceFromUser, letterToRemoveFromUser);
};

// Створіть функцію, яка перевіряє, чи є слово паліндромом.
document.forms.palindrom_form.onsubmit = function (event) {
  event.preventDefault();
  let phraseFromUser = document.getElementById("phrase").value;
  document.getElementById("is-palindrom").innerHTML =
    `Речення паліндром? ` + isPalindrom(phraseFromUser);
};
