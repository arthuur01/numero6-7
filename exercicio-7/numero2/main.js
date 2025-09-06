document.addEventListener("DOMContentLoaded", () => {
    let calcular_form = document.getElementById('calcular');
    let formulaDiv = document.getElementById('formula');

    
    let soma = 0;
    let count = 0;
    let numeros = [];

    calcular_form.addEventListener("submit", (e) => {
        e.preventDefault();
        let numero = Number(document.getElementById('numero').value);
        if (isNaN(numero)) {
            window.alert("Insira um número válido.");
            return;
        }
        soma += numero;
        count++;
        numeros.push(numero);
        let media = soma / count;
        
        formulaDiv.innerHTML = `Média = (${numeros.join(' + ')}) / ${count} = <b>${media.toFixed(2)}</b>`;
    });

    calcular_form.addEventListener("reset", (e) => {
        
        soma = 0;
        count = 0;
        numeros = [];
        formulaDiv.innerHTML = '';
    });
});
