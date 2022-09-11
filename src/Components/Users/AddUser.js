import React, { useState , useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";
import classes from "./AddUser.module.css";
import Wrapper from "../Helper/Wrraper";

const AddUser = (props) => {
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // initial value inside ref is undefined 
  // ref returns a value which always contains an object

  const addUserHandler = (event) => {
    
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
        setError({
            title: "Invalid Input",
            message: "Please enter a valid name and age (non-empty values)."
        })
      return;
    }
    if (+enteredUserAge < 1) {
        setError({
            title: "Invalid Age",
            message: "Please enter a valid  age (> 0)."
        })
      return;
    }
    //console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredName, enteredUserAge);

    // setEnteredUsername("");
    // setEnteredAge("");
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';


  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () =>{
    setError(null);
  }

  return (
    <Wrapper>
     { error && <ErrorModel title={error.title} message={error.message} resetPage = {errorHandler} />}
      <Card className={classes.input}>
        <form on onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredName}
            // onChange={usernameChangeHandler}
            ref = {nameInputRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredUserAge}
            // onChange={ageChangeHandler}
            ref = {ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
