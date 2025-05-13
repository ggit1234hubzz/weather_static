import React, { useState } from 'react';
import { weatherData, getTimeBasedGreeting, isDaytime } from '../utils/weatherData';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';
import LocationSelector from './LocationSelector';

const WeatherDashboard: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState(weatherData.current.location);
  const isDay = isDaytime();
  
  // Handle location change - in a real app this would fetch new data
  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
  };
  
  const greeting = getTimeBasedGreeting();
  const containerClass = isDay 
    ? 'from-blue-50 to-blue-100' 
    : 'from-gray-900 to-gray-800';
  
  const textClass = isDay ? 'text-gray-800' : 'text-gray-100';
  
  return (
    <div className={`min-h-screen w-full bg-gradient-to-br ${containerClass} p-4 sm:p-6 md:p-8 lg:p-12 transition-colors duration-700`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className={`text-3xl md:text-4xl font-light ${textClass}`}>
              {greeting}
            </h1>
            <p className={`mt-1 ${isDay ? 'text-gray-600' : 'text-gray-400'}`}>
              Here's your weather outlook for today
            </p>
          </div>
          
          <LocationSelector 
            locations={weatherData.locations}
            selectedLocation={selectedLocation}
            onLocationChange={handleLocationChange}
          />
        </header>
        
        {/* Weather Content */}
        <div className="space-y-6">
          <CurrentWeather data={weatherData.current} isDay={isDay} />
          <WeatherForecast forecast={weatherData.forecast} isDay={isDay} />
        </div>
        
        {/* Footer */}
        <footer className={`mt-12 text-center text-sm ${isDay ? 'text-gray-500' : 'text-gray-400'}`}>
          <p>Weather data is static and for demonstration purposes only.</p>
          <p className="mt-1">© 2025 Weather Dashboard</p>
        </footer>
      </div>
    </div>
  );
};

export default WeatherDashboard;