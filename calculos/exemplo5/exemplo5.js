function calcular() {
    var massaInput = parseFloat(document.getElementById("Massa").value);
    var forcaInput = parseFloat(document.getElementById("Forca").value);
    var razaoInput = parseFloat(document.getElementById("Razao").value);
    var qntBlocosInput = parseFloat(document.getElementById("qntBlocos").value);
    // var coeficienteAtritoInput = document.getElementById("coeficienteAtrito");
    var tracaoInput = parseFloat(document.getElementById("TracaoN").value);
    var tempo = parseFloat(document.getElementById("Tempo").value);

    if (isNaN(massaInput) || isNaN(forcaInput) || isNaN(razaoInput) || isNaN(qntBlocosInput) || isNaN(tracaoInput)) {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Preencha os campos da massa, da razão, da quantidade de blocos, da força e do fio escolhido para ver a tração com valores numéricos!";
        return;
    } else if(massaInput <= 0 || forcaInput < 0 || razaoInput < 0 || qntBlocosInput <= 0 || tracaoInput < 0){
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Preencha campos das massas, do algulo, da gravidade e do coeficiente de atrito com valores maiores que zero!";
        return;
    }


    if (!isNaN(massaInput) && !isNaN(forcaInput) && !isNaN(razaoInput) && !isNaN(qntBlocosInput) && !isNaN(tracaoInput)) {
        var massaN = massaInput + (qntBlocosInput - 1) * razaoInput; // massa ultimo bloco
        var massaTotal = qntBlocosInput * (massaInput + massaN) / 2; // massa total dos blocos

        var massaTensaoN = massaInput + (tracaoInput - 1) * razaoInput; // massa ultimo bloco da tensao
        var massaDaTensao = tracaoInput * (massaTensaoN + massaInput) / 2; // massa total dos blocos da tensao

        var aceleracao = forcaInput / massaTotal;
        var tensao = NaN;

        var velocidadeFinal = aceleracao * tempo;
        var deslocamento = (aceleracao * (tempo * tempo)) / 2;

        if (tracaoInput < qntBlocosInput) {
            tensao = massaDaTensao * aceleracao; // tensao no bloco n
        }
        else if (tracaoInput == qntBlocosInput) {
            tensao = forcaInput;
        }
        
        if (!isNaN(tempo) && tempo >= 0) {
            var resultado = document.getElementById("resultado");
            resultado.innerHTML = "<br>Força de aceleração: " + aceleracao.toFixed(2) + " m/s²<br>Força de tensão no Bloco escolhido: " + tensao.toFixed(2) + " N<br>Velocidade final: " + velocidadeFinal.toFixed(2) + " m/s<br>Deslocamento: " + deslocamento.toFixed(2) + " m";
        }
        else {
            var resultado = document.getElementById("resultado");
            resultado.innerHTML = "<br>Força de aceleração: " + aceleracao.toFixed(2) + " m/s²<br>Força de tensão no Bloco escolhido: " + tensao.toFixed(2) + " N";
        }
    }
    else {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Preencha os campos da massa, força, razão, quantidade de blocos e escolha um fio para ver a tração nele.";
    }
}

