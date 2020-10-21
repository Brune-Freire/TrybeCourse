let todosOsEstadosBrasileiros = [
'Acre (AC)',
'Alagoas (AL)',
'Amapá (AP)',
'Amazonas (AM)',
'Bahia (BA)',
'Ceará (CE)',
'Distrito Federal (DF)',
'Espírito Santo (ES)',
'Goiás (GO)',
'Maranhão (MA)',
'Mato Grosso (MT)',
'Mato Grosso do Sul (MS)',
'Minas Gerais (MG)',
'Pará (PA)',
'Paraíba (PB)',
'Paraná (PR)',
'Pernambuco (PE)',
'Piauí (PI)',
'Rio de Janeiro (RJ)',
'Rio Grande do Norte (RN)',
'Rio Grande do Sul (RS)',
'Rondônia (RO)',
'Roraima (RR)',
'Santa Catarina (SC)',
'São Paulo (SP)',
'Sergipe (SE)',
'Tocantins (TO)'];

function inserindoEstados(estado){
    estado = document.querySelector('#estado');
    for(let index = 0; index < todosOsEstadosBrasileiros.length; index += 1){
        let option = document.createElement('option');
        option.innerText = todosOsEstadosBrasileiros[index];
        estado.appendChild(option);
    }
}
inserindoEstados(estado);   

function dia(dia){
    let data = dia.value[0] + dia.value[1];
    if (data < 1 || data > 31){
    alert('Formato do dia inválido!')};
}

function mes(mes){
    let data = mes.value[3] + mes.value[4];
    if (data < 1 || data > 12){
    alert('Formato do mês inválido!')};
}

function ano(ano){
    let data = ano.value[6] + ano.value[7] + ano.value[8] + ano.value[9];
    if (data < 0){
    alert('Formato do ano inválido!')};
}
