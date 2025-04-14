function calcularAluguel(dias,km){
    const valorPorDia = 250 
    if(km > 1000){
        const valorPorDia = 0.25;
        const calculoDiario = dias * valorPorDia
        const valorKm = km * valorPorDia

        const total = calculoDiario + valorKm
        console.log(total)
    } else{
        const valorPorDia = 0.50;
        const calculoDiario = dias * valorPorDia
        const valorKm = km * valorPorDia

        const total = calculoDiario + valorKm
        console.log(total)

    }
        
}

calcularAluguel (13,1500)