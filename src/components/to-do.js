import React from "react";
import { useState } from "react";
import "./to-do.css";
// import HomePage from "./components/screens/HomePage";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState([]);

  const update = () => {
    let obj = {
      id: lists.length,
      name: inputValue,
    };
    if (inputValue) {
      setLists([...lists, obj]);
      setInputValue("");
    }
  };
  const onSubmit=(e)=>{
    e.preventDefault();
    console.log("refresh prevented");
  }

  return (
    
    <div className="main-container">
      <h1>To-do-list</h1>
      
      <div className="add-container">
        <form onSubmit={onSubmit}><input placeholder="Enter here"
        onChange={(e)=>{
          setInputValue(e.target.value);
        }} value={inputValue}></input>
        <button onClick={() => update()} type="submit" >Add</button></form>
        

        <ul>{lists.map((item,i)=>(
        <li>{item.name}
        </li>
      ))}</ul>
      </div>
    </div>

  );
};

export default Todo;
