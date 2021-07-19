document.forms.chinesee_form.onsubmit = function (event) {
  event.preventDefault();
  let lenghtFromUser = document.getElementById("number-of-symbols").value;
  
  getRandomChinese(lenghtFromUser).then((result) => {
      document.getElementById("symbols").innerHTML = "Результат: " + result;
    });
};
