async function getRandomChinese(lenght) {
  let i = 0;
  let chineseeString = "";
  while (i < lenght) {
    const chineseeSymbol = new Promise((resolve, reject) => {
      setTimeout(() => {
        const code = Date.now().toString().slice(-5);
        const symbol = String.fromCharCode(code);
        resolve(symbol);
        i++;
      }, 50);
    });
    chineseeString = chineseeString + (await chineseeSymbol);
  }
  return chineseeString;
}