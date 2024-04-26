import User from 

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
}

const novoAdmin = new Admin ('rodrigo', 'j@j.com', '2029-09-08')
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())