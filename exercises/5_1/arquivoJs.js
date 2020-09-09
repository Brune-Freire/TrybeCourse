let paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

document.getElementById("page-title").innerText = "Novo Título modificado com getElementById!!!";

document.getElementById("second-paragraph").innerText = "Começamos um novo módulo e aprenderemos a manipular elementos utilizando getElement.";

document.getElementById("subtitle").innerText = "Veja as maravilhas do GetElement";


let paragrafo = document.getElementsByTagName("p")
for (let i = 0; i < paragrafo.length; i += 1){
    paragrafo[i].style.fontFamily = 'Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'sans-serif';
}

