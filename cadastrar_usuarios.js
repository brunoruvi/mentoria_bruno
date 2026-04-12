// Ler um arquivo csv (nativo ou com lib)
// Pra cada linha do arquivo, criar um objeto com as informações do usuário
// Salvar no banco de dados

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mentoria_db',
  password: 'root123'
});

const csvFilePath='C:\\Users\\bruno\\Documents\\dev\\mentoria_bruno\\arquivos\\usuarios.txt'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
  const values = jsonObj.map((item) => [
  item.first_name, 
  item.last_name, 
  item.age, 
  item.gender
]);
  console.log(jsonObj);
	console.log(values);
  connection.query(
  'INSERT INTO Users (first_name, last_name, age, gender) VALUES ?',
  [values],
  function (err, results, fields) {
    console.log(err);
    console.log(results);
    console.log(fields);
  }
);
})



// const dados = leOsDadosDoCsv('arquivos/usuarios.txt')



// [Nome Sobrenome Idade Sexo]
// [Renato Italo 34 M]
// [Bruno Ruvieri 22 M]

// 00 01 02 03
// 10 11 12 13
// 20 21 22 23 


// Nome: Renato
// Sobrenome: Italo
// Idade: 34
// Sexo: M

// Nome: Bruno
// Sobrenome: Ruvieri
// Idade: 22
// Sexo: M

// Etapa 1: 
// Resultado
// dados = [
//     {
//         nome: Renato,
//         sobrenome: Italo,
//         idade: 34,
//         sexo: M
//     },
//     {
//         nome: Renato,
//         sobrenome: Italo,
//         idade: 34,
//         sexo: M
//     }

// ]

// Etapa 2: 
// Conseguir para cada item, salvar no banco
