/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {

const initialArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();    
    setTasks([...tasks, {title, description}])    
    setTitle("")
    setDescription("")
  };
  useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  const deleteTasks = (index) => {
    const filteredArray = tasks.filter((val, i) => {
        return i !== index
    })
    console.log(filteredArray)
    setTasks(filteredArray)
  }
  
  
  return (
    <>
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className="inputs">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <textarea
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>

          </div>
          <div className="buttons">
            <button type="submit" id="addBtn">
              ➕
            </button>
          </div>
        </form>

        {tasks.map((item, index) => (
          <Task key={index} title={item.title} description={item.description} deleteTask={deleteTasks} index={index}/>
        ))}
      </div>
    </>
  );
};

export default Home;
