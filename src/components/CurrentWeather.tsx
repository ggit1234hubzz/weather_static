import React from 'react';
import { CurrentWeatherData } from '../types/weather';
import WeatherIcon from './WeatherIcon';
import { Wind, Droplets, Sun, Eye } from 'lucide-react';

interface CurrentWeatherProps {
  data: CurrentWeatherData;
  isDay: boolean;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data, isDay }) => {
  const timeClass = isDay ? 'from-blue-400 to-blue-600' : 'from-indigo-900 to-blue-950';
  
  return (
    <div className={`rounded-2xl p-6 bg-gradient-to-br ${timeClass} text-white shadow-lg overflow-hidden relative`}>
      {/* Background decorative elements */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-lg"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {/* Left section - Main temperature display */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-light mb-6">{data.location}</h2>
          
          <div className="flex items-center mb-3">
            <WeatherIcon condition={data.condition} size={64} animated />
            <div className="ml-4">
              <div className="text-6xl font-extralight">{data.temperature}°</div>
              <div className="text-blue-100 mt-1">Feels like {data.feelsLike}°</div>
            </div>
          </div>
          
          <div className="capitalize text-xl text-blue-100 mb-2">
            {data.condition.replace('-', ' ')}
          </div>
          
          <div className="text-sm text-blue-100 mt-auto">
            {data.updatedAt}
          </div>
        </div>
        
        {/* Right section - Weather details */}
        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
              <div className="flex items-center text-blue-100 mb-1">
                <Wind size={16} className="mr-2" />
                <span className="text-sm">Wind</span>
              </div>
              <div className="text-xl font-medium">
                {data.windSpeed} mph
              </div>
              <div className="text-sm text-blue-100">
                {data.windDirection}
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
              <div className="flex items-center text-blue-100 mb-1">
                <Droplets size={16} className="mr-2" />
                <span className="text-sm">Humidity</span>
              </div>
              <div className="text-xl font-medium">
                {data.humidity}%
              </div>
              <div className="text-sm text-blue-100">
                {data.humidity > 70 ? 'High' : data.humidity > 30 ? 'Normal' : 'Low'}
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
              <div className="flex items-center text-blue-100 mb-1">
                <Sun size={16} className="mr-2" />
                <span className="text-sm">UV Index</span>
              </div>
              <div className="text-xl font-medium">
                {data.uvIndex}
              </div>
              <div className="text-sm text-blue-100">
                {data.uvIndex >= 8 ? 'Very High' : data.uvIndex >= 6 ? 'High' : 
                  data.uvIndex >= 3 ? 'Moderate' : 'Low'}
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
              <div className="flex items-center text-blue-100 mb-1">
                <Eye size={16} className="mr-2" />
                <span className="text-sm">Visibility</span>
              </div>
              <div className="text-xl font-medium">
                {data.visibility} mi
              </div>
              <div className="text-sm text-blue-100">
                {data.visibility >= 8 ? 'Clear' : data.visibility >= 3 ? 'Moderate' : 'Poor'}
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-between text-blue-100 text-sm">
            <div>
              <span className="block">Sunrise</span>
              <span className="block text-white font-medium">{data.sunrise}</span>
            </div>
            
            <div className="text-right">
              <span className="block">Sunset</span>
              <span className="block text-white font-medium">{data.sunset}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;