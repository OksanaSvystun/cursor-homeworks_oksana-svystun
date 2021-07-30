import _ from "lodash";
import "./style.css";

import {
  randomPrice,
  sumOfUserNumbers,
  getMaxDigit,
  addMark,
  getRandomArray,
  calculateWordLetters,
  ukraine,
  getMyTaxes,
  Student,
  ostap,
  randRGB,
} from "./hw";


console.log(`HW1: ${randomPrice}`);
console.log(`HW2: ${sumOfUserNumbers(2, 10)}`);
console.log(`HW3: ${getMaxDigit('51846516')}`);
console.log(`HW4: ${addMark()}`);
console.log(`HW5: ${getRandomArray(5, 6, 16)}`);
console.log(`HW6: ${calculateWordLetters('Ohana')}`);
console.log(`HW7: ${getMyTaxes.call(ukraine, 100)}`);
console.log(`HW8: ${ostap.getInfo()}`);
console.log(`HW9: ${randRGB()}`);