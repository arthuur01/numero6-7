document.addEventListener("DOMContentLoaded", () => {
    let calcular_form = document.getElementById('calcular');
    let formulaDiv = document.getElementById('formula');

    
    let numeros = [];

    calcular_form.addEventListener("submit", (e) => {
        e.preventDefault();
        let numero = Number(document.getElementById('numero').value);
        if (isNaN(numero)) {
            window.alert("Insira um número válido.");
            return;
        }
    numeros.push(numero);
    let maior = Math.max(...numeros);
    formulaDiv.innerHTML = `Maior número até agora: <b>${maior}</b>`;
    });

    calcular_form.addEventListener("reset", (e) => {
        
    numeros = [];
    formulaDiv.innerHTML = '';
    });
});
