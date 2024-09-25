import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import './input.css'; // Import the CSS file

const Login = () => {
  const { login, error } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="card p-4" style={{ maxWidth: '600px', width: '100%', background:"#dcdfe0", border:'20px' }}>
        <h2 className="text-center mb-4 word">Login</h2>
        <form onSubmit={handleSubmit} className="row g-3 bg-grey">
          <div className="col-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control bg-grey"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary mt-3">Login</button>
          </div>
        </form>
        {error && <p className="text-danger mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
