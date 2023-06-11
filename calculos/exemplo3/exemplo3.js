function calcular() {
    // Obter os valores de entrada
    var massa1 = parseFloat(document.getElementById("massa1").value);
    var massa2 = parseFloat(document.getElementById("massa2").value);
    var gravidade = parseFloat(document.getElementById("gravidade").value);

    // Calcular a aceleração
    if (massa1>massa2) {
    var aceleracao = ((massa1 * gravidade) -(massa2 * gravidade)) / (massa1 + massa2);
    var tensao = (massa2 * aceleracao) + (massa2 * gravidade);
} else {
    var aceleracao = ((massa2 * gravidade) -(massa1 * gravidade)) / (massa1 + massa2);
    var tensao = (massa2*gravidade)-(massa2 * aceleracao);
}

    // Exibir o resultado
    if (massa1>massa2) {
        var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Aceleração para a esquerda de: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N";
    } else {
        var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Aceleração para a direita de: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N";
    }
    
}


// tensao = (massa2*gravidade)-(massa2 * aceleracao)
