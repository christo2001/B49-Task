import './App.css';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Shorturl from './Shorturl';
import Dashboard from './Dashboard';
import ForgotPassword from './ForgotPassword';
import ChangePassword from './ChangePassword';




function App() {

  return (
    <Router>
      <div className='App'>
        <main>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={ <Home />} />
            <Route path="/myurl" element={ <Shorturl />} />
            <Route path="/dashboard" element={ <Dashboard />} />
            <Route path="/ForgotPassword" element={ <ForgotPassword />} />
            <Route path="/ChangePassword" element={ <ChangePassword />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
