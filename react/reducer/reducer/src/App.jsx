import React, { useReducer, useState } from 'react';

const initialState = []; // Initial state as an empty array

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, {text: action.text }];
    case 'del':
      return state.filter((task)=>task.id!==action.iden)
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');

  const handleAdd = () => {
      dispatch({ type: 'add', text });
      setText('');
  };

  const deletebutton = (id) =>{
    dispatch({type:'del',iden:id})
  }

  return (
    <>
      <label>Name</label>
      <input
        type='text'
        name='name'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            {todo.text} 
            <button onClick={()=>deletebutton(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
