let target = "mumbai";


const temperatureField = document.getElementById("temp");
const locationField = document.getElementById("location");
const timeField = document.getElementById("time");
const conditionField = document.getElementById("condition");
const searchField = document.querySelector(".search_area");
const form = document.getElementById("weatherForm");


form.addEventListener("submit", searchForLocation);


const fetchResults = async (targetLocation) => {
  let url = `https://api.weatherapi.com/v1/current.json?key=cd9a136d17bb450c82c150308251806&q=${targetLocation}&aqi=no`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;

    updateDetails(temp, locationName, time, condition);
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Location not found. Please try again.");
  }
};


function updateDetails(temp, locationName, time, condition) {
  const [date, clock] = time.split(" ");
  const day = getDayName(new Date(date).getDay());

  temperatureField.innerText = `${temp}°C`;
  locationField.innerText = locationName;
  timeField.innerText = `${day}, ${date} ${clock}`;
  conditionField.innerText = condition;
  const lowerCaseCondition = condition.toLowerCase();

    if (lowerCaseCondition.includes("rain")) {
        document.body.style.backgroundImage = "url('rainy2.jpg')";
    } else if (lowerCaseCondition.includes("cloudy 2")) {
        document.body.style.backgroundImage = "url('cloud.jpg')";
    } else if (lowerCaseCondition.includes("clear") || lowerCaseCondition.includes("sunny")) {
        document.body.style.backgroundImage = "url('sunny 2.jpg')";
    } else if (lowerCaseCondition.includes("snow")) {
        document.body.style.backgroundImage = "url('snow 2.jpg')";
    } else if (lowerCaseCondition.includes("mist") || lowerCaseCondition.includes("fog")) {
        document.body.style.backgroundImage = "url('mist.jpg')";
    } else {
        document.body.style.backgroundImage = "url('clear.jpg')"; 
    }
}


function getDayName(dayNum) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[dayNum];
}


function searchForLocation(e) {
  e.preventDefault();
  const userInput = searchField.value.trim();
  if (userInput !== "") {
    target = userInput;
    fetchResults(target);
  }
}


fetchResults(target);
