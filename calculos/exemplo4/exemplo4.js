function calcular() {
    // Obter os valores de entrada
    var massa1 = parseFloat(document.getElementById("massa1").value);
    var massa2 = parseFloat(document.getElementById("massa2").value);
    var gravidade = parseFloat(document.getElementById("gravidade").value);
    var angulo = parseFloat(document.getElementById("angulo").value);
    var tempo = parseFloat(document.getElementById("Tempo").value);

    // peso tangente

    var pesoTangente = (massa1 * gravidade) * (Math.sin(angulo * Math.PI / 180));

    if (!isNaN(massa1) && !isNaN(massa2) && !isNaN(gravidade) && !isNaN(angulo)) {
        // Calcular a aceleração
        if ((pesoTangente) > (massa2 * gravidade)) {
            var aceleracao = ((pesoTangente) - (massa2 * gravidade)) / (massa1 + massa2);
            var tensao = (massa2 * aceleracao) + (massa2 * gravidade);
            var velocidadeFinal = aceleracao * tempo;
            var deslocamento = (aceleracao * (tempo * tempo)) / 2;

            // var resultado = document.getElementById("resultado");
            // resultado.innerHTML = "Aceleração no sentido do peso tangente: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N";
            if (!isNaN(tempo)) {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração no sentido do peso tangente: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N<br>Velocidade Final: " + velocidadeFinal.toFixed(2) + " m/s<br>Deslocamento: " + deslocamento.toFixed(2) + " m";
            }
            else {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração no sentido do peso tangente: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N";
            }
        }
        else if (pesoTangente == massa2 * gravidade) {
            var tensao = (massa2 * gravidade);
            var aceleracao = 0;
            var resultado = document.getElementById("resultado");
            resultado.innerHTML = "Aceleração: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N";
        }
        else {
            var aceleracao = ((massa2 * gravidade) - (pesoTangente)) / (massa1 + massa2);
            var tensao = (massa2 * gravidade) - (massa2 * aceleracao);
            var velocidadeFinal = aceleracao * tempo;
            var deslocamento = (aceleracao * (tempo * tempo)) / 2;
            if (!isNaN(tempo)) {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração no sentido do peso pendurado: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N<br>Velocidade Final: " + velocidadeFinal.toFixed(2) + " m/s<br>Deslocamento: " + deslocamento.toFixed(2) + " m";
            }
            else {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração no sentido do peso pendurado: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N";
            }
        }
    }
    else {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Preencha ao menos os campos das massas, da gravidade e da angulação do plano!";
    }


    // Exibir o resultado

}


// tensao-(massa2*gravidade)=massa2*aceleracao
// tensao=(massa2*aceleracao)+(massa2*gravidade)