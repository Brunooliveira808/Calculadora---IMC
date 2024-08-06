function calcular() {
    var nomen1 = document.getElementById('nome')
    var alturan1 = document.getElementById('altura')
    var peson1 = document.getElementById('peso')
    var resultado = document.getElementById('resultado')

    var nome = nomen1.value
    var altura = Number(alturan1.value)
    var peso = Number(peson1.value)


    if (nome !== '' && altura !== '' && peso !== '') {
        
        var imc = (peso / (altura * altura)).toFixed(1)

        var classificacao = ''

        if (imc < 10.5){
            classificacao = 'abaixo do peso'
        } else if (imc < 25) {
            classificacao = ' com peso ideal. Parabéns!!!'
        } else if (imc < 30) {
            classificacao = 'levemente acima do peso'
        } else if (imc < 35) {
            classificacao = 'com obesidade grau I'
        } else if (imc < 40) {
            classificacao = 'com obesidade grau II'
        } else {
            classificacao = 'com obesidade grau III Cuidado!!!'
        }

        resultado.innerHTML = `${nome} seu IMC é ${imc} e você está ${classificacao}`

    } else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }
}

