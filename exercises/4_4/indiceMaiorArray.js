let num = [2, 3, 6, 7, 10, 1];

function indiceDoMaior(num){
  let maior = 0;
  let index = 0;
  for (let i = 0; i <= num.length; i += 1){
    if (num[i] > maior){
      index = i;
      maior = num[i];
    }
  }
return index;
}
console.log(indiceDoMaior(num));