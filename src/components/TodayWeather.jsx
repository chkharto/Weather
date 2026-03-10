import { Search, Sun, Moon } from "lucide-react";
import React from "react";

const Weather = ({ weather, city, getWeather, setCity, error, setError }) => {
  // bg-secondary/60 backdrop-blur-xl p-8 rounded-3xl text-white w-[320px] shadow-2xl border border-white/10

  return (
    <div className="bg-secondary/60 backdrop-blur-xl p-8 rounded-3xl text-white w-[320px] shadow-2xl border border-white/10">
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Enter city"
          className="w-full p-3 pr-12 rounded-xl bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setError("");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") getWeather();
          }}
        />

        <Search
          size={20}
          onClick={getWeather}
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-300 hover:text-white transition"
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm mt-3 text-center">{error}</p>
      )}
      {weather && (
        <div className="text-center mt-10">
          <h2 className="text-3xl font-bold">{weather.name}</h2>

          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather icon"
            className="mx-auto"
          />

          <p className="text-5xl font-bold">
            {Math.round(weather.main.temp)}°C
          </p>

          <p className="capitalize text-lg mt-2">
            {weather.weather[0].description}
          </p>

          <div className="mt-8 space-y-2 text-sm">
            <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} m/s</p>
            <p className="flex items-center gap-2 justify-center">
              <Sun size={20} /> Sunrise:{" "}
              {new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>

            <p className="flex items-center gap-2 justify-center">
              <Moon size={20} /> Sunset:{" "}
              {new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
