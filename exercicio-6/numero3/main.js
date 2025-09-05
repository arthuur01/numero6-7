document.addEventListener("DOMContentLoaded", () => {
    let compra_form = document.getElementById('comprar');

    compra_form.addEventListener("submit", (e) => {
        e.preventDefault();

       let pesoInput = document.getElementById('peso').value.replace(',', '.');
        let alturaInput = document.getElementById('altura').value.replace(',', '.');
        let peso = Number(pesoInput);
        let altura = Number(alturaInput);

        let imc = peso / Math.pow(altura, 2);
        
        if(imc < 20){
            window.alert("abaixo do peso");
            return;
        }else if(imc >= 20 && imc < 25){
            window.alert("normal");
            return;
        }else if(imc >= 25 && imc < 30){
            window.alert("Sobrepeso");
            return;
        }else if(imc >= 30 && imc < 35){
            window.alert("Obesidade grau I");
        }else if(imc >= 35 && imc < 40){
            window.alert("Obesidade grau II");
            return;
        }else if(imc > 40){
            window.alert("Obesidade grau III");
            return;
        }
    });
});
