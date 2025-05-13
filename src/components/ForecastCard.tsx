import React from 'react';
import { ForecastDay } from '../types/weather';
import WeatherIcon from './WeatherIcon';
import { Droplets } from 'lucide-react';

interface ForecastCardProps {
  data: ForecastDay;
  isDay: boolean;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ data, isDay }) => {
  const bgClass = isDay ? 'bg-white/80' : 'bg-gray-900/80';
  const textClass = isDay ? 'text-gray-800' : 'text-gray-100';
  
  return (
    <div className={`${bgClass} ${textClass} backdrop-blur-md rounded-xl p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]`}>
      <div className="flex flex-col items-center">
        <div className="text-lg font-medium mb-1">{data.day}</div>
        <div className="text-xs opacity-70 mb-3">{data.date}</div>
        
        <WeatherIcon condition={data.condition} size={38} animated />
        
        <div className="mt-3 text-lg font-medium">
          {data.highTemp}° <span className="text-sm opacity-70">{data.lowTemp}°</span>
        </div>
        
        <div className="mt-2 flex items-center">
          <Droplets size={14} className="mr-1 text-blue-500" />
          <span className="text-xs">{data.precipitation}%</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;