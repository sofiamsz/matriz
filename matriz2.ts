let teclado = require (`prompt-sync`)();
let matrizDD: string [][] = new Array(3);

for (let i = 0; i < 3; i++){
    matrizDD [i] = new Array(3);

    for (let j = 0; j < 4; j++){
        let nome: string = teclado(`Digite o nome que vai estar no endereço [${i}, ${j}]
            da matriz: `);
            matrizDD[i][j] = nome;
    }
}

console.log(matrizDD);