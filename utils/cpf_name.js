const { generate} = require ('gerador-validador-cpf')


const cpfName = () => {
    var cpf = generate({format: true})
    var cpfAndNAme = cpf + ' Hugo Batista'
    return cpfAndNAme
}

const soma = (n1, n2) => {
    var somatorio = n1 + n2
    return somatorio
}

exports.cpfName = cpfName
exports.soma = soma