const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mentoria_db',
  password: 'root123',
  timezone: 'Z'
});

const query = 'INSERT INTO Products (name, description, price, quantity) VALUES (?, ?, ?, ?)';

const values = ['Produto Exemplo', 'Descrição do produto exemplo', 19.99, 100];

connection.query(query, values, (error, results) => {
  if (error) {
    console.error('Erro ao criar produto:', error);
    return;
  }
  console.log('Produto criado com sucesso:', results);
});