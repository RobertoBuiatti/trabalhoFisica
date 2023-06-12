function calcular() {
    var massaInput = parseFloat(document.getElementById("Massa").value);
    var forcaInput = parseFloat(document.getElementById("Forca").value);
    var razaoInput = parseFloat(document.getElementById("Razao").value);
    var qntBlocosInput = parseFloat(document.getElementById("qntBlocos").value);
    // var coeficienteAtritoInput = document.getElementById("coeficienteAtrito");
    var tracaoInput = parseFloat(document.getElementById("TracaoN").value);



    var massaN = massaInput + (qntBlocosInput - 1) * razaoInput; // massa ultimo bloco
    var massaTotal = qntBlocosInput * (massaInput + massaN) / 2; // massa total dos blocos

    var massaTensaoN = massaInput + (tracaoInput - 1) * razaoInput; // massa ultimo bloco da tensao
    var massaDaTensao = tracaoInput * (massaTensaoN + massaInput) / 2; // massa total dos blocos da tensao

    var aceleracao = forcaInput / massaTotal;
    var tensao = NaN;
    
    if(tracaoInput < qntBlocosInput){
    tensao = massaDaTensao * aceleracao; // tensao no bloco n
    }
    else if(tracaoInput == qntBlocosInput){
        tensao = forcaInput;
    }
    console.log(forcaInput);
    console.log(massaDaTensao);
    console.log(massaTotal);

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "<br>Força de aceleração: " + aceleracao.toFixed(2) + " m/s²<br>Força de tensão no Bloco escolhido: " + tensao.toFixed(2) + " N";

}

