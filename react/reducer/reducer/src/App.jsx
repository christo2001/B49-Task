import React, { useReducer, useState } from 'react';

const initialState = []; // Initial state as an empty array

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.text }];
    case 'del':
      return state.filter((task) => task.id !== action.iden);
    case 'edit':
      return state.map((task) =>
        task.id === action.id ? { ...task, text: action.text } : task
      );
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null); // Track the ID of the item being edited

  const handleAdd = () => {
    if (text.trim() !== '') {
      dispatch({ type: 'add', text });
      setText('');
    }
  };

  const handledelete=(id)=>{
    dispatch({type:'del', iden:id})
  }
  const handleEdit = (todo) => {
    setText(todo.text); // Set the current text to the input
    setEditId(todo.id); // Set the ID of the item being edited
  };

  const handleSave = () => {
      dispatch({ type: 'edit', id: editId, text });
      setText('');
      setEditId(null); // Clear edit mode
  };

  return (
    <>
      <label>Name</label>
      <input
        type='text'
        name='name'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={editId ? handleSave : handleAdd}>
        {editId ? 'Save' : 'Add'}
      </button>

      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? '' : todo.text}
            {editId !== todo.id && (
              <>
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={()=>handledelete(todo.id)}>delete</button>
              </>
            )}
            
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
