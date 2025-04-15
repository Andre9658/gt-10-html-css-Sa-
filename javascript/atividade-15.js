const user = {
    nome : "André",
    altura : 1.75 ,
    peso : 60
}

//console.log(user.peso)// Irá mostrar apenas o objeto especifico.

function calcularImc (user) {
    const imc = user.peso / (user.altura * user.altura)
    console.log(imc.toFixed(2))

    //if (imc <= 18.5){
        //console.log("Abaixo do Peso")
    //} else if (imc >= 18.5 && imc <= 24.9 ) {
      //  console.log("Peso Normal")
    //} else if (imc => 25 && imc <= 29.9) {
       // console.log("Sobrepeso")
    //} else if (imc >= 30 && imc <= 34.9) {
       // console.log("Obesidade Grau 1")
    //} else if (imc => 35 && imc <= 39.9) {
       // console.log("Obesidade Grau 2")
    //} else if (imc => 40 ){
       // console.log("Obesidade Grau 3")
    //}//



    if (imc <= 18.5){
        console.log("Abaixo do Peso")
    } if (imc >= 18.5 && imc <= 24.9 ) {
       return console.log("Peso Normal")
    } if (imc => 25 && imc <= 29.9) {
       return console.log("Sobrepeso")
    } if (imc >= 30 && imc <= 34.9) {
        return console.log("Obesidade Grau 1")
    } if (imc => 35 && imc <= 39.9) {
        return console.log("Obesidade Grau 2")
    } if (imc => 40 ){
       return console.log("Obesidade Grau 3")
    }
    
}

calcularImc(user)

