let vetor = [];

function lerVetor(){
    const input = document.getElementById("vetorInput").value;
    vetor = input.split(",").map(Number).slice(0,10);
    document.getElementById("vetorOutput").innerText = "Vetor lido: " + vetor;
}

function imprimirVetor(){
    document.getElementById("vetorOutput").innerText = "Vetor: " + vetor.join(", ");
}


function imprimirVetorReverso(){
    document.getElementById("vetorOutput").innerText = "Vetor: " + vetor.slice().reverse().join(", ");
}

function imprimirImpar(){
    let impares = [];
    for(let i = 1; i < vetor.length; i += 2){
        impares.push(vetor[i]);
    }
    document.getElementById("vetorOutput").innerText = "Elementos em posições ímpares: " + impares.join(", ");

}

function somarPar(){
    let soma = 0;
    for(let i = 0; i < vetor.length; i += 2){
        soma += vetor[i];
    }   
    document.getElementById("vetorOutput").innerText = "Soma dos elementos em posições pares: " + soma;
}

function maior(){
    if(vetor.length === 0){
        document.getElementById("vetorOutput").innerText = "Vetor vazio.";
        return;
    }
    let maiorValor = vetor[0];
    for(let i = 1; i < vetor.length; i++){
        if(vetor[i] > maiorValor){
            maiorValor = vetor[i];
        }
    }
    document.getElementById("vetorOutput").innerText = "Maior valor do vetor: " + maiorValor;
}

//Matriz 

let matriz = [];

function lerMatriz(){
    const input = document.getElementById("matrizInput").value;
    const valores = input.split(",").map(Number).slice(0,25);
    matriz = [];
    for(let i = 0; i < 5; i++){
        matriz.push(valores.slice(i*5, (i+1)*5));
    }
    document.getElementById("matrizOutput").innerText = "Matriz lida:\n";
}

function imprimirMatriz(){
    let texto = matriz.map(linha => linha.join(", ")).join("\n");  
    document.getElementById("matrizOutput").innerText = "Matriz:\n" + texto; 
}

function imprimirDiagonalPrincipal(){
    let diagonalPrincipal = [];
    for(let i = 0; i < 5; i++){
        diagonalPrincipal.push(matriz[i][i]);
    }   
    document.getElementById("matrizOutput").innerText = "Diagonal Principal: " + diagonalPrincipal.join(", ");
}

function imprimirDiagonalSecundaria(){
    let diagonalSecundaria = [];
    for(let i = 0; i < 5; i++){
        diagonalSecundaria.push(matriz[i][4 - i]);
    }   
    document.getElementById("matrizOutput").innerText = "Diagonal Secundária: " + diagonalSecundaria.join(", ");
}
function linhasImpares(){
    let linhas = [];    
    for(let i = 1; i < 5; i += 2){
        linhas.push(matriz[i].join(", "));
    }
    document.getElementById("matrizOutput").innerText = "Linhas ímpares:\n" + linhas.join("\n");   
}
function colunasPares(){
    let colunas = [];
    for(let j = 0; j < 5; j += 2){
        let coluna = [];
        for(let i = 0; i < 5; i++){
            coluna.push(matriz[i][j]);
        }
        colunas.push("Coluna " + j + ": " + coluna.join(", "));
    }
    document.getElementById("matrizOutput").innerText = "Colunas pares:\n" + colunas.join("\n");
}

function linhascolunas(){
    let result = [];
    for(let i = 0; i < 5; i += 2){
        let linha = [];
        for(let j = 1; j < 5; j += 2){
            linha.push(matriz[i][j]);
        }
        result.push(linha.join(","));
    }
    document.getElementById("matrizOutput").innerText = "Elementos em linhas pares e colunas ímpares:\n" + result.join("\n");
}