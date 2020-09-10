
// 1-Acesse o elemento elementoOndeVoceEsta.
let ondeEuEstou = document.querySelector("#elementoOndeVoceEsta");
console.log(ondeEuEstou);

// 2-Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let paiOndeEuEstou = document.querySelector("#elementoOndeVoceEsta").parentNode
console.log(paiOndeEuEstou);
paiOndeEuEstou = document.querySelector.style.color = "red";

// 3-Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
let primeiroFilho = document.querySelector("#primeiroFilhoDoFilho");
console.log(primeiroFilho);
primeiroFilho = document.querySelector.innerText = "Inserindo um novo texto no primeiroFilhoDoFilho";

// 4-Acesse o primeiroFilho a partir de pai.
document.querySelector("#pai").firstChild


// 5-Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").firstChild;

// 6-Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.getElementById("elementoOndeVoceEsta").nextSibling;

// 7-Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let acessandoTerceiroFilho = document.querySelector("elementoOndeVoceEsta #terceiroFilho");
console.log(acessandoTerceiroFilho);

// 8-Agora acesse o terceiroFilho a partir de pai.
document.querySelector("#pai #terceiroFilho");

//Crie um irmão para elementoOndeVoceEsta.
let paiDoElementoOndeVcEsta = document.querySelector("#elementoOndeVoceEsta").parentNode
let criandoNovoIrmao = document.createElement("div");
paiDoElementoOndeVcEsta.appendChild(criandoNovoIrmao);

//Crie um filho para elementoOndeVoceEsta.
let novoElemento = document.querySelector("#elementoOndeVoceEsta");
let filhoElementoOndeVoceEsta = document.createElement("li");
novoElemento.appendChild(filhoElementoOndeVoceEsta);

//Crie um filho para primeiroFilhoDoFilho.
let primeiroFilhoDoFilho = document.querySelector("#primeiroFilhoDoFilho");
let filhoPrimeiroFilhoDoFilho = document.createElement("div");
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);let filhoPrimeiroFilhoDoFilho = document.createElement("div");

//A partir desse filho criado, acesse terceiroFilho.
let acessandoPaiTerceiroFilho = document.querySelector("#filhoPrimeiroFilhoDoFilho").parentNode.parentNode
let acessandoTerceiroFilho = document.querySelector(acessandoPaiTerceiroFilho).nextSibling.nextSibling;

//Remova todos os elementos da página, menos pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
document.querySelector("#pai").removeChild("#primeiroFilho #terceiroFilho #quartoEUltimoFilho");
