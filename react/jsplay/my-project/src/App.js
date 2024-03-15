import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Ourservice from './Ourservice';
import CarComponent from './Cars';
import Footer from './Footer';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Register from './Register';
import Login from './Login';
import Forget from './Forget';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forget" element={<Forget/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Ourservice/>} />
          <Route path="/forget" element={<Forget/>} />
          <Route path="/cars" element={<CarComponent/>} />
          <Route path="/customers" element={<Testimonial/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/footer" element={<Footer/>} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
