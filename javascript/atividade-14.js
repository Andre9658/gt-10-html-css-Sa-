const carro = {
    modelo : "Civic",
    ano : 2021,
    cor : "Preto"
    rodados : 800

}



function verificarCarro(carro){
    if(carro.ano > 2020 || carro.km < 1000)
        console.log("Carro Novo")
    } else {
        console.log("Carro Usado")
    }   

verificarCarro(carro)