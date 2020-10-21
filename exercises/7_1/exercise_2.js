const bigWord = phase => {
    let arrStrings = phase.split(' ');
    let maior = 0;
    let result = '';

   for (const word of arrStrings){
      if (word.length > maior){
          maior.length = word.length;
          result = word;
      }
   }
   return result;
}
console.log(bigWord("Antonio foi no banheiro e não sabemos o que aconteceu"));
