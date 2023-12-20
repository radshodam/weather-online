import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import useLocationGeoStore from '../store/useLocationGeoStore';

const RefreshLocation = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('city');
  const navigate = useNavigate();

  const { setLocationGeo } = useLocationGeoStore();
  const [error, setError] = useState(null);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocationGeo(latitude, longitude);
          setError(null); // Clear any previous error

          if (searchParams.has('city')) {
            // Redirect to the home page
            navigate('/');

          }
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
    if (!query) {
      getCurrentLocation();
    }
  }, [query]); // Empty dependency
  return (
    <div>
      <div>
        <button className='text-sm font-light text-gray-500' onClick={getCurrentLocation}>
          Refresh Location
        </button>
      </div>
    </div>
  );
};

export default RefreshLocation;
