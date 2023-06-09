// Classe para representar os quadrados
class Quadrado {
    constructor(nome, massa) {
        this.nome = nome;
        this.massa = massa;
        this.aceleracao = 0;
        this.velocidade = 0;
        this.posicao = 0;
        this.forca = 0;
        this.tracao = 0;
        this.forcaAtrito = 0;
        this.quadradoElement = null;
        this.fioElement = null;
    }

    calcularAceleracao() {
        this.aceleracao;
    }

    atualizarPosicao() {
        this.velocidade += this.aceleracao;
        this.posicao += this.velocidade;

        const containerWidth = container.offsetWidth;
        const quadradoWidth = this.quadradoElement.offsetWidth;

        if (this.posicao < 0) {
            this.posicao = 0;
            this.velocidade = 0;
        } else if (this.posicao > containerWidth - quadradoWidth) {
            this.posicao = containerWidth - quadradoWidth;
            this.velocidade = 0;
        }

        this.quadradoElement.style.left = this.posicao + "px";
    }
}

const container = document.getElementById("container");
const numQuadradosInput = document.getElementById("numQuadrados");

function criarQuadrados() {
    container.innerHTML = "";
    const numQuadrados = parseInt(numQuadradosInput.value);
    const quadrados = [];

    for (let i = 0; i < numQuadrados; i++) {
        const nomeQuadrado = i+1;
        const quadrado = new Quadrado(nomeQuadrado, 1);
        quadrado.forca = 100;
        quadrado.tracao = 100;
        quadrado.forcaAtrito = 100;

        const quadradoElement = document.createElement("div");
        quadradoElement.className = "quadrado";
        quadradoElement.style.left = i * 60 + "px";
        quadradoElement.textContent = nomeQuadrado;

        container.appendChild(quadradoElement);
        quadrado.quadradoElement = quadradoElement;

        if (i > 0) {
            const fioElement = document.createElement("div");
            fioElement.className = "fio";
            container.appendChild(fioElement);
            quadrado.fioElement = fioElement;
        }

        quadrados.push(quadrado);
        atualizarPosicoes(quadrado);
    }
}

function atualizarPosicoes(quadrado) {
    quadrado.calcularAceleracao();
    quadrado.atualizarPosicao();
    reposicionarFios();
    requestAnimationFrame(() => atualizarPosicoes(quadrado));
}

function reposicionarFios() {
    const quadrados = Array.from(document.getElementsByClassName("quadrado"));
    const fios = Array.from(document.getElementsByClassName("fio"));

    for (let i = 1; i < quadrados.length; i++) {
        const fio = fios[i - 1];
        const quadradoEsquerda = quadrados[i - 1];
        const quadradoDireita = quadrados[i];

        const left = quadradoEsquerda.offsetLeft + quadradoEsquerda.offsetWidth;
        const width = quadradoDireita.offsetLeft - left;
        fio.style.left = left + "px";
        fio.style.width = width + "px";
    }
}

function criarInputs(numQuadrados) {
    const container = document.getElementById('inputs-container');
    container.innerHTML = '';

    for (let i = 0; i < numQuadrados; i++) {
        const inputDiv = document.createElement('div');

        const massaLabel = document.createElement('label');
        massaLabel.textContent = 'Massa ' + (i + 1) + ': ';
        const massaInput = document.createElement('input');
        massaInput.type = 'number';
        massaInput.name = 'massa' + i;
        massaInput.required = true;
        inputDiv.appendChild(massaLabel);
        inputDiv.appendChild(massaInput);

        const atritoLabel = document.createElement('label');
        atritoLabel.textContent = 'Coeficiente de Atrito ' + (i + 1) + ': ';
        const atritoInput = document.createElement('input');
        atritoInput.type = 'number';
        atritoInput.name = 'atrito' + i;
        atritoInput.required = true;
        inputDiv.appendChild(atritoLabel);
        inputDiv.appendChild(atritoInput);
        
        const forcaAtritoLabel = document.createElement('label');
        forcaAtritoLabel.textContent = 'Força de Atrito ' + (i + 1) + ': ';
        const forcaAtritoInput = document.createElement('input');
        forcaAtritoInput.type = 'number';
        forcaAtritoInput.name = 'forcaAtrito' + i;
        forcaAtritoInput.required = true;
        inputDiv.appendChild(forcaAtritoLabel);
        inputDiv.appendChild(forcaAtritoInput);

        if (i !== numQuadrados - 1) {
            const tensaoLabel = document.createElement('label');
            tensaoLabel.textContent = 'Tensão ' + (i + 1) + ' e ' + (i + 2) + ': ';
            const tensaoInput = document.createElement('input');
            tensaoInput.type = 'number';
            tensaoInput.name = 'tensao' + i;
            tensaoInput.required = true;
            inputDiv.appendChild(tensaoLabel);
            inputDiv.appendChild(tensaoInput);
        }

        container.appendChild(inputDiv);
    }

    const inputDiv = document.createElement('div');

    const aceleracaoLabel = document.createElement('label');
    aceleracaoLabel.textContent = 'Aceleração: ';
    const aceleracaoInput = document.createElement('input');
    aceleracaoInput.type = 'number';
    aceleracaoInput.name = 'aceleracao';
    aceleracaoInput.required = true;

    const gravidadeLabel = document.createElement('label');
    gravidadeLabel.textContent = 'Gravidade: ';
    const gravidadeInput = document.createElement('input');
    gravidadeInput.type = 'number';
    gravidadeInput.name = 'gravidade';
    gravidadeInput.required = true;

    const forcaLabel = document.createElement('label');
    forcaLabel.textContent = 'Força: ';
    const forcaInput = document.createElement('input');
    forcaInput.type = 'number';
    forcaInput.name = 'forca';
    forcaInput.required = true;

    inputDiv.appendChild(aceleracaoLabel);
    inputDiv.appendChild(aceleracaoInput);
    inputDiv.appendChild(document.createElement('br'));
    inputDiv.appendChild(gravidadeLabel);
    inputDiv.appendChild(gravidadeInput);
    inputDiv.appendChild(document.createElement('br'));
    inputDiv.appendChild(forcaLabel);
    inputDiv.appendChild(forcaInput);


    container.appendChild(inputDiv);
}

function calcularForca() {
    const numQuadrados = parseInt(document.getElementById('numQuadrados').value);
    this.aceleracao = parseFloat(document.getElementsByName('aceleracao')[0].value);
    const gravidade = parseFloat(document.getElementsByName('gravidade')[0].value);
    const forca_dado = parseFloat(document.getElementsByName('forca')[0].value);
    
    let massas = [];
    let atritos = [];
    let tensoes = [];
    let forca_de_atrito_local = [];
    let forca_de_atrito_total = 0;
    
    for (let i = 0; i < numQuadrados; i++) {
        const massa = parseFloat(document.getElementsByName('massa' + i)[0].value);
        const atrito = parseFloat(document.getElementsByName('atrito' + i)[0].value);
        const forcaAtrito = parseFloat(document.getElementsByName('forcaAtrito' + i)[0].value);
        if (i !== numQuadrados - 1) {
            const tensao = parseFloat(document.getElementsByName('tensao' + i)[0].value);
            tensoes.push(tensao);
        }
        massas.push(massa);
        atritos.push(atrito);
        forca_de_atrito_local.push(forcaAtrito);
        forca_de_atrito_total += massa * atrito * gravidade;
    }

    console.log(aceleracao);
    if (!isNaN(aceleracao)) {
        let forca = (massas.reduce((a, b) => a + b, 0) * aceleracao) + forca_de_atrito_total;
        document.getElementsByName('forca')[0].value = forca;
        if (numQuadrados > tensoes.length) {
            for (let i = 0; i < numQuadrados - 1; i++) {
                let tensao;
                if (i === 0) {
                    tensao = (massas[i] * aceleracao) + (atritos[i] * massas[i] * gravidade);
                } else {
                    tensao = (massas[i] * aceleracao) + (atritos[i] * massas[i] * gravidade) + tensoes[i - 1];
                }
                document.getElementsByName('tensao' + i)[0].value = tensao;
                tensoes.push(tensao);
            }
        }
    } else if (!isNaN(forca_dado)) {
        let aceleracao = (forca_dado - forca_de_atrito_total) / massas.reduce((a, b) => a + b, 0);
        document.getElementsByName('aceleracao')[0].value = aceleracao;
        if (numQuadrados > tensoes.length) {
            for (let i = 1; i < numQuadrados - 1; i++) {
                tensao = (massas[i] * aceleracao) + (atritos[i] * massas[i] * gravidade) + tensoes[i - 1];
                document.getElementsByName('tensao' + i)[0].value = tensao;
                tensoes.push(tensao);
            }
        }
    } else if (tensoes.length !== 0) {
        let aceleracao = (tensoes[0] - (atritos[0] * massas[0] * gravidade)) / massas[0];
        document.getElementsByName('aceleracao')[0].value = aceleracao;
        let forca = (massas.reduce((a, b) => a + b, 0) * aceleracao) + forca_de_atrito_total;
        document.getElementsByName('forca')[0].value = forca;
        if (numQuadrados > tensoes.length) {
            for (let i = 1; i < numQuadrados - 1; i++) {
                tensao = (massas[i] * aceleracao) + (atritos[i] * massas[i] * gravidade) + tensoes[i - 1];
                document.getElementsByName('tensao' + i)[0].value = tensao;
                tensoes.push(tensao);
            }
        }
        console.log("forca" + forca_de_atrito_local);
    }
    
    if (forca_de_atrito_local.length !== 0) {
        for (let i = 0; i < numQuadrados; i++) {
            let forcaAtrito = massas[i] * atritos[i] * gravidade;
            document.getElementsByName('forcaAtrito' + i)[0].value = forcaAtrito;
            forca_de_atrito_local.push(forcaAtrito);
        }
    }
    this.forcaAtrito = forca_de_atrito_total;
    this.forca = forca_dado;
}


