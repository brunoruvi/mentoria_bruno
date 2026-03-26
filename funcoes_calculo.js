import chalk from "chalk"
console.log(chalk.blue('Calculadora'))

function soma(numeros) {
    let total = 0
    for (const numero of numeros) {
        total += numero
    }
    return total
}

function sub(numeros) {
    let total = numeros[0]
    for (const numero of numeros.slice(1)) {
        total -= numero
    }
    return total
}

function mult(numeros) {
    let total = 1
    for (let i = numeros.length -1; i >= 0; i--) {
        total *= numeros[i]
    }
    return total
}

function div(numeros) {
    let total = numeros[0]
    for (let i = 1; i < numeros.length; i++) {
        total /= numeros[i]
    }
    return total
}

function operacao(operador) {
    switch(operador){
        case '+': 
            return 'Soma'
        case '-': 
            return 'Subtração'
        case '*':
            return 'Multiplicação'
        case '/':
            return 'Divisão'
        default: 
            return 'Você inseriu um operador inválido'
    }
}

function calcula(operador){
    switch(operador){
        case '+': 
            resultado = soma(numeros)
            break
        case '-':
            resultado = sub(numeros)
            break
        case '*':
            resultado = mult(numeros)
            break
        case '/':
            resultado = div(numeros)
            break
        default: 
        resultado = 'Você inseriu um operador inválido'
    }
        return resultado
}

function exec(){
    const operacao2 = operacao(operador)
    const calculo = calcula(operador)
    console.log('executando...')
    return [operacao2, calculo]
}

const operador = process.argv[2]
const numeros = process.argv.slice(3).map(n => Number(n))
let resultado

// printa os índices de cada argumento inserido e o argumento
 numeros.forEach((valor, indice) => {
  console.log(`Índice: ${indice} | Valor: ${valor}`)
})

const result = exec()
console.log(chalk.yellow('Argumentos: ' + (numeros)));
console.log('Operação: ' + result[0]);
console.log('Resultado: ' + result[1]);
// console.log(chalk.green('Resultado: ' + calcula(operador)));
