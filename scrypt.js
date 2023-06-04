function criarInputs(numInputs) {
    const container = document.getElementById('inputs-container');
    container.innerHTML = '';

    for (let i = 0; i < numInputs; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `massa-${i}`;
        const label = document.createElement('Massa');
        label.for = `labeMassa-${i}`;
        label.innerText = `Massa ${i + 1}`;
        container.appendChild(label);
        container.appendChild(input);

    }
}
