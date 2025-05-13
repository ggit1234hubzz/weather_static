import React from 'react';
import { ForecastDay } from '../types/weather';
import ForecastCard from './ForecastCard';

interface WeatherForecastProps {
  forecast: ForecastDay[];
  isDay: boolean;
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecast, isDay }) => {
  const containerClass = isDay ? 'bg-blue-50' : 'bg-gray-800';
  const textClass = isDay ? 'text-gray-700' : 'text-gray-100';
  
  return (
    <div className={`${containerClass} rounded-2xl p-6 shadow-lg`}>
      <h2 className={`${textClass} text-xl font-medium mb-4`}>5-Day Forecast</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {forecast.map((day, index) => (
          <ForecastCard key={index} data={day} isDay={isDay} />
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;