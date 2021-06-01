let bike = 15.678;
let house = 123.965;
let car = 90.2345;

let maxPrice = Math.max(bike, house, car);
console.log(`Max price is ${maxPrice}`);

let minPrice = Math.min(bike, house, car);
console.log(`Min price is ${minPrice}`);

let sum = bike + house + car;
console.log(`Sum is ${sum}`);

let truncItemsIntSum = Math.trunc(bike) + Math.trunc(house) + Math.trunc(car);
console.log(`Truncated goods integer sum is ${truncItemsIntSum}`);

let roundedToHundredsSum = Math.round(sum / 100) * 100;
console.log(`Rrounded to hundreds sum is ${roundedToHundredsSum}`);

let roundedDownSum = Math.floor(sum);
console.log(`Rounded dovn sum is ${roundedDownSum}`)
let roundedDownSumParity =
  roundedDownSum % 2 == 0
    ? `The parity of the sum is: True`
    : `The parity of the sum is: False`;
console.log(roundedDownSumParity);

let amountOfTheChange = 500 - sum;
console.log(`Amount of the rest is ${amountOfTheChange}`);

let averagePrice = (sum / 3).toFixed(2);
console.log(`Average prise is ${averagePrice}`);



let randomPrice = (Math.random() * 1000).toFixed(2);
console.log(`Price is ${randomPrice}`);

let randomDiscount = Math.round(Math.random() * 100);
console.log(`Discount is ${randomDiscount}%`);

let customerPay = ((randomPrice * (100 - randomDiscount)) / 100).toFixed(2);
console.log(`Customer pay is ${customerPay}`);

let cost = randomPrice / 2;
console.log(`Cost is ${cost}`);

let income = (cost - (randomPrice - customerPay)).toFixed(2);
console.log(`Pure income is ${income}`);


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