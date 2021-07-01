const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function randRGB() {
  const r = Math.random() * (255 - 0) + 0;
  const g = Math.random() * (255 - 0) + 0;
  const b = Math.random() * (255 - 0) + 0;
  return `rgb(${r}, ${g}, ${b})`;
}

function generateBlocks() {
  for (let x = 0; x < canvas.clientWidth; x = x + canvas.clientWidth / 5) {
    for (let y = 0; y < canvas.clientHeight; y = y + canvas.clientHeight / 5) {
      ctx.fillRect(x, y, canvas.clientWidth / 5, canvas.clientHeight / 5);
      ctx.fillStyle = randRGB();
    }
  }
}
generateBlocks();

function generateBlocksInterval() {
  setInterval(() => generateBlocks(), 1000);
  canvas.classList.toggle("none-cursor");
}
canvas.onclick = generateBlocksInterval;
