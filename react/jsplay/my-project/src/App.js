
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from './Home';
import About from './About';
import Ourservice from './Ourservice';
import CarComponent from './Cars';
import Footer from './Footer';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Register from './Register';


function App() {
  return (
    <div className="App">
      <Register/>
      <Home/>
      <About/>
      <Ourservice/>
      <CarComponent/>
      <Testimonial/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
