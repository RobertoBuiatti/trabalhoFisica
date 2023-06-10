function criarInputs(numInputs) {
    const container = document.getElementById('inputs-container');
    container.innerHTML = '';

    for (let i = 0; i < numInputs; i++) {
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

        if (i !== numInputs - 1) {
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
    const numInputs = parseInt(document.getElementById('num-inputs').value);
    const aceleracao = parseFloat(document.getElementsByName('aceleracao')[0].value);
    const gravidade = parseFloat(document.getElementsByName('gravidade')[0].value);
    const forca_dado = parseFloat(document.getElementsByName('forca')[0].value);

    let massas = [];
    let atritos = [];
    let tensoes = [];
    let forca_de_atrito_local = [];
    let forca_de_atrito_total = 0;

    for (let i = 0; i < numInputs; i++) {
        const massa = parseFloat(document.getElementsByName('massa' + i)[0].value);
        const atrito = parseFloat(document.getElementsByName('atrito' + i)[0].value);
        const forcaAtrito = parseFloat(document.getElementsByName('forcaAtrito' + i)[0].value);
        if (i !== numInputs - 1) {
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
        if (numInputs > tensoes.length) {
            for (let i = 0; i < numInputs - 1; i++) {
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
        if (numInputs > tensoes.length) {
            for (let i = 1; i < numInputs - 1; i++) {
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
        if (numInputs > tensoes.length) {
            for (let i = 1; i < numInputs - 1; i++) {
                tensao = (massas[i] * aceleracao) + (atritos[i] * massas[i] * gravidade) + tensoes[i - 1];
                document.getElementsByName('tensao' + i)[0].value = tensao;
                tensoes.push(tensao);
            }
        }
        console.log("forca" + forca_de_atrito_local);
    }

    // if (massas.length !== 0) {
    //     if ((forca_de_atrito_local.length !== 0) && (!isNaN(gravidade))) {
    //         for (let i = 0; i < numInputs; i++) {
    //             let massa = forca_de_atrito_local[i] / (gravidade * atritos[i]);
    //             document.getElementsByName('massa' + i)[0].value = massa;
    //             massas.push(massa);
    //         }
    //     }
    // }


    if (forca_de_atrito_local.length !== 0) {
        for (let i = 0; i < numInputs; i++) {
            let forcaAtrito = massas[i] * atritos[i] * gravidade;
            document.getElementsByName('forcaAtrito' + i)[0].value = forcaAtrito;
            forca_de_atrito_local.push(forcaAtrito);
        }
    }
}

