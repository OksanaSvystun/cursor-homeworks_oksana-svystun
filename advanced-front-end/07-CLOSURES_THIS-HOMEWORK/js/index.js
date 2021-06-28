// Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this
function getMyTaxes(salary) {
  return(salary * this.tax);
}

// Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this
function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}

// Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this
function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}

// Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary. profit = salary - taxes; 
function getMySalary(country) {
  const getSalary = setInterval(() => {
    const salary = Math.floor(Math.random() * 2001) + 1500;
    const taxes = +getMyTaxes.call(country, salary).toFixed(2);
    const profit = +(salary - taxes).toFixed(2);
    // console.log({ salary, taxes, profit });
    return console.log({ salary, taxes, profit });
  }, 10000);
}

// function empty(input) {
//   if (!input.length || input.trim()=='') return "Ви нічого не вказали";
// }