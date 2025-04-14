const user = {
    nome : "André",
    idade : 33,
    genero : "Masculino",
    cidade : "Fortaleza"
}

function verificarAlistamento (user) {
    if(user.idade > 18 && user.genero == "Masculino"){
        console.log("Precisa se alistar")
    } else {
        console.log("Não pode se alistar")
    }
}
verificarAlistamento(33)