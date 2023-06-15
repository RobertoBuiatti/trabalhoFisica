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

    if (forca >= forcaAtritoTotal) {
        // Calcular a aceleração
        var aceleracao = (forca - forcaAtritoTotal) / (massa1 + massa2 + massa3);

        var forcaBA = ((forca) - (coeficiente1 * massa1 * gravidade) - (massa1 * aceleracao));
        var forcaBC = ((massa3 * aceleracao) + (coeficiente3 * massa3 * gravidade));

        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Aceleração para a direita de: " + aceleracao.toFixed(2) + " m/s²<br>Força de A em B: " + forcaBA.toFixed(2) + " N<br>Força de B em C: " + forcaBC.toFixed(2) + " N<br>Força de atrito Corpo 1: " + forcaAtrito1.toFixed(2) + " N<br>Força de atrito Corpo 2: " + forcaAtrito2.toFixed(2) + " N<br>Força de atrito Corpo 3: " + forcaAtrito3.toFixed(2) + " N<br>Valor mínimo para força aplicada para empurrar os blocos: " + forcaAtritoTotal.toFixed(2) + " N";
    } else {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "A força é menor que a força de atrito total, logo o movimento é impossivel.<br>Valor mínimo para força aplicada para empurrar os blocos: " + forcaAtritoTotal.toFixed(2) + " N";
    }
    



}
