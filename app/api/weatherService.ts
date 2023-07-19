import axios from "axios"

const API_KEY = "451aa035f6999a1224e5b4d3884b750f"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

export const getWeatherData = async (city: string) => {
  const weatherType = "weather"; // Endpoint to get current weather data
  const searchParams = { q: city, units: "metric", appid: API_KEY };

  try {
    const response = await axios.get(`${BASE_URL}/${weatherType}`, {
      params: searchParams,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};


