//getSubjects
document.getElementById("subjects").innerHTML = getSubjects(students[0]);
// getAverageMark
document.getElementById('average').innerHTML = `Середня оцінка з усіх предметів: ${getAverageMark(students[0])}`;
// getStudentInfo
document.getElementById('info').innerHTML = `Інформація про студента: <br> ${getStudentInfo(students[0])}`
// getBestStudent
document.getElementById("best").innerHTML =  `Кращий студент: ${getBestStudent(students)}`;
// calculateWordLetters
document.forms.count_form.onsubmit = function (event) {
  event.preventDefault();
  const phraseFromUser = document.getElementById("count-letter").value;
  document.getElementById("counted").innerHTML =
    calculateWordLetters(phraseFromUser);
}