import React, { useState, useEffect } from "react";
import axios from "axios";

const Doctor = ({ onSelectDoctor }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/doctor/getdoctor"
        );
        setDoctors(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 class="text-5xl font-bold text-center pb-10 mt-24"><span class="text-blue-700">Our</span> Doctors</h1>
      {loading ? (
        <p>Loading...</p>
      ) : doctors.length === 0 ? (
        <p>No doctors available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {doctors.map((doctor, index) => (
            <div
              key={doctor._id}
              className="bg-white rounded-lg border-t-4 border-blue-700 p-4"
              style={{ maxWidth: "350px" }} // Adjust the max width of the card
            >
              <img
                src={doctor.image}
                alt={`Image of ${doctor.doctorName}`}
                className="w-full h-auto max-h-40 object-cover mb-2 rounded-md bg-green-300"
                style={{ maxHeight: "410px" }} // Adjust the max height of the image
              />
              <h2 className="text-xl  mb-2 text-left capitalize">{doctor.doctorName}</h2>
              <p className="text-gray-600 mb-2 text-left bg-green-300 w-30 capitalize">{doctor.specialization}</p>
              <p className="text-white  mb-2 text-left bg-green-300 w-12 capitalize">{doctor.fee}</p>
            </div>
          ))}
        </div> 
      )}
    </div>
  );
};

export default Doctor;
