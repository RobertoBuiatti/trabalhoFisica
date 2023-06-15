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

    var forcaAtrito1 = coeficiente1 * massa1 * gravidade;
    var forcaAtrito2 = coeficiente2 * massa2 * gravidade;
    var forcaAtrito3 = coeficiente3 * massa3 * gravidade;
    var forcaAtritoTotal = forcaAtrito1 + forcaAtrito2 + forcaAtrito3;
    // Calcular a aceleração
    if (forca >= forcaAtritoTotal) {
        var aceleracao = ((forca) - (forcaAtritoTotal)) / (massa1 + massa2 + massa3);
        var tensao1 = (massa1 * aceleracao) + (forcaAtrito1);
        var tensao2 = (massa2 * aceleracao) + (forcaAtrito2)+tensao1;
        var tensao3 = (massa3 * aceleracao) + (forcaAtrito3)+tensao2;
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Aceleração para a esquerda de: " + aceleracao.toFixed(2) + " m/s²<br>Tensão entre 1 e 2: " + tensao1.toFixed(2) + " N<br>Tensão entre 2 e 3: " + tensao2.toFixed(2) + " N<br>Valor mínimo para força aplicada para puxar o fio: " + forcaAtritoTotal.toFixed(2) + " N";

    } else {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "A força é menor que a força de atrito total, logo o movimento é impossivel.<br>Valor mínimo para força aplicada para puxar o fio: " + forcaAtritoTotal.toFixed(2) + " N";

    }


}
