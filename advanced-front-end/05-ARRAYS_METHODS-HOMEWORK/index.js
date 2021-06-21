// Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.
function getRandomArray(lenght, min, max) {
  let randomNumberArray = [];
  for (let i = 0; i < lenght; i++){
    randomNumberArray.push([Math.floor(Math.random() * (max + 1 - min) + min)]);
  }
  return randomNumberArray.join(', ');
};
document.getElementById("random-array").innerHTML = `Your array is: ${getRandomArray(10, 1, 20)}`;

// Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getAverage(...numbers) {
  let sum = 0;
  let numLength = numbers.length;
  for (let i = 0; i < numbers.length; i++) {
    if (!Number.isInteger(numbers[i])) {
      numLength -= 1;
      continue;
    }
    sum += numbers[i];
  }
  return `In array [${numbers}] average is ${sum / numLength}. Not integer numbers was ignored`;
}
document.getElementById("average").innerHTML = getAverage(5, 5, 15, 10, 1.8, 25, 1.5, 30);

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
  return `In array [${numbers}] which is sorted to [${numArr}] median is ${median}. Not integer numbers was ignored`;
}
document.getElementById("median").innerHTML = getMedian(1.1, 23.5, 8.2, 25, 9, 654, 54, 66, 23);

// Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції 
function filterEvenNumbers(...numbers) {
  const newArr = numbers.filter(i => {
    return i % 2 !== 0;
  })
  return `Array [${numbers}] filtered to even numbers array [${newArr}].`;
}
document.getElementById("filter-even").innerHTML = filterEvenNumbers(1, 5, 6, 8, 2, 3, 6, 7);

// Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0 
function countPositiveNumbers(...numbers) {
  const newArr = numbers.filter(i => i >= 0);
  let sum = 0;
  for (i in newArr) {
    sum += 1;
  }
  return `Number of positive numbers in array [${numbers}] is ${sum}`;
}
document.getElementById("positive").innerHTML = countPositiveNumbers(2, 3, -8, 5, -2, -3, 6, 7);

// Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5 
function getDividedByFive(...numbers) {
  const newArr = numbers.filter((i) => {
    return i % 5 === 0;
  });
  return `Array [${numbers}] filtered to numbers divided on five array [${newArr}].`;
}
document.getElementById("filter-divide-five").innerHTML = getDividedByFive(1, 5, 25, 8, 20, 3, 75, 7);

// Створіть функцію  – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому
function replaceBadWords(string) {
  const badWordsArray = ['shit', 'fuck'];
  let arr = string.split(' ');
  console.log(arr)
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < badWordsArray.length; j++){
      if (
        arr[i].includes(badWordsArray[j], 0) ||
        arr[i].includes(badWordsArray[j].toUpperCase(), 0) ||
        arr[i].includes(badWordsArray[j].charAt(0).toUpperCase() + badWordsArray[j].slice(1), 0)
      ) {
        arr[i] = arr[i].replace(badWordsArray[j], "***");
        arr[i] = arr[i].replace(badWordsArray[j].toUpperCase(), "***");
        arr[i] = arr[i].replace(
          badWordsArray[j].charAt(0).toUpperCase() + badWordsArray[j].slice(1),
          "***"
        );
      }
    }
  }
  
  return `<br>Censored phrase: ${arr.join(" ")}`;
}


// Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. 
function divideByThree(word) {
  // const dividedWords = [];
  // let newWord = word.replaceAll(' ', '').toLowerCase();
  // for (var i = 0; i < newWord.length; i += 3) {
  //   dividedWords.push(newWord.substring(i, i + 3));
  // }
  return word.replaceAll(' ', '').toLowerCase().match((/[\s\S]{1,3}/g) || []).join(', ');
};

