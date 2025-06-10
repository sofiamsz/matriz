/* 6-Crie uma matriz 3x3 com entrada manual de números aceitando somente números de 0 a 9.
Em seguida, exiba a matriz na tela. */

let teclado = require (`prompt-sync`)();
let matriz: number[][] = [];
let linha: number = 3;
let coluna: number = 3;
let numeros: number = 0;

for (let z = 0; z < linha; z++) {
    matriz[z] = [];

    for (let x = 0; x < coluna; x++){
        let nome: number = teclado(`Digite o número de 0 a 9 que vai estar no endereço [${z}, ${x}]
            da matriz: `);
   matriz[z][x] = nome;
   
 }
}

if (numeros <= 9){
    console.log (matriz);
}  else {
    console.log (`Os números não podem entrar na matriz.`);
}