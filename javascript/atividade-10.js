const user = {
    nome : "André" ,
    idade : 24
}

const produtos = [
    {nome: "Maça" , preco: 2.50},
    {nome: "Iphone" , preco: 5500}
]

const produtosMaiorDeIdade = [
    {nome: "51" , preco: 50},
    {nome: "JackDaniels" , preco:100}
]

if(user.idade >= "18"){
    console.log(produtos,produtosMaiorDeIdade)
}
else{
    console.log(produtos)
}