let n = 5;
let simbolo = "*";
let linha = "";
let posicao = n;

for (i = 0; i < n; i += 1){
  for (j = 0; j <= n; j += 1){
    if ( j < posicao){
        linha = linha + " ";
    }else {
        linha = linha + simbolo;
    }
  }
  console.log (linha);
  linha = "";
  posicao = posicao - 1;
}