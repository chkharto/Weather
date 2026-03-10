import { useState, useEffect } from "react";
import "./App.css";
import Weather from "./components/TodayWeather";
import WeatherForecast from "./components/WeatherForecast";
import { fetchForecast, fetchWeather } from "./services/WeatherService";

function App() {
  const [forecast, setForecast] = useState(null);
  const [weather, setWeather] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    searchCity("Tbilisi");    
  }, []);

  const searchCity = async (city) => {
    try {
      setError("");

      const weatherData = await fetchWeather(city);

      if (weatherData.cod === "404") {
        setError("City not found");
        setWeather(null);
        setForecast(null);
        return;
      }

      const forecastData = await fetchForecast(city);

      setWeather(weatherData);
      setForecast(forecastData);
    } catch (error) {
      setError("Something went wrong");
      setWeather(null);
      setForecast(null);
    }
  };

  const handleSearch = () => {
    if (!inputValue) return;
    searchCity(inputValue);
    console.log(weather);

  };

  return (
    <div className={`min-h-screen bg-primary flex items-center justify-center p-10`}>
      <div className={`w-full max-w-7xl flex gap-8 ${!weather ? "flex-col items-center" : ""}`}>
        <Weather
          weather={weather}
          city={inputValue}
          getWeather={handleSearch}
          setCity={setInputValue}
          error={error}
          setError={setError}
        />

        <WeatherForecast forecast={forecast} />
      </div>
    </div>
  );
}

export default App;
