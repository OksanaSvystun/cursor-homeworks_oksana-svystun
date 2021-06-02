// Input data
const bikePrice = 15.678;
const housePrice = 123.965;
const carPrice = 90.2345;
const customerMoney = 500;

// Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxPrice = Math.max(bikePrice, housePrice, carPrice);
console.log(`Max price is ${maxPrice}`);


// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minPrice = Math.min(bikePrice, housePrice, carPrice);
console.log(`Min price is ${minPrice}`);


// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const sum = bikePrice + housePrice + carPrice;
console.log(`Sum is ${sum}`);


// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою.
const truncItemsIntSum = Math.trunc(bikePrice) + Math.trunc(housePrice) + Math.trunc(carPrice);
console.log(`Truncated goods integer sum is ${truncItemsIntSum}`);


// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
const roundedToHundredsSum = Math.round(sum / 100) * 100;
console.log(`Rrounded to hundreds sum is ${roundedToHundredsSum}`);


// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const roundedDownSum = Math.floor(sum);
console.log(`Rounded dovn sum is ${roundedDownSum}`);

const roundedDownSumParity = roundedDownSum % 2 == 0;
console.log(roundedDownSumParity);

const roundedDownSumParityResult = roundedDownSumParity
  ? `The parity of the sum is: True`
  : `The parity of the sum is: False`;
console.log(roundedDownSumParityResult);


// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const amountOfTheChange = customerMoney - sum;
console.log(`Amount of the rest is ${amountOfTheChange}`);


//Виведіть середнє значення цін, округлене до другого знаку після коми
const averagePrice = +(sum / 3).toFixed(2);
console.log(`Average prise is ${averagePrice}`);


// Задача
//Визначення ціни товару рандомно
const randomPrice = +(Math.random() * 1000).toFixed(2);
console.log(`Price is ${randomPrice}`);

// Визначення знижки рандомно
const randomDiscount = Math.round(Math.random() * 100);
console.log(`Discount is ${randomDiscount}%`);

//До оплати користувачем
const customerPay = +((randomPrice * (100 - randomDiscount)) / 100).toFixed(2);
console.log(`Customer pay is ${customerPay}`);

//Собівартість
const cost = randomPrice / 2;
console.log(`Cost is ${cost}`);

//Чистий прибуток
const income = +(cost - (randomPrice - customerPay)).toFixed(2);
console.log(`Pure income is ${income}`);

//Вивід в HTML
document.querySelector(".price-list").innerHTML = `
<ul>
  <li>Max price is ${maxPrice}</li>
  <li>Min price is ${minPrice}</li>
  <li>Sum is ${sum}</li>
  <li>Truncated items integer sum is ${truncItemsIntSum}</li>
  <li>Rounded to hundreds sum is ${roundedToHundredsSum}</li>
  <li>${roundedDownSumParityResult}</li>
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