document.addEventListener("DOMContentLoaded", () => {
    let compra_form = document.getElementById('info');

    compra_form.addEventListener("submit", (e) => {
        e.preventDefault();

       let x = document.getElementById('x').value;
       
        
        if(x < -2){
            let resultado = 2*x+2;
            window.alert(resultado);
            return;
        }else if(x < 3 && x >= 3){
            resultado = 3;
            window.alert(resultado);
            return;
        }else if(x >= 3){
            resultado = -1 * x;
            window.alert(resultado);
            return;
        }
    });
});
