function calcular() {
    // Obter os valores de entrada
    var massa1 = parseFloat(document.getElementById("massa1").value);
    var massa2 = parseFloat(document.getElementById("massa2").value);
    var gravidade = parseFloat(document.getElementById("gravidade").value);
    var tempo = parseFloat(document.getElementById("Tempo").value);

    if (isNaN(massa1) || isNaN(massa2) || isNaN(gravidade)) {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Preencha os campos das massas e da gravidade com valores numéricos!";
        return;
    } else if(massa1 <= 0 || massa2 <= 0 || gravidade < 0 ){
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Preencha os campos das massas e da gravidade com valores maiores que zero!";
        return;
    }

    if (!isNaN(massa1) && !isNaN(massa2) && !isNaN(gravidade)) {
        // Calcular a aceleração
        if (massa1 > massa2) {
            var aceleracao = ((massa1 * gravidade) - (massa2 * gravidade)) / (massa1 + massa2);
            var tensao = (massa2 * aceleracao) + (massa2 * gravidade);
            var velocidadeFinal = aceleracao * tempo;
            var deslocamento = (aceleracao * (tempo * tempo)) / 2;
            if (!isNaN(tempo)&& tempo >= 0) {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração com o bloco da esquerda descendo a: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N<br>Velocidade ao final do tempo passado: " + velocidadeFinal.toFixed(2) + " m/s<br>Deslocamento ao final do tempo passado: " + deslocamento.toFixed(2) + " m";
            }
            else {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração com o bloco da esquerda descendo a: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N";
            }
        } 
        else if (massa1 == massa2) {
            var aceleracao = 0;
            var tensao = massa2 * gravidade;
            var resultado = document.getElementById("resultado");
            resultado.innerHTML = "Aceleração: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N<br>Velocidade ao final do tempo passado: 0 m/s<br>Deslocamento ao final do tempo passado: 0 m";
        }
        else {
            var aceleracao = ((massa2 * gravidade) - (massa1 * gravidade)) / (massa1 + massa2);
            var tensao = (massa2 * gravidade) - (massa2 * aceleracao);
            var velocidadeFinal = aceleracao * tempo;
            var deslocamento = (aceleracao * (tempo * tempo)) / 2;
            if (!isNaN(tempo)) {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração com o bloco da direita descendo a: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N<br>Velocidade ao final do tempo passado: " + velocidadeFinal.toFixed(2) + " m/s<br>Deslocamento ao final do tempo passado: " + deslocamento.toFixed(2) + " m";
            }
            else {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração com o bloco da direita descendo a: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N";
            }
        }
    }
    else {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Preencha ao menos os campos das massas e da gravidade!";
    }
}