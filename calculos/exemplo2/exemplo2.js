function calcular() {
    // Obter os valores de entrada
    var massa1 = parseFloat(document.getElementById("massa1").value);
    var massa2 = parseFloat(document.getElementById("massa2").value);
    var gravidade = parseFloat(document.getElementById("gravidade").value);

    // Calcular a aceleração
    var aceleracao = massa2 * gravidade / (massa1 + massa2);

    // Calcular a tensão do fio
    var tensao = massa1 * aceleracao;

    // Exibir o resultado
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Aceleração: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N";
}
