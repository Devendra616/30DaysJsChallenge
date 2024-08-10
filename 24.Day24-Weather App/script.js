const APIKEY = "f370bb64deec4e7fbd9101053240608";

async function getWeatherData(city) {
  // aqi = air quality data enable/disable
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${city}&aqi=no`
    );
    const result = await response.json();
    if (result.error) {
      console.log("Error:", result.error.message);
      throw new Error(result.error.message);
    }
    console.log("🚀 ~ getWeatherData ~ result:", result);

    const { temp_c, temp_f } = result.current;
    document.querySelector(
      ".weather-details .temperature"
    ).innerHTML = `${temp_c}&deg;C`;

    const { name, region, country } = result.location;
    document.querySelector(
      ".right-section .current-time"
    ).innerHTML = `${formatDate(result.current.last_updated, true)}`;

    document.querySelector(
      ".right-section .current-location"
    ).innerHTML = `${name},${region},${country}`;

    document.querySelector(
      ".right-section .condition"
    ).innerHTML = `${result.current.condition.text}`;

    document.querySelector(
      ".weather-container .weather-icon img"
    ).src = `${result.current.condition.icon}`;

    return result;
  } catch (err) {}
}

// helper function
const formatDate = (date, time = false) => {
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "2-digit",
  };
  if (time) {
    options["hour"] = "numeric";
    options["minute"] = "2-digit";
  }
  const formattedDate = new Date(date).toLocaleDateString("en-US", options);
  return formattedDate;
};

async function getForecast(city) {
  try {
    const response =
      await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${city}&days=5&aqi=no&alerts=no
`);
    const result = await response.json();
    if (result.error) {
      console.log("Error:", result.error.message);
      throw new Error(result.error.message);
    }

    const weatherForecastData = [];
    result.forecast.forecastday.forEach((data) => {
      const options = {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "2-digit",
      };
      // const date = new Date(data.date).toLocaleDateString("en-US", options);
      const date = formatDate(data.date);
      weatherForecastData.push({
        date,
        maxtemp_c: data.day.maxtemp_c,
        mintemp_c: data.day.mintemp_c,
        avgtemp_c: data.day.avgtemp_c,
        maxwind_kph: data.day.maxwind_kph,
        totalprecip_mm: data.day.totalprecip_mm,
        avghumidity: data.day.avghumidity,
        daily_chance_of_rain: data.day.daily_chance_of_rain,
        condition: data.day.condition,
      });

      const cardCount = weatherForecastData.length;
      const cardWidth = 100 / cardCount - 15; // Assuming 2% padding between cards

      if (weatherForecastData) {
        for (let day in weatherForecastData) {
          const card = document.querySelector(`#card-${parseInt(day) + 1}`);
          const weatherData = weatherForecastData[day];

          card.style.width = `${cardWidth}%`;
          card.querySelector("h3").textContent = weatherData.date;
          card.querySelector("img").src = weatherData.condition.icon;
          card.querySelector(
            ".temp .temp_high"
          ).innerHTML = `${weatherData.maxtemp_c}&deg;C`;
          card.querySelector(
            ".temp .temp_low"
          ).innerHTML = `${weatherData.mintemp_c}&deg;C`;
          card.querySelector(
            ".precipitation"
          ).innerHTML = `Precipitation: ${weatherData.totalprecip_mm} mm`;
          card.querySelector(
            ".humidity"
          ).innerHTML = `Humidity: ${weatherData.avghumidity} %`;
          card.querySelector(
            ".wind"
          ).innerHTML = `Wind: ${weatherData.avghumidity}  km/h`;
          card.querySelector("p").textContent = `${weatherData.condition.text}`;
        }
      }
    });
    console.log(
      "🚀 ~ result.forecast.forecastday.forEach ~ weatherForecastData:",
      weatherForecastData
    );
  } catch (err) {
    console.log(err);
  }
}

document.getElementById("search-btn").addEventListener("click", async (e) => {
  e.preventDefault();

  const searchContent = document
    .querySelector(".search-container input[type=search]")
    .value.trim();

  await getWeatherData(searchContent);
  await getForecast(searchContent);
});

document.addEventListener("DOMContentLoaded", async (e) => {
  const searchContent = "Lucknow";
  await getWeatherData(searchContent);
  await getForecast(searchContent);
});
