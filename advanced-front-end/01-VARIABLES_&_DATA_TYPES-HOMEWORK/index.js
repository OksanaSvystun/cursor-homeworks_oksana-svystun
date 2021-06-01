// Input data
let bike = 15.678;
let house = 123.965;
let car = 90.2345;

// Використовуючи вбудований об'єкт Math – виведіть максимальне число
let maxPrice = Math.max(bike, house, car);
console.log(`Max price is ${maxPrice}`);

// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
let minPrice = Math.min(bike, house, car);
console.log(`Min price is ${minPrice}`);

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let sum = bike + house + car;
console.log(`Sum is ${sum}`);

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою.
let truncItemsIntSum = Math.trunc(bike) + Math.trunc(house) + Math.trunc(car);
console.log(`Truncated goods integer sum is ${truncItemsIntSum}`);

// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
let roundedToHundredsSum = Math.round(sum / 100) * 100;
console.log(`Rrounded to hundreds sum is ${roundedToHundredsSum}`);

// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let roundedDownSum = Math.floor(sum);
console.log(`Rounded dovn sum is ${roundedDownSum}`)
let roundedDownSumParity =
  roundedDownSum % 2 == 0
    ? `The parity of the sum is: True`
    : `The parity of the sum is: False`;
console.log(roundedDownSumParity);

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
let amountOfTheChange = 500 - sum;
console.log(`Amount of the rest is ${amountOfTheChange}`);

//Виведіть середнє значення цін, округлене до другого знаку після коми
let averagePrice = (sum / 3).toFixed(2);
console.log(`Average prise is ${averagePrice}`);


//Визначення ціни товару рандомно
let randomPrice = (Math.random() * 1000).toFixed(2);
console.log(`Price is ${randomPrice}`);


// Визначення знижки рандомно
let randomDiscount = Math.round(Math.random() * 100);
console.log(`Discount is ${randomDiscount}%`);


//До оплати користувачем
let customerPay = ((randomPrice * (100 - randomDiscount)) / 100).toFixed(2);
console.log(`Customer pay is ${customerPay}`);

//Собівартість
let cost = randomPrice / 2;
console.log(`Cost is ${cost}`);

//Чистий прибуток
let income = (cost - (randomPrice - customerPay)).toFixed(2);
console.log(`Pure income is ${income}`);

//Вивід в HTML
document.querySelector(".price-list").innerHTML = `
<ul>
  <li>Max price is ${maxPrice}</li>
  <li>Min price is ${minPrice}</li>
  <li>Sum is ${sum}</li>
  <li>Truncated items integer sum is ${truncItemsIntSum}</li>
  <li>Rounded to hundreds sum is ${roundedToHundredsSum}</li>
  <li>${roundedDownSumParity}</li>
  <li>Amount of the rest is ${amountOfTheChange}</li>
  <li>Average price is ${averagePrice}</li>
  <li> Exercise:
    <ul>
      <li>Price is ${randomPrice}</li>
      <li>Discount is ${randomDiscount}%</li>
      <li>Customer pay is ${customerPay}</li>
      <li>Pure income is ${income}</li>
    </ul>
  </li>
  
</ul>
`;