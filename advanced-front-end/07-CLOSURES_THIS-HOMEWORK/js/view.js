function stringToObject(country) {
  if (country == "ukraine") return ukraine;
  if (country == "latvia") return latvia;
  if (country == "latvia") return latvia;
}

document.forms.tax_form.onsubmit = function (event) {
  event.preventDefault();
  const countryFromUser = document.getElementById("country-1").value;
  const salaryFromUser = document.getElementById("salary-1").value;
  document.getElementById("tax").innerHTML = getMyTaxes.call(
    stringToObject(countryFromUser),
    salaryFromUser
  );
};

document.forms.average_tax_form.onsubmit = function (event) {
  event.preventDefault();
  const countryFromUser = document.getElementById("country-2").value;
  document.getElementById("average-tax").innerHTML = getMiddleTaxes.call(
    stringToObject(countryFromUser)
  );
};

document.forms.all_tax_form.onsubmit = function (event) {
  event.preventDefault();
  const countryFromUser = document.getElementById("country-3").value;
  document.getElementById("all-tax").innerHTML = getTotalTaxes.call(
    stringToObject(countryFromUser)
  );
};

document.forms.tax_info_form.onsubmit = function (event) {
  event.preventDefault();
  const countryFromUser = document.getElementById("country-4").value;
  document.getElementById("tax-info").innerHTML = 'Перевірте консоль'
  console.log(getMySalary(
   stringToObject(countryFromUser)
 ))
};