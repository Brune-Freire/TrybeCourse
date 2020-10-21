const skills = ['html', 'css', 'javascript', 'template', 'game'];

function phrase(string) {
    const fun = param => (
        `Tryber ${param} aqui!
        
        Tudo bem?`
    )
    let result = `${fun(string)}
    Minhas cinco principais habilidades são:`

    skills.forEach((skill, index) => result = `${result}
    - ${skill}`)

    result = `${result}
    
    #goTrybe
    `
    return result
}

console.log(phrase('Brune'))