console.log('Calculadora')

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