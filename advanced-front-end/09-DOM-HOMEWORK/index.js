const blockContainer = document.getElementById("block-container");

function randRGB() {
  const r = Math.random() * (255 - 0) + 0;
  const g = Math.random() * (255 - 0) + 0;
  const b = Math.random() * (255 - 0) + 0;
  return `rgb(${r}, ${g}, ${b})`;
}

function generateBlocks() {
  for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    blockContainer.appendChild(cell).style.backgroundColor = randRGB();
  }
}
generateBlocks();

function generateBlocksInterval() {
  const changeColorElement = document.querySelectorAll(".cell");
  setInterval(() => {
    changeColorElement.forEach((square) => {
      square.style.backgroundColor = randRGB();
    });
  }, 1000);
  blockContainer.classList.toggle("none-cursor");
}

blockContainer.onclick = generateBlocksInterval;
