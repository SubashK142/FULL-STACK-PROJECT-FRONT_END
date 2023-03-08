import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./navbar";

function TodoItem() {
  const [todo, setTodo] = useState({
    deadline: "",
    task_name: "",
    description: "",
  });

  const handleChange = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/posts`, todo).then((res) => {
      console.log(res.data);
      setTodo({ id: "", task_name: "", description: "" });
    });
  };

  return (
    <div>
        <NavBar/>
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="number" name="deadline" value={todo.deadline} onChange={handleChange} />
        </label>
        <br/>
        <label>
          Title:
          <input type="text" name="task_name" value={todo.task_name} onChange={handleChange} />
        </label>
        <br/>
        <label>
          Description:
          <input type="text" name="description" value={todo.description} onChange={handleChange} />
        </label>
        <br/>
        <button type="submit">Update</button>
      </form>
    </div>
    </div>
  );
}
export default TodoItem;