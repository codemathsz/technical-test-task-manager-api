const express = require('express');
const { randomUUID } = require('crypto')
const connection = require('./data/db')
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())
const port = 8080;

app.post('/tasks', (req, res) =>{
  console.log("req post task");
  
  const { title, description } = req.body
  if(!title || !description){
    return res.status(400).send("Bad request: Missing title or description")
  }
  const task = {id: randomUUID(), title, description, status: 'pendente'}
  const query = 'INSERT INTO tasks (id, title, description, status) VALUES (?,?,?,?)';
  connection.query(query, [task.id, task.title, task.description, task.status], (err) =>{
    if(err){
      console.error('Error inserting task:', err)
      return res.status(500).send('Internal server error')
    }
    return res.status(201).send(task)
  })
})

app.get('/tasks', (req, res) => { 
  const query = 'SELECT * FROM tasks'; 
  connection.query(query, (err, results) => { 
    if (err) { 
      console.error('Error fetching tasks:', err); 
      return res.status(500).send('Internal server error'); 
    } 
    res.json(results); 
  }); 
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
