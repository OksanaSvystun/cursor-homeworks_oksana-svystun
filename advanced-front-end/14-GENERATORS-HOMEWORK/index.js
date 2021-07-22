function* createIdGenerator() {
  let id = 1;
  while (id) {
    yield id;
    id++;
  }
}
const idGenerator = createIdGenerator();

function* newFontGenerator(fontSize) {
  while (true) {
    let arg = yield fontSize;
    if (arg === "up") {
      fontSize = fontSize + 2;
    } else if (arg === "down") {
      fontSize = fontSize - 2;
    }
  }
}
const fontGenerator = newFontGenerator(14); 
