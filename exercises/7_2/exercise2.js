const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
 //função para adicionar o turno da manhã na lesson2. 
  const modifyLesson2 = (obj, key, value) => {
     obj[key] = value;
  }

  modifyLesson2(lesson2, 'turno', 'manhã');

  //função para listar as keys de um objeto.
  const returnKey = obj => Object.keys(obj);
  console.table(returnKey(lesson1));
  
  //Crie uma função para mostrar o tamanho de um objeto.
  const objSize = (obj) => Object.keys(obj).length;
  console.log(objSize(lesson1));
  
  //Crie uma função para listar os valores de um objeto. 
  //Essa função deve receber um objeto como parâmetro.
  const returnValue = (obj) => Object.values(obj);
  console.table(returnValue(lesson1));

  const allLessons = Object.assign({},{allLessons, lesson1, lesson2, lesson3});

//Usando o objeto criado no exercício anterior, 
//crie uma função que retorne o número total de estudantes em todas as aulas.
const numberOfStudents = obj => {
    let total = 0;
    const array = Object.Keys(obj);
    for(index in array){
        total += obj[array[index]].numeroEstudantes;
    }
    return total;
}
console.log(numberOfStudents(allLessons));

//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber);

//Crie uma função que verifique se o par (chave / valor) existe na função. 
//Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da 
//chave e o valor da chave.
const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj)
    let equal = false;
    for(index in arr){
        if(arr[i][0] === key && arr[i][1] === value){
            equal = true
        }
        return equal;
    }
}
console.log(verifyPair(lesson2,'professor','Carlos'));

//Crie uma função para contar quantos estudantes assistiram às aulas de matemática
const getNumberOfStudentsMath = obj => {
    let count = 0;
    const array = Object.Keys(obj);
    for(index in array){
        if(obj[array[i]].materia === 'Matemática'){
            count += obj[array[index]].numeroEstudantes;
        }
    }
}