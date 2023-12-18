import React, { useState } from 'react';
import useLocationStore from '../store/useLocationStore';

const RefreshLocation = () => {
  const { setLocation } = useLocationStore();
  const [error, setError] = useState(null);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(latitude, longitude);
          setError(null); // Clear any previous error
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  };

  React.useEffect(() => {
    getCurrentLocation();
  }, []); // Empty dependency array to run this effect only once when the component mounts

  return (
    <div>
      <div>
        <button className='text-sm font-light text-gray-500' onClick={getCurrentLocation}>Refresh Location</button>
      </div>
    </div>
  );
};

export default RefreshLocation;
