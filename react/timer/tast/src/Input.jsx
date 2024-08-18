import React, { useState, useRef } from 'react';

function Input() {
    const [time, setTime] = useState(null);
    const [now, setNow] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [isRunning, setIsRunning] = useState(false); // New state to manage whether the timer is running

    const intref = useRef();

    const handlestart = () => {
        const startTime = Date.now();
        setTime(startTime);
        setNow(startTime);
        setIsRunning(true); // Show the Stop button
        intref.current = setInterval(() => {
            setTime(Date.now());
        }, 10);
    };

    const handlestop = () => {
        clearInterval(intref.current);
        setIsRunning(false); // Hide the Stop button
        const timePassed = (Date.now() - now) / 1000;
        setTasks([...tasks, timePassed]); // Add the time passed to the tasks array
    };

    let timepassed = (time - now) / 1000;

    return (
        <div>
            <h4>timer: {timepassed.toFixed(2)} seconds</h4>
            {!isRunning && <button onClick={handlestart}>start</button>}
            {isRunning && <button onClick={handlestop}>stop</button>}
            <div>       
                {tasks.map((t, index) => (
                    <h2 key={index}>{t.toFixed(2)} seconds</h2>
                ))}
            </div>
        </div>
    );
}

export default Input;
