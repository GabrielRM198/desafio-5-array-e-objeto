// Crie um array que receba 5 itens e exiba no console.
let semana =["segunda", "terça", "quarta", "quinta", "sexta"]
console.log(semana)
// Utilize um método para adicionar um nome ao inicio do array.
let esportes = ["futebol", "corrida", "luta"]
esportes.unshift("volei")
console.log(esportes)
// Utilize um método para remover o último nome do array.
let times = ["fla", "flu", "vas"]
times.pop()
console.log(times)
// Utilize um método para adicionar dois nomes ao fim do array.
let bebidas = ["refrigerante", "suco", "água"]
bebidas.push("cerveja", "vodka")
console.log(bebidas)
// Utilize um método para remover o primeiro nome do array.
bebidas ["refrigerante", "suco", "água"]
bebidas.shift()
console.log(bebidas)
// Utilize um método para organizar em ordem crescente o seguinte array:
 let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort(function(a,b){
    return a - b
})
console.log(numbers)