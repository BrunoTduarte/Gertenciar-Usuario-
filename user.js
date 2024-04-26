class User {
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome  = nome,
        this.email = email,
        this.nascimento = nascimento,
        this.role = role || 'estudante',
        this.ativo = true 
    }

    exibirInfos(){
        return '${this.nome}',  '${this.email}'
    }
}

const novoUser = new User( 'juliana', 'j@j.com', '2021-02-09')
console.log(novoUser)