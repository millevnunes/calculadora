function calcular() {
    const input = document.getElementById("numeros").value;
    const numeros = input.split(',').map(Number).sort((a, b) => a - b);

    if (numeros.length === 0 || numeros.includes(NaN)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Média
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const media = soma / numeros.length;

    // Mediana
    const meio = Math.floor(numeros.length / 2);
    let mediana;
    if (numeros.length % 2 === 0) {
        mediana = (numeros[meio - 1] + numeros[meio]) / 2;
    } else {
        mediana = numeros[meio];
    }

    // Moda
    const frequencia = {};
    let maxFreq = 0;
    let moda = [];
    
    numeros.forEach(num => {
        frequencia[num] = (frequencia[num] || 0) + 1;
        if (frequencia[num] > maxFreq) {
            maxFreq = frequencia[num];
            moda = [num];
        } else if (frequencia[num] === maxFreq) {
            moda.push(num);
        }
    });

    // Exibir resultados
    document.getElementById("media").textContent = media.toFixed(2);
    document.getElementById("mediana").textContent = mediana;
    document.getElementById("moda").textContent = moda.length === numeros.length ? "Nenhuma (todos diferentes)" : moda.join(", ");
}