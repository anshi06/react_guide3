import React, { useState } from 'react';
import UsersList from './Components/Users/UsersList';
import AddUser from './Components/Users/AddUser';
import './App.css';



function App() {
  const[usersList, setUsersList] = useState([]);
  return (
    <div className="App">
      <AddUser/>
      <UsersList users={usersList}/>
      
    </div>
  );
}

export default App;
