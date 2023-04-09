var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const input = lines.shift().split(' ');
const row = parseInt(input[0]);

const isOnlyZero = (v) => v == 0;

let retorno = 'S';
let posDoValorMaisAEsquerda = -1;

let matriz = {};

for (let i = 0; i < row; i++) {
  let M = lines.shift().split(' ');
  for (let j = 0; j < M.length; j++) {
    matriz[i] = matriz[i] || [];
    matriz[i][j] = parseInt(M[j]);
  }
}

for (let linha in matriz) {

  let elementos = matriz[linha];
  let jaAchouParaEssaLinha = false;

  if (elementos.every(isOnlyZero)) {
    let tamanho = Object.keys(matriz).length;
    for (let i = linha; i < tamanho; i++) {
      if (!matriz[i].every(isOnlyZero)) {
        retorno = 'N';
        break;
      }
    }
  } else {
    for (let i = 0; i < elementos.length; i++) {
      if (elementos[i] != 0) { 
        if (!jaAchouParaEssaLinha) {
          jaAchouParaEssaLinha = true;
          if (posDoValorMaisAEsquerda != -1) { 
            if (i <= posDoValorMaisAEsquerda) { 
              retorno = 'N';
              break;
            }
          }
          posDoValorMaisAEsquerda = i;
          break;
        }
      }
    }
  }
}

console.log(retorno);