// Weathercard.js
import React from "react";

// const Weathercard = ({ details }) => {
//   // Assuming details contains properties like 'name', 'temperature', etc.
//   console.log(details);
//   return (
//     <div>
//       <h2>{details.name}</h2>
//       {/* Render other weather details here */}
//     </div>
//   );
// };
const WeatherCard = ({ details }) => {
  const { location, current } = details;

  return (
    <div className="morph-box lg:flex-col text-emerald-50 rounded-lg shadow-md max-w-md mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-2">
        {location.name}, {location.region}
      </h2>

      <div className="flex flex-col items-center mb-8">
        <div className="mb-2">
          <p className="text-lg font-bold">{current.temp_c}°C</p>
          <p className="text-sm text-gray-500">
            Feels like {current.feelslike_c}°C
          </p>
        </div>
        <img
          src={`http:${current.condition.icon}`}
          alt={current.condition.text}
          className="w-16 h-16"
        />
      </div>

      <div className="flex flex-col items-center mb-4">
        <div className="mb-2">
          <p className="text-sm text-gray-500">Humidity: {current.humidity}%</p>
          <p className="text-sm text-gray-500">
            Wind: {current.wind_kph} km/h {current.wind_dir}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            Pressure: {current.pressure_mb} mb
          </p>
          <p className="text-sm text-gray-500">UV Index: {current.uv}</p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs text-gray-500">
          Last Updated: {current.last_updated}
        </p>
      </div>
    </div>
  );
};
export default WeatherCard;
