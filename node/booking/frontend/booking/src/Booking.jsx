import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

function Booking() {
    const [doctorName, setDoctorName] = useState('');
    const [patientName, setPatientName] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const[fee,setfee]=useState('')
    const [timeSlots, setTimeSlots] = useState([]);
    const [specialization, setSpecialization] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState(null);
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://b49-task-1.onrender.com/api/doctor/getdoctor"
                );
                setDoctors(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching doctor data:", error);
                setLoading(false);
            }
        };
        fetchData();

    });

    const handleTimeSelect = (e) => {
        e.preventDefault();
        setTimeSlots([e.target.value]); // Wrap e.target.value in an array
    };

    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();
    
        // Add leading zero if month or day is a single digit
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
    
        return `${year}-${month}-${day}`;
    };

  const handleDoctorSelect = (selectedDoctorName) => {
    const selectedDoctor = doctors.find(doctor => doctor.doctorName === selectedDoctorName);
    if (selectedDoctor) {
        setDoctorName(selectedDoctorName);
        setSpecialization(selectedDoctor.specialization);
        setTimeSlots(Array.isArray(selectedDoctor.timeSlots) ? selectedDoctor.timeSlots : []);
        setfee(selectedDoctor.fee); // Use setfee instead of setFee
    }
};

    

    const handleDaySelect = (date) => {
        const selectedDateObj = new Date(date);
        const selectedDay = selectedDateObj.toLocaleString('en-us', { weekday: 'long' });
        setSelectedDay(selectedDay);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Check if any required field is empty
        if (!doctorName || !patientName || !selectedDate || !selectedDay || timeSlots.length === 0 || !specialization) {
            setErrorMessage('Please fill in all fields.');
            return;
        }
    
        try {
            const token = localStorage.getItem('token');
    
            const response = await fetch('https://b49-task-1.onrender.com/api/appointment/bookappointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify({
                    doctorName: doctorName,
                    patientName: patientName,
                    timeSlots: timeSlots,
                    day: selectedDay,
                    date: selectedDate,
                    specialization: specialization,
                    fee:fee
                })
    
            });
    
            if (response.ok) {
                const data = await response.json();
    
                setShowModal(false); // Hide modal after successful booking
                // Clear input values
                setDoctorName('');
                setPatientName('');
                setSelectedDate('');
                setSelectedDay('');
                setTimeSlots([]);
                setSpecialization('');
                setfee('')
                alert('Appointment booked successfully');
    
            } else {
                const errorMessage = await response.text();
                console.error('Error:', errorMessage);
                setErrorMessage(errorMessage);
            }
        } catch (error) {
            console.error('Error occurred:', error.message);
            setErrorMessage('An error occurred while booking the appointment.');
        }
    };
    
    return (
        <div>
            <button onClick={() => setShowModal(true)} className="w-full mt-10 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Open Booking Modal
            </button>

            {/* Modal */}
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Book an Appointment</h3>
                                        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                                        <div className="mb-4">
                                            <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700">Doctor Name:</label>
                                            <select 
                                                id="doctorName" 
                                                value={doctorName} 
                                                onChange={(e) => handleDoctorSelect(e.target.value)} 
                                                className="font-bold capitalize text-center text-l mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            >
                                                <option value="">Select Doctor</option>
                                                {doctors.map((doctor, index) => (
                                                    <option key={index} value={doctor.doctorName}>{doctor.doctorName}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Specialization:</label>
                                            <input 
                                                type="text" 
                                                id="specialization" 
                                                value={specialization} 
                                                readOnly 
                                                className="font-bold capitalize text-center text-l mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                                 <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Fee:</label>
                                            <input 
                                                type="text" 
                                                id="fee" 
                                                value={fee} 
                                                readOnly 
                                                className="font-bold capitalize text-center text-l mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="selectedTime" className="block text-sm font-medium text-gray-700">Select Time:</label>
                                                <select 
                                                    id="selectedTime" 
                                                    value={timeSlots} 
                                                    onChange={handleTimeSelect} 
                                                    className="font-bold capitalize text-center text-l mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                >
                                                    <option value="">Select Time</option>
                                                    {timeSlots.map((timeSlot, index) => (
                                                        <option key={index} value={timeSlot}>{timeSlot}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">Patient Name:</label>
                                                <input 
                                                    type="text" 
                                                    id="patientName" 
                                                    value={patientName} 
                                                    onChange={(e) => setPatientName(e.target.value)} 
                                                    className="font-bold capitalize text-center text-l mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="selectedDate" className="block text-sm font-medium text-gray-700">Select Date:</label>
                                                <input 
                                                    type="date" 
                                                    id="selectedDate" 
                                                    value={selectedDate} 
                                                    onChange={(e) => setSelectedDate(e.target.value)} 
                                                    min={getCurrentDate()} // Set the min attribute to the current date
                                                    className="mt-1 text-center focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
    
                                                <button 
                                                    onClick={() => handleDaySelect(selectedDate)} 
                                                    className="capitalize text-center text-l mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Get Day
                                                </button>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="selectedDay" className="block text-sm font-medium text-gray-700">Day:</label>
                                                <input type="text" id="selectedDay" value={selectedDay} readOnly className=" font-bold capitalize text-center text-l mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button 
                                        onClick={handleSubmit}
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    >
                                        Book
                                    </button>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
    
    export default Booking;
    
