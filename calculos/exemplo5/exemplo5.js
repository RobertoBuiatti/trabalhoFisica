function calcular() {
    var massaInput = document.getElementById("Massa");
    var forcaInput = document.getElementById("forca");
    var razaoInput = document.getElementById("Razao");
    var qntBlocosInput = document.getElementById("qntBlocos");
    // var coeficienteAtritoInput = document.getElementById("coeficienteAtrito");
    var tracaoInput = document.getElementById("TracaoN");



    var massaN = massaInput + (qntBlocosInput - 1) * razaoInput; // massa ultimo bloco
    var massaTotal = qntBlocosInput * (massaInput + massaN) / 2; // massa total dos blocos

    var massaTensaoN = massaInput + (tracaoInput - 1) * razaoInput; // massa ultimo bloco da tensao
    var massaDaTensao = tracaoInput * (massaTensaoN + massaInput) / 2; // massa total dos blocos da tensao

    var aceleracao = forcaInput / massaTotal;

    var tensao = massaDaTensao * aceleracao; // tensao no bloco n

console.log(forcaInput);
console.log(massaDaTensao);
console.log(massaTotal);

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "<br>Força de aceleração: " + aceleracao.toFixed(2) + " m/s²<br>Força de tensao do bloco " + tracaoInput.toFixed(2) + ": " + tensao.toFixed(2) + " N";

}

