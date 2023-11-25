import React, { useState } from 'react';
import './todo.css'

function Todo() {
  const [alltodo, setalltodo] = useState([]);
  const [newtitle, setnewtitle] = useState('');
  const [newdesc, setnewdesc] = useState('');
 const [statusFilter, setStatusFilter] = useState('all'); // State for filtering



  const handleaddtodo = () => {
    const newtodo = {
      title: newtitle,
      desc: newdesc,
      completed: false,
    };

    const updatedList = [...alltodo, newtodo];
    setalltodo(updatedList);
    setnewtitle('');
    setnewdesc('');
  };



  const edit = (event) => {
    const index = event.target.getAttribute('data-index');
    const record = alltodo[index];
    setnewtitle(record.title);
    setnewdesc(record.desc);
    alltodo.splice(index,1)
    let updatedList = alltodo.filter((_, i) => i !== index);
    setalltodo(updatedList);
  };


  const handledelete = (index)=>{
    let reduce = [...alltodo]
    reduce.splice(index)
    setalltodo(reduce)
  }


  
  const filteredTodos = alltodo.filter((todo) => {
    if (statusFilter === 'all') {
      return true;
    } else if (statusFilter === 'completed') {
      return todo.completed;
    } else if (statusFilter === 'incomplete') {
      return !todo.completed;
    }
    return true;
  });



  return (
    <div>
      <h1>Todo List</h1>
      <div className="inputs">
      <input type='text' id='title' value={newtitle} onChange={(e) => setnewtitle(e.target.value)} placeholder='enter your title' required/>
      <input type='text' id='desc'  value={newdesc} onChange={(e) => setnewdesc(e.target.value)} placeholder='enter your description' required/>
      <button className='add' type='button' onClick={handleaddtodo}> Add </button>
      </div>

      <div style={{ marginBottom: '10px' }} className='filter'>
        {/* Dropdown for status filter */}
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='incomplete'>Incomplete</option>
        </select>
      </div>

      <p>My Todos</p>
      {filteredTodos.map((item, index) => (
        <div key={index} id='cards'>
          <div className='cd'>
            <h3>Title: {item.title}</h3>
            <p>Description: {item.desc}</p>
            {/* Dropdown for individual status */}
             <select value={item.completed ? 'completed' : 'incomplete'} onChange={(e) =>  {
              const updatedList = [...alltodo];
              updatedList[index].completed = e.target.value === 'completed';
              setalltodo(updatedList);
            }}
          >
            <option value='completed'>Completed</option>
            <option value='incomplete'>Incomplete</option>
          </select>
            
            <button className='edit' onClick={edit} data-index={index}>edit</button>
            <button className='delete' onClick={handledelete} data-index={index}>delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
