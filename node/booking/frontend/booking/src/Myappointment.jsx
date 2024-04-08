import React, { useState, useEffect } from 'react';

function Myappointment() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('https://b49-task-1.onrender.com/api/patient/getappointment', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                }
            });

            if (response.ok) {
                const data = await response.json();
                setAppointments(data.data);
                setLoading(false);
            } else {
                const errorMessage = await response.text();
                console.error('Error:', errorMessage);
                setLoading(false);
            }
        } catch (error) {
            console.error('Error occurred:', error.message);
            setLoading(false);
        }
    };

    const handleDeleteAppointment = async (appointmentId) => {
        try {
            // Remove the deleted appointment from the local state
            setAppointments(prevAppointments =>
                prevAppointments.filter(appointment => appointment._id !== appointmentId)
            );

            const token = localStorage.getItem('token');
            const response = await fetch(`https://b49-task-1.onrender.com/api/patient/booking/${appointmentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                }
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Error:', errorMessage);
                // If deletion fails, revert the local state change
                fetchAppointments();
            }
        } catch (error) {
            console.error('Error occurred:', error.message);
            // If deletion fails, revert the local state change
            fetchAppointments();
        }
    };

    return (
        <div className="container mx-auto px-4">
            {loading ? (
                <p>Loading...</p>
            ) : appointments.length === 0 ? (
                <p>No appointments found for the user.</p>
            ) : (
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {appointments.map((appointment, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-left">{appointment.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-left">{appointment.doctorName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-left">
                                        <button onClick={() => handleDeleteAppointment(appointment._id)} className="text-indigo-600 hover:text-indigo-900">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Myappointment;
