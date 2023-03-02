function contar() {
    let num1 = document.querySelector("input#inicio")
    let num2 = document.querySelector("input#fim")
    let num3 = document.querySelector("input#passo")
    let res = document.querySelector("div#res")
    
    if(num1.value.length == 0 || num2.value.length ==0 || num3.value.length == 0){
        res.innerHTML = "Impossível contar!!"
        window.alert("[ERRO] Está faltando algum dado, tente de novo...")
    } else{
        let inicio = Number(num1.value)
        let fim = Number(num2.value)
        let passo = Number(num3.value)
        res.innerHTML = "Contando... </br>"

        if(passo <= 0){
            window.alert("Passo inválido! Considerando valor de PASSO = 1")
            passo = 1
        }
        if (inicio < fim){
            //contagem crescente
            for(let a= inicio; a <= fim; a += passo){
                res.innerHTML += `${a} ⏩ ` //inserir ícones: segurar a tecla "Windows + ponto" e escolher o emoji.
            }
        } else{
            //contagem regressiva
            for(let a= inicio; a >= fim; a -= passo){
                res.innerHTML += `${a} ⏩`
            }
        }
        res.innerHTML += `☑`
    }
}