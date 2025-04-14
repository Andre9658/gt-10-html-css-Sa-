const user = {
    email: "andre@gmail.com",
    senha: "123456"
}

//condicao if (se) e else (se nao)

if(user.email == "andre@gmail.com") {
    console.log("Email Correto")

}

if(user.email == "andre@gmail.com" && user.senha=="123456"){
    console.log("Login Realizado com Sucesso")
}
else{
    console.log("Email ou Senha Inválidos")
}
    
// = atribuir  // == comparar (valor)  // === comparar (valor e tipo)
// && (e)   || (ou)    != (Valor)  !== ( valor e tipo)