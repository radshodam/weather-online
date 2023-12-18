import React, { useState, useEffect } from 'react';

const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if the Geolocation API is supported by the browser
    if (!navigator.geolocation) {
      setError(new Error('Geolocation is not supported by your browser.'));
      return;
    }

    // Get the user's current location
    const getCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          setError(error);
        }
      );
    };

    getCurrentLocation();
  }, []); // Empty dependency array to run this effect only once when the component mounts

  return (
    <div>
      {location ? (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <p>Getting your location...</p>
      )}
    </div>
  );
};

export default LocationComponent;
