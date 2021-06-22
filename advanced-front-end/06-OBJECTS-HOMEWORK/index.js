// Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл 
function getSubjects(student) {
  const studentSubjects = Object.keys(student.subjects).map(item => {
    return item[0].toUpperCase() + item.slice(1);
  });
  return `Список предметів для студента ${student.name} <br> ${studentSubjects.join(', ').replaceAll('_', ' ')}`;
};


// Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :) 
function getAverageMark(student) {
  const studentAverageMark = Object.entries(student.subjects).flat(2).filter(item => typeof item === 'number');
  let sum = 0;
  for (let i in studentAverageMark) {
    sum += studentAverageMark[i];
  }
  const result = +(sum / studentAverageMark.length).toFixed(2);
  return result;
};


// Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка. 
function getStudentInfo(student) {
  const { name, course} = student;
  const studentInfo = { name, course };
  studentInfo.averageMark = getAverageMark(student);
  return Object.entries(studentInfo).join(" || ");
};


// Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку. 
const getStudentsNames = (students) => students.map(student => student.name).sort();

// Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки. 
function getBestStudent(students) {
  let bestMark = 0;
  let bestStudent;
  for (let i = 0; i < students.length; i++) {
    if (bestMark < getAverageMark(students[i])) {
      bestMark = getAverageMark(students[i]);
      bestStudent = students[i].name;
    }
  }
  return bestStudent;
};

// Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень. 
function calculateWordLetters(userPhrase) {
  if (!userPhrase.length || userPhrase.trim()=='') return "Ви нічого не вказали";
  const word = userPhrase.replaceAll(' ', '').toLowerCase();
  const counter = {};
  for (let i = 0; i < word.length; i++) {
    counter[word[i]] ? (counter[word[i]] += 1) : (counter[word[i]] = 1);
  }
  console.log(counter);
  return Object.entries(counter).join(' || ');
};