const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'myuser',
  password: 'mypassword',
  database: 'mydatabase'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
  const createTasksTable = ` 
  CREATE TABLE IF NOT EXISTS tasks 
  ( 
    id VARCHAR(36) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT, 
    status TEXT
  ) `;

  connection.query(createTasksTable, (err) => { 
    if (err) { 
      console.error('Error creating tasks table:', err); 
      return; 
    } 
    console.log('Tasks table created or already exists.'); 
  });
});

module.exports = connection;