function calcular() {
    // Obter os valores de entrada
    var massa1 = parseFloat(document.getElementById("massa1").value);
    var massa2 = parseFloat(document.getElementById("massa2").value);
    var gravidade = parseFloat(document.getElementById("gravidade").value);
    var angulo = parseFloat(document.getElementById("angulo").value);
    var tempo = parseFloat(document.getElementById("Tempo").value);
    var coeficiente1 = parseFloat(document.getElementById("coeficienteAtrito1").value);

    // peso tangente

    var pesoTangente = (massa1 * gravidade) * (Math.sin(angulo * (Math.PI / 180)));
    var forcaAtrito1 = coeficiente1 * massa1 * gravidade*(Math.cos(angulo * (Math.PI / 180)));

    if (!isNaN(massa1) && !isNaN(massa2) && !isNaN(gravidade) && !isNaN(angulo)) {
        // Calcular a aceleração
        if ((pesoTangente) > ((massa2 * gravidade)+forcaAtrito1)) {
            var aceleracao = ((pesoTangente) - ((massa2 * gravidade)+forcaAtrito1)) / (massa1 + massa2);
            var tensao = (massa2 * aceleracao) + (massa2 * gravidade);
            var velocidadeFinal = aceleracao * tempo;
            var deslocamento = (aceleracao * (tempo * tempo)) / 2;

            
            if (!isNaN(tempo)) {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração no sentido do peso no plano inclinado: " + aceleracao.toFixed(4) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(4) + " N<br>Velocidade Final: " + velocidadeFinal.toFixed(4) + " m/s<br>Deslocamento: " + deslocamento.toFixed(4) + " m<br>Força de atrito no bloco sobre o plano: " + forcaAtrito1.toFixed(4) + " N<br>Força peso tangente: " + pesoTangente.toFixed(4) + " N";
            }
            else {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração no sentido do peso no plano inclinado: " + aceleracao.toFixed(4) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(4) + " N<br>Força de atrito no bloco sobre o plano: " + forcaAtrito1.toFixed(4) + " N<br>Força peso tangente: " + pesoTangente.toFixed(4) + " N";
            }
        }
        else if (pesoTangente == ((massa2 * gravidade)+forcaAtrito1)) {
            var tensao = (massa2 * gravidade)+forcaAtrito1;
            var aceleracao = 0;
            var resultado = document.getElementById("resultado");
            resultado.innerHTML = "Aceleração: " + aceleracao.toFixed(4) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(4) + " N<br>Força de atrito no bloco sobre o plano: " + forcaAtrito1.toFixed(4) + " N<br>Força peso tangente: " + pesoTangente.toFixed(4) + " N";
        }
        else {
            if ((pesoTangente + forcaAtrito1) > (massa2 * gravidade)) {
                aceleracao = 0;
            }
            else {
            var aceleracao = ((massa2 * gravidade) - pesoTangente-forcaAtrito1) / (massa1 + massa2);
            // p2 - pesoTangente - forcaAtrito1 = aceleracao * (massa1 + massa2)
        }
            var tensao = (massa2 * gravidade) - (massa2 * aceleracao);
            var velocidadeFinal = aceleracao * tempo;
            var deslocamento = (aceleracao * (tempo * tempo)) / 2;
            if (!isNaN(tempo) && aceleracao!=0) {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração no sentido do peso suspenso: " + aceleracao.toFixed(4) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(4) + " N<br>Velocidade Final: " + velocidadeFinal.toFixed(4) + " m/s<br>Deslocamento: " + deslocamento.toFixed(2) + " m<br>Força de atrito no bloco sobre o plano: " + forcaAtrito1.toFixed(2) + " N<br>Força peso tangente: " + pesoTangente.toFixed(2) + " N";
            }
            else if (aceleracao!=0){
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração no sentido do peso suspenso: " + aceleracao.toFixed(4) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(4) + " N<br>Força de atrito no bloco sobre o plano: " + forcaAtrito1.toFixed(4) + " N<br>Força peso tangente: " + pesoTangente.toFixed(4) + " N";
            }
            else {
                var resultado = document.getElementById("resultado");
                resultado.innerHTML = "Aceleração: " + aceleracao.toFixed(4) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(4) + " N<br>Força de atrito no bloco sobre o plano: " + forcaAtrito1.toFixed(4) + " N<br>Força peso tangente: " + pesoTangente.toFixed(4) + " N";
            }
        }
    }
    else {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "Preencha ao menos os campos das massas, da gravidade e da angulação do plano!";
    }
}