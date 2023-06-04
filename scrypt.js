function criarInputs(numInputs) {
    var container = document.getElementById('inputs-container');
    container.innerHTML = '';

    for (var i = 0; i < numInputs; i++) {
        var inputDiv = document.createElement('div');

        var massaLabel = document.createElement('label');
        massaLabel.textContent = 'Massa ' + (i + 1) + ': ';
        var massaInput = document.createElement('input');
        massaInput.type = 'number';
        massaInput.name = 'massa' + i;
        massaInput.required = true;

        var atritoLabel = document.createElement('label');
        atritoLabel.textContent = 'Coeficiente de Atrito' + (i + 1) + ': ';
        var atritoInput = document.createElement('input');
        atritoInput.type = 'number';
        atritoInput.name = 'atrito' + i;
        atritoInput.required = true;

        inputDiv.appendChild(massaLabel);
        inputDiv.appendChild(massaInput);
        inputDiv.appendChild(document.createElement('br'));
        inputDiv.appendChild(atritoLabel);
        inputDiv.appendChild(atritoInput);
        inputDiv.appendChild(document.createElement('br'));
        
        

        container.appendChild(inputDiv);
        
    }
    
    var forcaLabel = document.createElement('label');
    forcaLabel.textContent = 'Força: ';
    var forcaOutput = document.createElement('output');
    forcaOutput.name = 'forca';
    inputDiv.appendChild(forcaLabel);
    inputDiv.appendChild(forcaOutput);

    var aceleracaoLabel = document.createElement('label');
    atritoLabel.textContent = 'Aceleracao: ';
    var aceleracaoInput = document.createElement('input');
    aceleracaoInput.type = 'number';
    aceleracaoInput.name = 'aceleracao';
    aceleracaoInput.required = true;
    inputDiv.appendChild(aceleracaoLabel);
    inputDiv.appendChild(aceleracaoInput);
    inputDiv.appendChild(document.createElement('br'));
}
function calcularForca() {
    var numInputs = parseInt(document.getElementById('num-inputs').value);
    var forca = 0;
    for (var i = 0; i < numInputs; i++) {
        var massa = parseFloat(document.getElementsByName('massa' + i)[0].value);
        var atrito = parseFloat(document.getElementsByName('atrito' + i)[0].value);
        forca += massa + atrito;
        
    }
    document.getElementsByName('forca')[0].value = forca;
}