document.addEventListener("DOMContentLoaded", () => {
    let compra_form = document.getElementById('info');

    compra_form.addEventListener("submit", (e) => {
        e.preventDefault();

       let codigo = document.getElementById('codigo').value;
       let horas = document.getElementById('horas').value;
       let ana = 45.78;
       let bruna = 60;
       let carlos = 38.99;
       let diogo = 45.78;
       let ester = 45.78;

        
        if(codigo == 1){
            let resultado = ana * horas;
            window.alert(resultado);
            return;
        }else if(codigo == 2){
            resultado = bruna * horas;
            window.alert(resultado);
            return;
        }else if(codigo == 3){
            resultado = carlos * horas;
            window.alert(resultado);
            return;
        }else if(codigo == 4){
            resultado = diogo * horas;
            window.alert(resultado);
            return;
        }else if(codigo == 5){
           resultado = ester * horas;
            window.alert(resultado);
            return;
        }else{
            window.alert("Código não encontrado");
            return;
        }
    });
});
