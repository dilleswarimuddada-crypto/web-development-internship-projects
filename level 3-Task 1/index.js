const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

// GET
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST
app.post("/tasks", (req, res) => {
  const { text } = req.body;
  tasks.push({ text });
  res.json({ message: "Task added" });
});

// DELETE
app.delete("/tasks/:index", (req, res) => {
  const index = req.params.index;
  tasks.splice(index, 1);
  res.json({ message: "Task deleted" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});