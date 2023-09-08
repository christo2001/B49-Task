// App.js
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const p = useSelector((state) => state.product);

  return (
    <>
      <p>{p}</p>
    </>
  );
}

export default App;
