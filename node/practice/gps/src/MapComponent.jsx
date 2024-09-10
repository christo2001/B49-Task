import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, Polyline, useLoadScript } from '@react-google-maps/api';

const MapComponent = () => {
  const [vehiclePosition, setVehiclePosition] = useState(null);
  const [path, setPath] = useState([]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAlc2pH3emh40cj44TleEDBEwrG1GZnqP4" // Remove the extra space
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch('http://localhost:4000/vehicle-location');
      const data = await response.json();
      console.log('Vehicle Data:', data); // Log the data for debugging
      setVehiclePosition({ lat: data.latitude, lng: data.longitude });
      setPath((prevPath) => [...prevPath, { lat: data.latitude, lng: data.longitude }]);
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      center={vehiclePosition}
      zoom={15}
      mapContainerStyle={{ width: '100%', height: '500px' }}
    >
      {vehiclePosition && (
        <>
          <Marker position={vehiclePosition} />
          <Polyline path={path} options={{ strokeColor: "red" }} />
        </>
      )}
    </GoogleMap>
  );
};

export default MapComponent;
