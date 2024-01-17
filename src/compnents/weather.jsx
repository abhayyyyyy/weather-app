import { useState, useEffect } from "react";
import Weathercard from "./weathecard";

export default function Weather() {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [place, setPlace] = useState("");
  const [details, setDetails] = useState(null);

  const APIURL =
    "http://api.weatherapi.com/v1/current.json?key=878a0b0f7b804a7796110104241701&q=";

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setPlace(value);
  };

  // console.log(place);

  const handleInputFocus = () => {
    setIsFocused(true);
  };
  const handleClick = async () => {
    try {
      const response = await fetch(`${APIURL}${place}`);
      const data = await response.json();
      console.log(data);
      setDetails(data);
      console.log(typeof details);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
        <div className="text-center">
          <img
            className="h-24 mx-auto"
            src="https://www.pngall.com/wp-content/uploads/11/Weather-No-Background.png"
            alt=""
          />
          <h1 className="mt-4 text-emerald-50 text-3xl font-bold tracking-tight  sm:text-5xl md-6">
            Weather App
          </h1>
          <div className="relative mb-6 max-w-[60%] mx-auto">
            <label
              className={`absolute left-2 transition-all ${
                inputValue || isFocused
                  ? "top-0 text-sm text-emerald-50"
                  : "top-1/2 translate-y-[-10%] text-base text-gray-400"
              }`}
            >
              City
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 h-8 mt-6 "
            />
          </div>
          <p className="mt-6 mb-0 text-base leading-7 text-emerald-50">
            Sunrise to sunset, our weather app paints forecasts in style!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className=" mt-0 mb-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleClick}
            >
              Search
            </a>
          </div>
          {details != null ? (
            <div>
              <Weathercard details={details} />
            </div>
          ) : (
            <div>
              <h2 className="text-emerald-50">No City found</h2>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
