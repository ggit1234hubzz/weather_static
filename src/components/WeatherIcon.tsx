import React from 'react';
import { WeatherCondition } from '../types/weather';
import { 
  Sun, 
  Cloud, 
  CloudSun, 
  CloudRain, 
  CloudLightning, 
  Snowflake,
  CloudFog
} from 'lucide-react';

interface WeatherIconProps {
  condition: WeatherCondition;
  size?: number;
  className?: string;
  animated?: boolean;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ 
  condition, 
  size = 24, 
  className = "",
  animated = false
}) => {
  const baseClass = `${className} ${animated ? 'transition-transform duration-700' : ''}`;
  const animatedClass = animated ? 'hover:scale-110' : '';
  
  switch (condition) {
    case 'sunny':
      return (
        <Sun 
          size={size} 
          className={`${baseClass} ${animatedClass} text-amber-400`}
          strokeWidth={1.5}
        />
      );
    case 'partly-cloudy':
      return (
        <CloudSun 
          size={size} 
          className={`${baseClass} ${animatedClass} text-amber-400`}
          strokeWidth={1.5}
        />
      );
    case 'cloudy':
      return (
        <Cloud 
          size={size} 
          className={`${baseClass} ${animatedClass} text-gray-400`}
          strokeWidth={1.5}
        />
      );
    case 'rainy':
      return (
        <CloudRain 
          size={size} 
          className={`${baseClass} ${animatedClass} text-blue-500`}
          strokeWidth={1.5}
        />
      );
    case 'stormy':
      return (
        <CloudLightning 
          size={size} 
          className={`${baseClass} ${animatedClass} text-purple-500`}
          strokeWidth={1.5}
        />
      );
    case 'snowy':
      return (
        <Snowflake 
          size={size} 
          className={`${baseClass} ${animatedClass} text-sky-300`}
          strokeWidth={1.5}
        />
      );
    case 'foggy':
      return (
        <CloudFog 
          size={size} 
          className={`${baseClass} ${animatedClass} text-gray-300`}
          strokeWidth={1.5}
        />
      );
    default:
      return (
        <Sun 
          size={size} 
          className={`${baseClass} ${animatedClass} text-amber-400`}
          strokeWidth={1.5}
        />
      );
  }
};

export default WeatherIcon;