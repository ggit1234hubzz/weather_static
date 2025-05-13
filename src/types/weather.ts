// Weather-related TypeScript interfaces

export type WeatherCondition = 
  | 'sunny' 
  | 'partly-cloudy' 
  | 'cloudy' 
  | 'rainy' 
  | 'stormy' 
  | 'snowy'
  | 'foggy';

export interface CurrentWeatherData {
  location: string;
  temperature: number;
  feelsLike: number;
  condition: WeatherCondition;
  humidity: number; // percentage
  windSpeed: number; // mph
  windDirection: string; // N, NE, E, etc.
  uvIndex: number;
  visibility: number; // miles
  pressure: number; // inHg
  sunrise: string; // HH:MM format
  sunset: string; // HH:MM format
  updatedAt: string; // timestamp
}

export interface ForecastDay {
  day: string; // Mon, Tue, etc.
  date: string; // MM/DD format
  condition: WeatherCondition;
  highTemp: number;
  lowTemp: number;
  precipitation: number; // percentage
}

export interface LocationOption {
  id: string;
  name: string;
  country: string;
}

export interface WeatherData {
  current: CurrentWeatherData;
  forecast: ForecastDay[];
  locations: LocationOption[];
}