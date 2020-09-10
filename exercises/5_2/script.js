
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
document.querySelector("#pai").firstChild;

// 5-Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").firstChild;

// 6-Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.querySelector("Atenção");

// 7-Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let acessandoTerceiroFilho = document.querySelector.elementoOndeVoceEsta("#terceiroFilho");
console.log(acessandoTerceiroFilho);

// 8-Agora acesse o terceiroFilho a partir de pai.
let paiDoTerceiroFilho = terceiroFilho.parentNode;
