async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "f6a6d5c966242e7ebab42a8c059da9a3"; // 🔑 Replace this

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    const result = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
      <p>🌥️ Weather: ${data.weather[0].description}</p>
    `;

    document.getElementById("result").innerHTML = result;

  } catch (error) {
    document.getElementById("result").innerHTML = "❌ City not found. Try again!";
  }
}
