console.log("Hello I'm Working");
window.addEventListener('load', ()=> showHeaderCity());

function dayName(dayNum) {
  switch (dayNum) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  return day;
}
let todayNumber = new Date().getDay();

const citiesData = [
  {
    name: "Hebron",
    temps: [
      { day: "Today", high: 36, low: 24, condition: "Sunny" },
      { day: "Tomorrow", high: 35, low: 23, condition: "Cloudy" },
      { day: dayName((todayNumber + 2) % 7), high: 34, low: 22, condition: "Sunny" },
      { day: dayName((todayNumber + 3) % 7), high: 33, low: 21, condition: "Rainy" }
    ]
  },
  {
    name: "Jerusalem",
    temps: [
      { day: "Today", high: 30, low: 22, condition: "Sunny" },
      { day: "Tomorrow", high: 29, low: 21, condition: "Cloudy" },
      { day: dayName((todayNumber + 2) % 7), high: 28, low: 20, condition: "Rainy" },
      { day: dayName((todayNumber + 3) % 7), high: 27, low: 19, condition: "Cloudy" }
    ]
  },
  {
    name: "Gaza",
    temps: [
      { day: "Today", high: 28, low: 20, condition: "Cloudy" },
      { day: "Tomorrow", high: 27, low: 19, condition: "Sunny" },
      { day: dayName((todayNumber + 2) % 7), high: 26, low: 18, condition: "Cloudy" },
      { day: dayName((todayNumber + 3) % 7), high: 25, low: 17, condition: "Rainy" }
    ]
  }
];

let cityInNav = document.querySelectorAll('.city-Item a')
for (let i = 0; i < cityInNav.length; i++) {
  cityInNav[i].textContent = citiesData[i].name
}

function showHeaderCity() {
  let cityShown = document.getElementById('city-shown')
  let citySelected  = document.querySelector('.active a')
  let cityKey = Number(citySelected.getAttribute('dataCity'))
  cityShown.textContent = citySelected.textContent
  setCardDetails(cityKey)
}

function selectCity(element) {
  let cityItems = document.getElementsByClassName('city-Item')
  for (let i = 0; i < cityItems.length; i++) {
    if (cityItems[i].classList.contains('active')) {
      cityItems[i].classList.remove('active')
      break
    }
  }
  element.closest('.city-Item').classList.add('active')
  showHeaderCity();
  let dataCity = Number(element.getAttribute('dataCity'))
  setCardDetails(dataCity)
}

function setCardDetails(cityIndex) {
  let highestDegrees = document.getElementsByClassName('highest')
  let lowestDegrees = document.getElementsByClassName('lowest')
  for (let i = 0; i < highestDegrees.length; i++) {
    highestDegrees[i].textContent = citiesData[cityIndex].temps[i].high
    lowestDegrees[i].textContent = citiesData[cityIndex].temps[i].low
  }
  handelForecastCondition(cityIndex)
}

function handelForecastCondition(cityIndex) {
  let conditionShown =document.getElementsByClassName('condition')
  let dayOnCard = document.getElementsByClassName('day')
  let conditionImg =document.getElementsByClassName('forecast-img')
  for (let i = 0; i < dayOnCard.length; i++) {
    dayOnCard[i].textContent = citiesData[cityIndex].temps[i].day
    conditionShown[i].textContent = citiesData[cityIndex].temps[i].condition
  }
  for (let i = 0; i < conditionImg.length; i++) {
    if(conditionShown[i].textContent == "Sunny"){
      conditionImg[i].src="./assets/some_sun.png"
    }
    else if(conditionShown[i].textContent == "Cloudy"){
      conditionImg[i].src="./assets/some_clouds.png"
    }
    else{
      conditionImg[i].src="./assets/some_rain.png"
    }
  }
}

function acceptCookies() {
  let cookiesSection = document.getElementById("cookie-sec");
  cookiesSection.remove();
}

function changeDegreeSystem(element) {
  let displayDegree = document.getElementsByClassName('degree');
  for (let i = 0; i < displayDegree.length; i++) {
    if (!displayDegree[i].dataset.celsius) {
      displayDegree[i].dataset.celsius = parseInt(displayDegree[i].textContent);
    }
    if (element.value == 'fahrenheit') {
      let celValue = parseInt(displayDegree[i].dataset.celsius);
      let fahDegree = Math.round(celValue * 9/5 + 32);
      displayDegree[i].textContent = fahDegree;
    }
    else {
      displayDegree[i].textContent = displayDegree[i].dataset.celsius;
    }
  }
}