//input
const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");
const sumbit_btn = document.querySelector(".sumbit_btn");

//output
const dayOpt = document.querySelector(".displayday");
const monthOpt = document.querySelector(".displaymonth");
const yearOpt = document.querySelector(".displayyear");
//error
const error_day = document.querySelector(".error_day");
const error_month = document.querySelector(".error_month");
const error_year = document.querySelector(".error_year");

let valid = false;
sumbit_btn.addEventListener("click", Calculateage);
dayInp.addEventListener("input", (e) => {
  if (dayInp.value > 31) {
    error_day.innerHTML = "Must be valid date";

    valid = false;
    return;
  } else {
    valid = true;
    error_day.innerHTML = "";
  }
  if (dayInp.value == 0) {
    error_day.innerHTML = "This field is required";

    valid = false;
    return;
  } else {
    error_day.innerHTML = "";
  }
});

monthInp.addEventListener("input", (e) => {
  if (monthInp.value > 12) {
    error_month.innerHTML = "Must be valid date";

    valid = false;
    return;
  } else {
    valid = true;
    error_month.innerHTML = "";
  }
  if (monthInp.value == 0) {
    error_month.innerHTML = "This field is required";

    valid = false;
    return;
  } else {
    error_month.innerHTML = "";
  }
});

yearInp.addEventListener("input", (e) => {
  if (yearInp.value > 2024) {
    error_year.innerHTML = "Must be valid date";

    valid = false;
    return;
  } else {
    valid = true;
    error_year.innerHTML = "";
  }
  if (yearInp.value == 0) {
    error_year.innerHTML = "This field is required";

    valid = false;
    return;
  } else {
    error_year.innerHTML = "";
  }
});

function Calculateage() {
  if (valid) {
    let birth = `${monthInp.value}/${dayInp.value}/${yearInp.value}`;
    console.log(birth);
    let birthObj = new Date(birth);
    let agediffmill = Date.now() - birthObj;
    let agedate = new Date(agediffmill);
    let ageYears = agedate.getUTCFullYear() - 1970;
    let ageMonth = agedate.getUTCMonth();
    let ageday = agedate.getUTCDay() - 1;

    dayOpt.innerHTML = ageday;
    monthOpt.innerHTML = ageMonth;
    yearOpt.innerHTML = ageYears;
  }
}
