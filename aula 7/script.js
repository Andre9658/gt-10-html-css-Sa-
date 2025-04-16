// armanezar valor dos inputs altura e peso
var altura = document.getElementById("altura")
var peso = document.getElementById("peso")

//armazenar o valor do botão por id
var btn = document.getElementById("btn")

//armazenar o valor da div fim
var fim = document.getElementById("fim")

//função para calcular o Imc
function calcularImc(){
    //armazenar apenas o valor do input
    const valorAltura = altura.value
    const valorPeso = peso.value

    //calcular o Imc
    const imc = valorPeso / (valorAltura * valorAltura)
    //armanezar o valor do resultado
    return imc
}

//função de click
function calcular (){
    //chama a função de calcularImc e armazenar o valor
    const imc = calcularImc()
    var mensagem =""

    if(imc < 18.5){
        mensagem = "Você está baixo do peso"
    }

    if(imc >= 18.5 && imc < 24.9){
        mensagem = "Você está com o peso normal"
    }

    if(imc >= 25 && imc < 29.9){
        mensagem = "Você está sobrepeso"
    }

    if(imc >= 30 && imc < 34.9){
        mensagem = "Você está com obesidade grau 1"
    }

    if(imc >= 35 && imc < 39.9){
        mensagem = "Você está com obesidade grau 2"
    }

    //renderizar o resultado na div fim
    fim.innerHTML =`
        <div class="linha"></div>
        <div class="resultado">
            <div class="esquerda">
                <h2>${imc.toFixed(2)}</h2>
                <p>Seu IMC</p>
            </div>
            <div class="direita">
            <p>${mensagem}</p>
            </div>
        </div>
        <div class="linha"></div>
    `

}

//adicionar evento de click no Botão
btn.addEventListener("click", calcular)