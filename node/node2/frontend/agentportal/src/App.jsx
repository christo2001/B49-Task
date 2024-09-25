import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import AddFlat from './AddFlat';
import { AuthProvider } from './AuthContext'; // Import AuthProvider

function App() {
  return (
    <Router>  {/* Wrap Router here */}
      <AuthProvider>  {/* Now AuthProvider is inside Router */}
        <Routes>
          <Route path="/" element={<Registration />} />
        
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
