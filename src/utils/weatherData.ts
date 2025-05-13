import { WeatherData } from '../types/weather';

// Simulated weather data for static display
export const weatherData: WeatherData = {
  current: {
    location: "San Francisco, CA",
    temperature: 68,
    feelsLike: 66,
    condition: "partly-cloudy",
    humidity: 65,
    windSpeed: 8,
    windDirection: "NW",
    uvIndex: 6,
    visibility: 9.5,
    pressure: 30.12,
    sunrise: "06:28",
    sunset: "19:45",
    updatedAt: "Last updated at 3:45 PM"
  },
  forecast: [
    {
      day: "Today",
      date: "06/15",
      condition: "partly-cloudy",
      highTemp: 70,
      lowTemp: 58,
      precipitation: 10
    },
    {
      day: "Fri",
      date: "06/16",
      condition: "sunny",
      highTemp: 75,
      lowTemp: 60,
      precipitation: 0
    },
    {
      day: "Sat",
      date: "06/17",
      condition: "sunny",
      highTemp: 78,
      lowTemp: 61,
      precipitation: 0
    },
    {
      day: "Sun",
      date: "06/18",
      condition: "partly-cloudy",
      highTemp: 72,
      lowTemp: 59,
      precipitation: 20
    },
    {
      day: "Mon",
      date: "06/19",
      condition: "rainy",
      highTemp: 65,
      lowTemp: 57,
      precipitation: 80
    }
  ],
  locations: [
    { id: "sf", name: "San Francisco", country: "USA" },
    { id: "nyc", name: "New York", country: "USA" },
    { id: "ldn", name: "London", country: "UK" },
    { id: "tky", name: "Tokyo", country: "Japan" },
    { id: "syd", name: "Sydney", country: "Australia" }
  ]
};

// Function to get appropriate greeting based on time of day
export function getTimeBasedGreeting(): string {
  const hour = new Date().getHours();
  
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

// Function to determine if it's daytime (for UI theming)
export function isDaytime(): boolean {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 20;
}