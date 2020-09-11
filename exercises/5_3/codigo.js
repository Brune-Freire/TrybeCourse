const caixaTexto = document.querySelector(".caixa-texto");
const caixaUm = document.querySelector(".caixa1");
const caixaDois = document.querySelector(".caixa2");
const botaoUm = document.querySelector(".botao1");
const botaoDois = document.querySelector(".botao2");

function trocarCorCaixa1(){
  caixaUm.style.background="green";
}
function trocarCorCaixa2(){
  caixaDois.style.background="green";
}

function alterarTexto1(){
  caixaUm.innerText = caixaTexto.value;
}
function alterarTexto2(){
  caixaDois.innerText = caixaTexto.value;
}

function alerta(){
  alert("Go Trybe!")
}
botaoUm.addEventListener("mouseover", trocarCorCaixa1);
botaoDois.addEventListener("mouseover", trocarCorCaixa2);
botaoUm.addEventListener("click", alterarTexto1);
botaoDois.addEventListener("click", alterarTexto2);
caixaTexto.addEventListener("paste", alerta);