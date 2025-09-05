document.addEventListener("DOMContentLoaded", () => {
    let compra_form = document.getElementById('comprar');

    compra_form.addEventListener("submit", (e) => {
        e.preventDefault();

        let valor_pago = Number(document.getElementById('valor-pago').value);
        let valor_compra = Number(document.getElementById('valor-compra').value);
        let troco = valor_pago - valor_compra;

        if (valor_pago < valor_compra) {
            window.alert("Valor Insuficiente");
            return;
        } else if (valor_pago === valor_compra) {
            window.alert("Obrigado por comprar! Volte Sempre");
            return;
        }

        let notas = [50, 20, 10, 5, 2, 1];
        let qtnota = {50:0,20:0,10:0,5:0,2:0,1:0};

        for (let i = 0; i < notas.length; i++) {
            let nota = notas[i];
            let quantidade = Math.floor(troco / nota);
            qtnota[nota] = quantidade;
            troco -= quantidade * nota;
        }

        let mensagem = "Troco:\n";
        for (let nota in qtnota) {
            if(qtnota[nota] > 0){
                mensagem += `Notas de R$ ${nota}: ${qtnota[nota]}\n`;
            }
        }

        window.alert(mensagem);
    });
});
