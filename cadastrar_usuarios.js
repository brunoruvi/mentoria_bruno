// Ler um arquivo csv (nativo ou com lib)
// Pra cada linha do arquivo, criar um objeto com as informações do usuário
// Salvar no banco de dados


const fs = require('node:fs');
fs.readFile('./arquivos/usuarios.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  const linhas = data.split('\n')
  console.log(linhas.length)
  let header
  const PRIMEIRA_LINHA_ARQUIVO = 0
  for (let i = 0; i < linhas.length; i++) {
    const colunas = linhas[i].split(';')
    
    if (i === PRIMEIRA_LINHA_ARQUIVO) {
        header = colunas
        console.log('é um header')
        console.log(header)
        continue
    }

    for (let j = 0; j < colunas.length; j++) {
        console.log(`${header[j]}: ${colunas[j]}`)
    }

    console.log('\n')
  }
});

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
