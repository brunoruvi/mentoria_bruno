const palavras = process.argv.slice(2)
const contar = palavras.length

function inverter(palavras) {
    let palavrasInvertidas = []
    for (let i = palavras.length - 1; i >= 0; i--) {
        palavrasInvertidas.push(palavras[i])
    }
    return palavrasInvertidas
}

const conjuntoPalavras = [{
    "palavra": "amor",
    "significado": "emoção ou estado psicológico associado às experiências humanas"
},
{
    "palavra": "amizade",
    "significado": "emoção ou estado psicológico associado às experiências humanas"
},
{
    "palavra": "alegria",
    "significado": "emoção ou estado psicológico associado às experiências humanas",
    "sinonimos": [
        "felicidade", "empolgação", "conquistas"
    ]
},
{
    "palavra": "tristeza",
    "significado": "emoção ou estado psicológico associado às experiências humanas"
},
{
    "palavra": "raiva",
    "significado": "emoção ou estado psicológico associado às experiências humanas"
},
{
    "palavra": "medo",
    "significado": "emoção ou estado psicológico associado às experiências humanas"
}]

// conjuntoPalavras[3].palavra
// function buscarSignificados(palavras) {

// printa os índices de cada argumento inserido e o argumento
palavras.forEach((valor, indice) => {
    console.log(`Índice: ${indice} | Valor: ${valor}`)
})

conjuntoPalavras.forEach((valor) => {
    // console.log(valor.palavra + ' Significado ' + valor.significado)
    console.log(`
        Palavra: ${valor.palavra} 
        Significado:  ${valor.significado}
        Sinônimos: ${valor.sinonimos}`)
//verificar se os sinonimos existem
const sinonimoexiste = valor.hasOwnProperty('sinonimos')
console.log(sinonimoexiste)
//se existe, printar no console.log
    })


// const palavrasInvertidas = inverter(palavras)
// console.log('Palavras: ' + palavras)
// console.log('Quantidade: ' + contar)
// console.log('Palavras invertidas: ' + palavrasInvertidas)
// console.log(conjuntoPalavras[2].palavra + ': ' + conjuntoPalavras[2].significado + ' sinônimo: ' + conjuntoPalavras[2].sinonimos[1])