const express = require('express');
const connection = require('./data/db')
const app = express();
app.use(express.json)
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
