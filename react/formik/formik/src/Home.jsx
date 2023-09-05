// Home.jsx
import React, { useContext, useState } from 'react';
import { Namecontext } from './Context';

const Home = () => {
  const { Name, setname } = useContext(Namecontext);
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastname: ''
  });

  const handleClick = () => {
    let newvalue = {
      fname: inputValues.firstName,
      lname: inputValues.lastname
    }

    let update = [...Name]
    update.push(newvalue)
    setname(update)
  }

  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={inputValues.firstName}
        onChange={(e) => setInputValues({ ...inputValues, firstName: e.target.value })}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastname"
        value={inputValues.lastname}
        onChange={(e) => setInputValues({ ...inputValues, lastname: e.target.value })}
        placeholder="Last Name"
      />
      <button onClick={handleClick}>add Name</button>
    </div>
  );
};

export default Home;
