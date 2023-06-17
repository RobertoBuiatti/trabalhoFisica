function calcular() {
    // Obter os valores de entrada
    var massa1 = parseFloat(document.getElementById("massa1").value);
    var massa2 = parseFloat(document.getElementById("massa2").value);
    var massa3 = parseFloat(document.getElementById("massa3").value);
    var coeficiente1 = parseFloat(document.getElementById("coeficienteAtrito1").value);
    var coeficiente2 = parseFloat(document.getElementById("coeficienteAtrito2").value);
    var coeficiente3 = parseFloat(document.getElementById("coeficienteAtrito3").value);
    var forca = parseFloat(document.getElementById("Forca").value);
    var gravidade = parseFloat(document.getElementById("gravidade").value);
    var tempo = parseFloat(document.getElementById("Tempo").value);

    if (isNaN(massa1) || isNaN(massa2) || isNaN(massa3) || isNaN(coeficiente1) || isNaN(coeficiente2) || isNaN(coeficiente3) || isNaN(forca) || isNaN(gravidade)) {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Preencha os campos das massas, dos coeficientes de atrito, da força e da gravidade com valores numéricos.";
        return;
    }

    var forcaAtrito1 = coeficiente1 * massa1 * gravidade;
    var forcaAtrito2 = coeficiente2 * massa2 * gravidade;
    var forcaAtrito3 = coeficiente3 * massa3 * gravidade;
    var forcaAtritoTotal = forcaAtrito1 + forcaAtrito2 + forcaAtrito3;

    if (forca < forcaAtritoTotal) {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "A força é menor que a força de atrito total, logo o movimento é impossível.<br>Valor mínimo para força aplicada para puxar o fio: " + forcaAtritoTotal.toFixed(2) + " N";
        return;
    }

    // Calcular a aceleração
    var aceleracao = (forca - forcaAtritoTotal) / (massa1 + massa2 + massa3);
    var tensao1 = massa1 * aceleracao + forcaAtrito1;
    var tensao2 = massa2 * aceleracao + forcaAtrito2 + tensao1;
    var velocidadeFinal = aceleracao * tempo;
    var deslocamento = (aceleracao * tempo * tempo) / 2;

    if (isNaN(tempo)) {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Aceleração: " + aceleracao.toFixed(2) + " m/s²<br>Tensão entre 1 e 2: " +
            tensao1.toFixed(2) + " N<br>Tensão entre 2 e 3: " + tensao2.toFixed(2) +
            " N<br>Força de atrito Corpo 1: " + forcaAtrito1.toFixed(2) + " N<br>Força de atrito Corpo 2: " +
            "" + forcaAtrito2.toFixed(2) + " N<br>Força de atrito Corpo 3: " + forcaAtrito3.toFixed(2) +
            " N<br>Valor mínimo para força aplicada para puxar o fio: " + forcaAtritoTotal.toFixed(2) +
            " N<br>Para saber a velocidade e o deslocamento, insira um valor para o tempo.";
    } else {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Aceleração: " + aceleracao.toFixed(2) + " m/s²<br>Tensão entre 1 e 2: " +
            tensao1.toFixed(2) + " N<br>Tensão entre 2 e 3: " + tensao2.toFixed(2) +
            " N<br>Força de atrito Corpo 1: " + forcaAtrito1.toFixed(2) + " N<br>Força de atrito Corpo 2: " +
            "" + forcaAtrito2.toFixed(2) + " N<br>Força de atrito Corpo 3: " +
            forcaAtrito3.toFixed(2) + " N<br>Valor mínimo para força aplicada para puxar o fio: " +
            forcaAtritoTotal.toFixed(2) + " N<br>Velocidade ao final do tempo passado: " +
            velocidadeFinal.toFixed(2) + " m/s<br>Deslocamento ao final do tempo passado: " +
            deslocamento.toFixed(2) + " m";
    }
}
