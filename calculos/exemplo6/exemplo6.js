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

    // Calcular a aceleração
    var aceleracao = ((forca) - ((coeficiente1 * massa1 * gravidade) + (coeficiente2 * massa2 * gravidade) + (coeficiente3 * massa3 * gravidade))) / (massa1 + massa2 + massa3);

    var forcaBA = ((forca) - (coeficiente1 * massa1 * gravidade) - (massa1 * aceleracao));
    var forcaBC = ((massa3 * aceleracao) + (coeficiente3 * massa3 * gravidade));


    // Exibir o resultado

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Aceleração para a esquerda de: " + aceleracao.toFixed(2) + " m/s²<br>Força de A em B: " + forcaBA.toFixed(2) + " N<br>Força de B em C: " + forcaBC.toFixed(2) + " N";

}
