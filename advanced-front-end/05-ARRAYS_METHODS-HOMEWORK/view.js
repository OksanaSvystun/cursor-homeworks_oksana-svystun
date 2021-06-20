// replaceBadWords(string);
document.forms.badWords_form.onsubmit = function (event) {
  event.preventDefault();
  let phraseFromUser = document.getElementById("bad-words").value;
  document.getElementById("censored").innerHTML =
    replaceBadWords(phraseFromUser);
};

// divideByThree(word);
document.forms.didvideWords_form.onsubmit = function (event) {
  event.preventDefault();
  let wordsFromUser = document.getElementById("divide-words").value;
  document.getElementById("divided").innerHTML = divideByThree(wordsFromUser);
};
