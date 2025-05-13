import React, { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { LocationOption } from '../types/weather';

interface LocationSelectorProps {
  locations: LocationOption[];
  selectedLocation: string;
  onLocationChange: (location: string) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  locations,
  selectedLocation,
  onLocationChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleLocationSelect = (locationName: string) => {
    onLocationChange(locationName);
    setIsOpen(false);
  };
  
  // Find current selected location object
  const currentLocation = locations.find(loc => loc.name === selectedLocation) || locations[0];
  
  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown}
        className="flex items-center gap-2 text-lg font-medium text-white bg-blue-500/20 px-4 py-2 rounded-full backdrop-blur-md transition-all hover:bg-blue-500/30"
      >
        <MapPin size={18} className="text-blue-200" />
        <span>{currentLocation.name}</span>
        <ChevronDown 
          size={18} 
          className={`text-blue-200 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="absolute mt-2 w-full min-w-[200px] bg-white/90 backdrop-blur-md rounded-lg shadow-lg overflow-hidden z-10 transition-all duration-300 animate-in fade-in slide-in-from-top-5">
          <ul className="py-1">
            {locations.map((location) => (
              <li key={location.id}>
                <button
                  className={`w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors flex justify-between items-center ${
                    location.name === selectedLocation ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                  }`}
                  onClick={() => handleLocationSelect(location.name)}
                >
                  <span>{location.name}</span>
                  <span className="text-xs text-gray-500">{location.country}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;