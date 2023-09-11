// App.js
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './Slice';
import './App.css';

function App() {
  const p = useSelector((state) => state.product);
  const dispatch = useDispatch()

  return (
    <>
    <div className="products">
      <img src={p.thumbnail}/>
      <div className='info'>
      <h2>{p.title}</h2>
      <p>{p.description}</p>
      <p className='stock'>Stock Available: {p.stock}</p>
      <p>${p.price}</p>


      <div className="quantity">
      <button onClick={()=>dispatch(increment())}>+</button>
      <p>{p.quantity}</p>
      <button onClick={()=>dispatch(decrement())}>-</button>
      </div>
      </div>
    </div>
     
    </>
  );
}

export default App;
