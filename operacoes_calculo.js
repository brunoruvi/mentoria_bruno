console.log('Calculadora')

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mentoria_db',
  password: 'root123'
});


// connection.query(
//   'SELECT * FROM operacoes',
//   function (err, results, fields) {
//     console.log(err);
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );


let a = Number(process.argv[2])
const operador = process.argv[3]
let b = Number(process.argv[4])
let resultado
process.argv.forEach((valor, indice) => {
  console.log(`Índice: ${indice} | Valor: ${valor}`)
})

if (a > 10) {
  a = 10
} else {
  // object calisthenics
}
if (b > 10) {
  b = 10
} else {
}

switch(operador){
  case '+': 
    resultado = a + b
    break
  case '-':
    resultado = a - b
    break
  case '*':
    resultado = a*b
    break
  case '/':
    resultado = a/b
    break
  default: 
    resultado = 'Você inseriu um operador inválido'
}

console.log(a,b)
console.log('Resultado: ' + resultado)

connection.query(
  `INSERT INTO operacoes (valor_a, valor_b, operacao, resultado) VALUES (${a}, ${b}, '${operador}', ${resultado})`,
  function (err, results, fields) {
    console.log(err);
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
    return;
  }
);
