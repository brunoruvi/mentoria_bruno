const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mentoria_db',
  password: 'root123',
  timezone: 'Z'
});

connection.query(
  `SELECT * FROM operacoes WHERE periodo BETWEEEN '2026~00' AND '2026' AND parceiro = 'paypal' ORDER BY date desc`,
  function (err, results, fields) {
    // console.log(err);
    let i = 0;
    for (result of results) {
        console.log('Resultado ' + ++i + ': ' + result)
    }
  }
);