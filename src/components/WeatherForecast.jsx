import React from "react";

const WeatherForecast = ({ forecast }) => {
  if (!forecast?.list) return null;

  const dailyData = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );
// flex-1 p-10 text-white bg-secondary/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10
  return (
    <div className="flex-1 p-10 text-white bg-secondary/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10">
      <h1 className="text-4xl font-bold mb-10">5 Day Forecast</h1>

      <div className="grid grid-cols-3 gap-6 ">
        {dailyData.map((day, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition "
          >
            <p className="font-semibold">
              {new Date(day.dt_txt).toLocaleDateString()}
            </p>

            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt="icon"
              className="mx-auto"
            />

            <p className="text-2xl font-bold">
              {Math.round(day.main.temp)}°C
            </p>

            <p className="capitalize text-sm">
              {day.weather[0].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;