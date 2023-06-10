function calcular() {
    // Obter os valores de entrada
    const massa1 = parseFloat(document.getElementById("massa1").value);
    const massa2 = parseFloat(document.getElementById("massa2").value);
    const gravidade = parseFloat(document.getElementById("gravidade").value);

    // Calcular a aceleração
    const aceleracao = massa2 * gravidade / (massa1 + massa2);

    // Calcular a tensão do fio
    const tensao = massa1 * aceleracao;

    // Exibir o resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "Aceleração: " + aceleracao.toFixed(2) + " m/s²<br>Tensão do Fio: " + tensao.toFixed(2) + " N";
}
