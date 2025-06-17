/* 3- Altere o código um(1) desse conteúdo para funcionar com números e ter duas colunas. */
 let teclado = require (`prompt-sync`)();
let matriz: number[][] = [];
let linha: number = 3;
let coluna: number = 2;

for (let z = 0; z < linha; z++) {
    matriz[z] = [];

    for (let x = 0; x < coluna; x++){
        let numero: number = teclado(`Digite o número que vai estar no endereço [${z}, ${x}]
            da matriz: `);
   matriz[z][x] = numero;
 }
}

console.log(matriz);
