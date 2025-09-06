document.addEventListener("DOMContentLoaded", () => {
    let calcular_form = document.getElementById('calcular');
    let formulaDiv = document.getElementById('formula');
    let vezesInput = document.getElementById('vezes');
    let btnCalcular = calcular_form.querySelector('button[type="submit"]');
    let btnResetar = calcular_form.querySelector('button[type="reset"]');

    let execucoes = 0;
    let totalExecucoes = 1;

    vezesInput.addEventListener('change', () => {
        totalExecucoes = Number(vezesInput.value) || 1;
        execucoes = 0;
        formulaDiv.innerHTML = '';
        btnCalcular.disabled = false;
    });

    calcular_form.addEventListener("submit", (e) => {
        e.preventDefault();
        let a = Number(document.getElementById('letra_a').value);
        let b = Number(document.getElementById('letra_b').value);
        let c = Number(document.getElementById('letra_c').value);

        execucoes++;
        formulaDiv.innerHTML += `<strong>Execução ${execucoes}:</strong><br>`;

        if (a === 0 && b === 0 && c === 0) {
            formulaDiv.innerHTML += "Igualdade confirmada: 0 = 0<br><br>";
        } else if (a === 0 && b === 0 && c !== 0) {
            formulaDiv.innerHTML += "Coeficientes informados incorretamente<br><br>";
        } else if (a === 0 && b !== 0) {
            let x = -c / b;
            formulaDiv.innerHTML += `Esta é uma equação de primeiro grau.<br>Raiz real: x = ${x.toFixed(2)}<br><br>`;
        } else if (a !== 0) {
            formulaDiv.innerHTML += "Esta é uma equação de segundo grau.<br>";
            let delta = b ** 2 - 4 * a * c;
            formulaDiv.innerHTML += `Δ = ${b}² - 4×${a}×${c} = ${delta}<br>`;
            if (delta < 0) {
                formulaDiv.innerHTML += "Esta equação não possui raízes reais.<br><br>";
            } else if (delta === 0) {
                let x = -b / (2 * a);
                formulaDiv.innerHTML += `Esta equação possui duas raízes reais iguais.<br>Raiz: x = ${x.toFixed(2)}<br><br>`;
            } else {
                let x1 = (-b + Math.sqrt(delta)) / (2 * a);
                let x2 = (-b - Math.sqrt(delta)) / (2 * a);
                formulaDiv.innerHTML += `Esta equação possui duas raízes reais diferentes.<br>`;
                formulaDiv.innerHTML += `x₁ = ${x1.toFixed(2)}<br>x₂ = ${x2.toFixed(2)}<br><br>`;
            }
        }

       
        if (execucoes >= (Number(vezesInput.value) || 1)) {
            btnCalcular.disabled = true;
        }
    });

    calcular_form.addEventListener("reset", (e) => {
        formulaDiv.innerHTML = '';
        execucoes = 0;
        btnCalcular.disabled = false;
    });
});
