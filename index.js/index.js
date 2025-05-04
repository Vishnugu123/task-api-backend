const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

app.get('/', (req, res) => {
  res.send('Hello Backend!');
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).send('Task is required');
  tasks.push(task);
  res.status(201).send('Task added');
});

app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});
