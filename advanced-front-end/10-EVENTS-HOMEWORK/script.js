const keys = ["KeyF", "KeyG", "KeyH", "KeyJ", "KeyK"];
const clickKeys = document.querySelectorAll("button");
const sound = document.querySelectorAll("audio");

function clickPlay() {
  clickKeys.forEach(el => el.onclick = function () {
    sound.forEach(s => {
      if (s.id.toLowerCase() === el.id) {
        s.play();
      }
    })
    })
}

function clickSound() {
  document.addEventListener("keydown", function (event) {
    keys.forEach(el => {
      if (el === event.code) {
        sound.forEach((s) => {
          if (`Key${s.id}` === `${el}`) {
            s.play();
          }
        });
      }
    })
  })

  clickPlay();
}
clickSound();

