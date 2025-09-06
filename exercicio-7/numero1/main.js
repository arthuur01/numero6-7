document.addEventListener("DOMContentLoaded", () => {
    let comprar_form = document.getElementById('comprar');
    comprar_form.addEventListener("submit", (e) => {
        e.preventDefault();

        let repeatCount = Number(document.getElementById('repetir').value);
        if (isNaN(repeatCount) || repeatCount < 1) {
            window.alert("Insira um número válido de execuções.");
            return;
        }

        for (let exec = 0; exec < repeatCount; exec++) {
            let valor_pago = Number(document.getElementById('valor-pago').value);
            let valor_compra = Number(document.getElementById('valor-compra').value);
            let troco = valor_pago - valor_compra;

            if (valor_pago < valor_compra) {
                window.alert("Valor Insuficiente");
                continue;
            } else if (valor_pago === valor_compra) {
                window.alert("Obrigado por comprar! Volte Sempre");
                continue;
            }

            let notas = [50, 20, 10, 5, 2, 1];
            let qtnota = {50:0,20:0,10:0,5:0,2:0,1:0};

            for (let i = 0; i < notas.length; i++) {
                let nota = notas[i];
                let quantidade = Math.floor(troco / nota);
                qtnota[nota] = quantidade;
                troco -= quantidade * nota;
            }

            let mensagem = `Execução ${exec+1}:\nTroco:\n`;
            for (let nota in qtnota) {
                if(qtnota[nota] > 0){
                    mensagem += `Notas de R$ ${nota}: ${qtnota[nota]}\n`;
                }
            }

            window.alert(mensagem);
        }
    });
});
