const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

// Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

function addPair(name) {
  const studentsPair = [
    [name[0], " " + name[2]],
    [name[1], " " + name[3]],
    [name[4], " " + name[5]],
  ];
  return studentsPair;
}
// Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

function addProject(pair, project) {
  let pairProject = [];
  for (let i = 0; i < project.length; i++){
    pairProject.push([pair[i].join(' i '), ' '+project[i]]);
  }
  return pairProject;
}

// Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
function addMark(name, mark) {
  let studentMark = [];
  for (let i = 0; i < mark.length; i++){
    studentMark.push([name[i], " " + mark[i]]);
  }
  return studentMark;
}

// Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]
function addPairMark(pair) {
  let pairMark = [];
  for (let i = 0; i < pair.length; i++){
    pairMark.push([pair[i], " " + Math.floor(Math.random() * 5 + 1)]);
  }
  return pairMark;
}

const pairStudent = addPair(students);


document.getElementById(
  "task1"
).innerHTML = `<em>Розділіть студентів на пари(хлопець + дівчина) для рoботи над проєктом:</em> <br> ${addPair(
  students
  ).join(`<br>`)}`;


document.getElementById(
  "task2"
).innerHTML = `<em>Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати:</em>  <br> 
${addProject(addPair(students), themes).join(`<br>`)}`;


document.getElementById(
  "task3"
).innerHTML = `<em>Зіставте оцінки зі студентом:</em> <br> ${addMark(students, marks).join(`<br>`)}`;


  document.getElementById(
    "task4"
  ).innerHTML = `<em>Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт:</em>  <br> ${addPairMark(addProject(addPair(students), themes)).join(`<br>`)}`;

// console.log(addPair(students));
// console.log(addProject(addPair(students), themes));
// console.log(addMark(students, marks));
// console.log(addPairMark(addProject(addPair(students), themes)));