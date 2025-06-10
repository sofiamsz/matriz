/* 5- Crie uma matriz 3x3 com entrada manual de números. Em seguida, exiba a matriz na tela. */

let teclado = require (`prompt-sync`)();
let matriz: number[][] = [];
let linha: number = 3;
let coluna: number = 3;

for (let z = 0; z < linha; z++) {
    matriz[z] = [];

    for (let x = 0; x < coluna; x++){
        let nome: number = teclado(`Digite o número que vai estar no endereço [${z}, ${x}]
            da matriz: `);
   matriz[z][x] = nome;
 }
}

console.log(matriz);
