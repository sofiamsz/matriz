let teclado = require (`prompt-sync`)();
let matriz: string[][] = [];
let linha: number = 3;
let coluna: number = 4;

for (let z = 0; z < linha; z++) {
    matriz[z] = [];

    for (let x = 0; x < coluna; x++){
        let nome: string = teclado(`Digite o nome que vai estar no endereço [${z}, ${x}]
            da matriz: `);
   matriz[z][x] = nome;
 }
}

console.log(matriz);
