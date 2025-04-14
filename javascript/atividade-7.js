//uma lista de modelos de carros

const modelos = ["Hb20" , "hilux" , "corolla" , "civic" ]
console.log(modelos)

modelos.push("Onix")
console.log(modelos)

//contagem

console.log(modelos.length)

modelos.push("Gol")

//remover o último modelo

modelos.pop() //vai remover o gol.

// remover um modelo especifico

modelos.splice(1, 1) //remove o modelo na posição 1