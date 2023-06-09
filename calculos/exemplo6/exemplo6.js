function calcular() {
    // Obter os valores de entrada
    var massa1 = parseFloat(document.getElementById("massa1").value);
    var massa2 = parseFloat(document.getElementById("massa2").value);
    var massa3 = parseFloat(document.getElementById("massa3").value);
    var coeficiente1 = parseFloat(document.getElementById("coeficienteAtrito1").value);
    var forca = parseFloat(document.getElementById("Forca").value);
    var gravidade = parseFloat(document.getElementById("gravidade").value);
    var tempo = parseFloat(document.getElementById("Tempo").value);

    if (isNaN(massa1) || isNaN(massa2) || isNaN(massa3) || isNaN(coeficiente1) || isNaN(forca) || isNaN(gravidade)) {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Preencha os campos das massas, do coeficiente de atrito, da força e da gravidade com valores numéricos!";
        return;
    } else if(massa1<=0 || massa2<=0 || massa3<=0 || coeficiente1<0 || forca<0 || gravidade<0){
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Preencha campos das massas, do algulo, da gravidade e do coeficiente de atrito com valores maiores que zero!";
        return;
    }

    if (!isNaN(massa1) && !isNaN(massa2) && !isNaN(massa3) && !isNaN(coeficiente1) && !isNaN(forca) && !isNaN(gravidade)) {
        var forcaAtrito1 = coeficiente1 * massa1 * gravidade;
        var forcaAtrito2 = coeficiente1 * massa2 * gravidade;
        var forcaAtrito3 = coeficiente1 * massa3 * gravidade;
        var forcaAtritoTotal = forcaAtrito1 + forcaAtrito2 + forcaAtrito3;


        if (forca >= forcaAtritoTotal) {
            // Calcular a aceleração
            var aceleracao = (forca - forcaAtritoTotal) / (massa1 + massa2 + massa3);

            var forcaBA = ((forca) - (coeficiente1 * massa1 * gravidade) - (massa1 * aceleracao));
            var forcaBC = ((massa3 * aceleracao) + (forcaAtrito3));
            var velocidadeFinal = aceleracao * tempo;
            var deslocamento = (aceleracao * (tempo * tempo)) / 2;

            if (aceleracao>0) {
            if (!isNaN(tempo)&& tempo>=0) {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração para a direita de: " + aceleracao.toFixed(2) + " m/s²<br>Força do Bloco 1 no bloco 2 ou do Bloco 2 no Bloco 1: " + forcaBA.toFixed(2) + " N<br>Força do Bloco 3 no bloco 2 ou do Bloco 2 no Bloco 3: " + forcaBC.toFixed(2) + " N<br>Força de atrito Bloco 1: " + forcaAtrito1.toFixed(2) + " N<br>Força de atrito Bloco 2: " + forcaAtrito2.toFixed(2) + " N<br>Força de atrito Bloco 3: " + forcaAtrito3.toFixed(2) + " N<br>Valor mínimo para força aplicada para empurrar os blocos: " + forcaAtritoTotal.toFixed(2) + " N<br>Velocidade final: " + velocidadeFinal.toFixed(2) + " m/s<br>Deslocamento: " + deslocamento.toFixed(2) + " m";
            }
            else {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração para a direita de: " + aceleracao.toFixed(2) + " m/s²<br>Força do Bloco 1 no bloco 2 ou do Bloco 2 no Bloco 1: " + forcaBA.toFixed(2) + " N<br>Força do Bloco 3 no bloco 2 ou do Bloco 2 no Bloco 3: " + forcaBC.toFixed(2) + " N<br>Força de atrito Bloco 1: " + forcaAtrito1.toFixed(2) + " N<br>Força de atrito Bloco 2: " + forcaAtrito2.toFixed(2) + " N<br>Força de atrito Bloco 3: " + forcaAtrito3.toFixed(2) + " N<br>Valor mínimo para força aplicada para empurrar os blocos: " + forcaAtritoTotal.toFixed(2) + " N";
            }
        }
        else {
            var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração: " + aceleracao.toFixed(2) + " m/s²<br>Força do Bloco 1 no bloco 2 ou do Bloco 2 no Bloco 1: " + forcaBA.toFixed(2) + " N<br>Força do Bloco 3 no bloco 2 ou do Bloco 2 no Bloco 3: " + forcaBC.toFixed(2) + " N<br>Força de atrito Bloco 1: " + forcaAtrito1.toFixed(2) + " N<br>Força de atrito Bloco 2: " + forcaAtrito2.toFixed(2) + " N<br>Força de atrito Bloco 3: " + forcaAtrito3.toFixed(2) + " N<br>Valor mínimo para força aplicada para empurrar os blocos: " + forcaAtritoTotal.toFixed(2) + " N";
        }
        } else {
            var resultado = document.getElementById("resultado");
            resultado.innerHTML = "A força é menor que a força de atrito total, logo o movimento é impossivel.<br>Valor mínimo para força aplicada para empurrar os blocos: " + forcaAtritoTotal.toFixed(2) + " N";
        }

    }
    else {
        alert("Preencha os campos das massas, dos coeficiêntes de atrito, a força e a gravidade com valores válidos");
    }
}