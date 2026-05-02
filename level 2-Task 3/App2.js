import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>To-Do List</h1>

      <input
        style={{ padding: "8px", width: "200px" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />

      <button
        style={{ padding: "8px", marginLeft: "10px" }}
        onClick={addTask}
      >
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              margin: "10px auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <span style={{ marginRight: "10px" }}>{task}</span>

            <button onClick={() => deleteTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}