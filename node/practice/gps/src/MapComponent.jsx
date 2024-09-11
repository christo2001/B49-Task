import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, Polyline, useLoadScript } from '@react-google-maps/api';

const MapComponent = () => {
  const [vehiclePosition, setVehiclePosition] = useState(null);
  const [path, setPath] = useState([]);
  const [destination, setDestination] = useState(null);
  const speed = 0.00001; // Adjust the speed of movement

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAlc2pH3emh40cj44TleEDBEwrG1GZnqP4"
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch('https://gps-hu05.onrender.com/vehicle-location');
      const data = await response.json();
      console.log('Vehicle Data:', data); // Log the data for debugging
      
      // Set destination and initial vehicle position
      const newDestination = { lat: data.latitude, lng: data.longitude };
      if (!vehiclePosition) {
        setVehiclePosition(newDestination);
        setDestination(newDestination);
      } else {
        setDestination(newDestination);
      }

      // Update path
      setPath((prevPath) => [...prevPath, newDestination]);
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [vehiclePosition]);

  useEffect(() => {
    if (destination) {
      const moveInterval = setInterval(() => {
        setVehiclePosition((prevPosition) => {
          if (prevPosition.lat === destination.lat && prevPosition.lng === destination.lng) {
            clearInterval(moveInterval);
            return prevPosition; // Stop moving if destination is reached
          }

          const newLat = prevPosition.lat + (destination.lat - prevPosition.lat) * speed;
          const newLng = prevPosition.lng + (destination.lng - prevPosition.lng) * speed;

          return { lat: newLat, lng: newLng }; // Move towards destination
        });
      }, 100); // Move every 100 ms

      return () => clearInterval(moveInterval);
    }
  }, [destination]);

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
