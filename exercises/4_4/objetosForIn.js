let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
    info2: {
        personagem: "Tio Patinhas",
        origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
        nota: "O último MacPatinhas",
        recorrente: "Sim"
    }
  };                                                                                                                                                                                                                                                                                                      
 
  console.log("Bem-vinda, " + info.personagem);



  for (let chaves in info){   
    console.log(info[chaves] + " e " + info.info2[chaves]);
  }