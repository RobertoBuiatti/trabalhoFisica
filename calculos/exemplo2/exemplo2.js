function calcular() {
    // Obter os valores de entrada
    var massa1 = parseFloat(document.getElementById("massa1").value);
    var massa2 = parseFloat(document.getElementById("massa2").value);
    var gravidade = parseFloat(document.getElementById("gravidade").value);
    var tempo = parseFloat(document.getElementById("Tempo").value);
    var coeficiente1 = parseFloat(document.getElementById("coeficienteAtrito1").value);

    if (isNaN(massa1) || isNaN(massa2) || isNaN(gravidade)) {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Preencha os campos das massas e da gravidade com valores numéricos!";
        return;
    }

    if (isNaN(tempo)) {
        tempo = 0; // Definir tempo como zero se não for fornecido
    }

    var forcaAtrito1 = coeficiente1 * massa1 * gravidade;

    if(forcaAtrito1 < massa2 * gravidade){
    // Calcular a aceleração
    var aceleracao = (((massa2 * gravidade)-(forcaAtrito1)) / (massa1 + massa2));
    var tensao = (massa1 * aceleracao)+ forcaAtrito1;
    }else{
        var aceleracao = 0;
        var tensao = massa1 * gravidade;
    }
    // Calcular a tensão do fio
    var velocidadeFinal = aceleracao * tempo;
    var deslocamento = (aceleracao * (tempo * tempo)) / 2;

    // Exibir o resultado
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Aceleração no sentido do bloco suspenso: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N<br>Força de atrito no bloco sobre o plano: " + forcaAtrito1.toFixed(2) + " N";

    if (!isNaN(tempo)) {
        resultado.innerHTML += "<br>Velocidade ao final do tempo passado: " + velocidadeFinal.toFixed(2) + " m/s<br>Deslocamento ao final do tempo passado: " + deslocamento.toFixed(2) + " m";
    }
}
