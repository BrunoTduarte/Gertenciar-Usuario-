import User from "./user.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(estudante, curso){
        return `estudante ${estudante} aprovado no curso ${curso} com sucesso.`
    }
}

const novoDocente = new Docente ('mariana', '@M.com', '2009-08-21')
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovarEstudante('juliana', 'js'))