import React, { useState } from 'react';
import UsersList from './Components/Users/UsersList';
import AddUser from './Components/Users/AddUser';




function App() {
  const[usersList, setUsersList] = useState([]);
  const addUserHandler =(uName, uAge) =>{
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id:Math.random().toString()}]
    })

  }
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
      
    </div>
  );
}

export default App;
