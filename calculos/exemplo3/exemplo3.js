function calcular() {
    // Obter os valores de entrada
    var massa1 = parseFloat(document.getElementById("massa1").value);
    var massa2 = parseFloat(document.getElementById("massa2").value);
    var gravidade = parseFloat(document.getElementById("gravidade").value);
    var tempo = parseFloat(document.getElementById("Tempo").value);

    if (!isNaN(massa1) && !isNaN(massa2) && !isNaN(gravidade)) {
        // Calcular a aceleração
        if (massa1 > massa2) {
            var aceleracao = ((massa1 * gravidade) - (massa2 * gravidade)) / (massa1 + massa2);
            var tensao = (massa2 * aceleracao) + (massa2 * gravidade);
            var velocidadeFinal = aceleracao * tempo;
            var deslocamento = (aceleracao * (tempo * tempo)) / 2;
            if (!isNaN(tempo)) {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração para a esquerda de: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N<br>Velocidade ao final do tempo passado: " + velocidadeFinal.toFixed(2) + " m/s<br>Deslocamento ao final do tempo passado: " + deslocamento.toFixed(2) + " m";
            }
            else {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração para a esquerda de: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N";
            }
        } else {
            var aceleracao = ((massa2 * gravidade) - (massa1 * gravidade)) / (massa1 + massa2);
            var tensao = (massa2 * gravidade) - (massa2 * aceleracao);
            var velocidadeFinal = aceleracao * tempo;
            var deslocamento = (aceleracao * (tempo * tempo)) / 2;
            if (!isNaN(tempo)) {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração para a direita de: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N<br>Velocidade ao final do tempo passado: " + velocidadeFinal.toFixed(2) + " m/s<br>Deslocamento ao final do tempo passado: " + deslocamento.toFixed(2) + " m";
            }
            else {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração para a direita de: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N";
            }
        }
    }
    else {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Preencha ao menos os campos das massas e da gravidade!";
    }
}