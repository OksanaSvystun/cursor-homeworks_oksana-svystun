//getSubjects
document.getElementById("subjects").innerHTML = `Список предметів для студента ${students[0].name} <br> ${getSubjects(students[0]).join(', ').replaceAll('_', ' ')}`;


// getAverageMark
document.getElementById('average').innerHTML = `Середня оцінка з усіх предметів: ${getAverageMark(students[0])}`;


// getStudentInfo
document.getElementById('info').innerHTML = `Інформація про студента: <br> ${getStudentInfo(students[0]).join(" || ")}`;


// getStudentsNames;
document.getElementById('names').innerHTML = `Cтуденти в алфавітному порядку: ${getStudentsNames(students).join(', ')}`;


// getBestStudent
document.getElementById("best").innerHTML = `Кращий студент: ${getBestStudent(students)}`;


// calculateWordLetters
document.forms.count_form.onsubmit = function (event) {
  event.preventDefault();
  const phraseFromUser = document.getElementById("count-letter").value;
  document.getElementById("counted").innerHTML =
    calculateWordLetters(phraseFromUser).join(" || ");
}