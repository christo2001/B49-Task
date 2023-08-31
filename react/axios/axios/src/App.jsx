import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);
  const [id , setid ] = useState('')
  const [name, setName] = useState('');
  const [username, setusername] = useState('')
  const [email, setEmail] = useState('');
  const [street,setstreet] = useState('');
  const [suite,setsuite] = useState('')
  const [city,setcity] = useState('')
  const [zipcode,setzipcode] = useState('')
  const [phone,setphone] = useState('')
  const [cname,setcname] = useState('')
  const [editIndex, setEditIndex] = useState(-1);

  // stored api in a variable
  const apiurl = 'http://localhost:4000/users';


  useEffect(() => {
    fetchUsers();
  }, []);



  //getting api using async and axios
  const fetchUsers = async () => {
    try {
      const response = await axios.get(apiurl);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };




  //post and add
  const post = async () => {
    if (editIndex !== -1) {
      // Edit existing user
      const userToUpdate = users[editIndex];
      try {
        await axios.put(`${apiurl}/${userToUpdate.id}`, { id,name, email,username, address:{street,suite,city,zipcode},phone,company:{name:cname} });
        fetchUsers(); // Fetch updated user list after edit
        setEditIndex(-1);
      } catch (error) {
        console.log(error);
      }
    } else {
      // Create new user
      try {
        await axios.post(apiurl, {id, name, email,username,address:{street,suite,city,zipcode},phone,company:{name:cname} });
        fetchUsers(); // Fetch updated user list after creation
      } catch (error) {
        console.log(error);
      }
    }
    setName('');
    setEmail('');
    setusername('')
    setstreet('')
    setsuite('')
    setcity('')
    setzipcode('')
    setphone('')
    setcname('')
  };




  //edit
  const startEdit = (index) => {
    const userToEdit = users[index];
    setName(userToEdit.name);
    setEmail(userToEdit.email);
    setusername(userToEdit.username)
    setstreet(userToEdit.address.street)
    setsuite(userToEdit.address.suite)
    setcity(userToEdit.address.city)
    setzipcode(userToEdit.address.zipcode)
    setphone(userToEdit.phone)
    setcname(userToEdit.company.name)
    setEditIndex(index);
  };



  // delete data
  const handleDelete = async (index) => {
    const userToDelete = users[index];
    try {
      await axios.delete(`${apiurl}/${userToDelete.id}`);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
    <div className="inputcontainer">
    <div className="inputs">
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required/>
      <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
      <input type='text' value={username} onChange={(e) => setusername(e.target.value)} placeholder="username" required/>
      <input type='text' value={street} onChange={(e) => setstreet(e.target.value)} placeholder="street" required/>
      <input type='text' value={suite} onChange={(e) => setsuite(e.target.value)} placeholder="suite" required/>
      <input type='text' value={city} onChange={(e) => setcity(e.target.value)} placeholder="city" required/>
      <input type='text' value={zipcode} onChange={(e) => setzipcode(e.target.value)} placeholder="zipcode" required/>
      <input type='text' value={phone} onChange={(e) => setphone(e.target.value)} placeholder="phone" required/>
      <input type='text' value={cname} onChange={(e) => setcname(e.target.value)} placeholder="company name" required/>
      <button  className='post' onClick={post}>{editIndex !== -1 ? 'Update' : 'Post'}</button>
    </div>
    </div>
      <div className='values'>
      <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Username</th>
      <th>Street</th>
      <th>Suite</th>
      <th>City</th>
      <th>Zipcode</th>
      <th>Phone</th>
      <th>Company</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {users.map((u, index) => (
      <tr key={index}>
        <td>{u.name}</td>
        <td>{u.email}</td>
        <td>{u.username}</td>
        <td>{u.address && u.address.street}</td>
        <td>{u.address && u.address.suite}</td>
        <td>{u.address && u.address.city}</td>
        <td>{u.address && u.address.zipcode}</td>
        <td>{u.phone}</td>
        <td>{u.company && u.company.name}</td>
        <td><button className='edit' onClick={() => startEdit(index)}>edit</button></td>
        <td><button className='delete' onClick={() => handleDelete(index)}>delete</button></td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </>
  );
}

export default App;
