import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './Registration';


function App() {
  return (
    <Router>  {/* Wrap Router here */}
   
        <Routes>
          <Route path="/" element={<Registration />} />
        
        </Routes>
    
    </Router>
  );
}

export default App;
