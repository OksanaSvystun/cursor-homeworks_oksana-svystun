// Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.
const getRandomArray = (length, min, max) =>
  Array.from({ length }).map((el) =>
    Math.floor(Math.random() * (max + 1 - min) + min)
  );
document.getElementById("random-array").innerHTML = `Your array is: ${getRandomArray(10, 1, 20).join(', ')}`;

// Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getAverage = (...numbers) => {
  return numbers
    .filter((i) => {
      return Number.isInteger(i);
    })
    .reduce((av, item, _, { length }) => {
      return av + item / length;
    }, 0);
}
document.getElementById("average").innerHTML = `Average  is : ${getAverage(5, 5, 15, 10, 1.8, 25, 1.5, 30)}`;

// Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getMedian(...numbers) {
  let median;
  let numArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!Number.isInteger(numbers[i])) {
      numbers.length -= 1;
      continue;
    }
    numArr.push(numbers[i]);
  }
  numArr.sort((a, b) => {
    return a - b;
  });
  let i = numArr.length / 2;
  if (!Number.isInteger(i)) {
    i = Math.trunc(i);
    median = numArr[i];
  }
  else {
    median = (numArr[i] + numArr[i - 1]) / 2;
  }
  return median;
}
document.getElementById("median").innerHTML = `Median is ${getMedian(1.1, 23.5, 8.2, 25, 9, 654, 54, 66, 23)}`;

// Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції 
const filterEvenNumbers = (...numbers) => {
  return numbers.filter(i => {
    return i % 2 !== 0;
  })
}
document.getElementById(
  "filter-even"
).innerHTML = `Filtered from even numbers array [${filterEvenNumbers(1, 5, 6, 8, 2, 3, 6, 7)}].`;

// Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0 
const countPositiveNumbers = (...numbers) => {
  return numbers.filter((i) => i >= 0).reduce((sum, item) => {
    return sum += 1;
  }, 0);
}
document.getElementById("positive").innerHTML = `Number of positive numbers in array is ${countPositiveNumbers(2, 3, -8, 5, -2, -3, 6, 7)}`;

// Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5 
const getDividedByFive = (...numbers) => {
  return numbers.filter((i) => {
    return i % 5 === 0;
  });
}
document.getElementById("filter-divide-five").innerHTML = `Array filtered to numbers divided on five array [${getDividedByFive(1, 5, 25, 8, 20, 3, 75, 7)}].`;

// Створіть функцію  – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому
function replaceBadWords(string) {
  const badWordsArray = ['shit', 'fuck'];
  let arr = string.split(' ');
  console.log(arr)
  for (let i = 0; i < badWordsArray.length; i++) {
    if (
      arr.includes(badWordsArray[i], 0) ||
      arr.includes(badWordsArray[i].toUpperCase(), 0) ||
      arr.includes(
        badWordsArray[i].charAt(0).toUpperCase() + badWordsArray[i].slice(1),
        0
      )
    ) {
      string = string
        .replaceAll(badWordsArray[i], "***")
        .replaceAll(badWordsArray[i].toUpperCase(), "***")
        .replaceAll(
          badWordsArray[i].charAt(0).toUpperCase() + badWordsArray[i].slice(1),
          "***"
        );
    }
  } 
    return string;
}


// Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. 
function divideByThree(word) {
  return word.replaceAll(' ', '').toLowerCase().match((/[\s\S]{1,3}/g) || []).join(', ');
};

