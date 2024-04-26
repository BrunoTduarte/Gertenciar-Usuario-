const user = {
    nome: "bruno",
    email: "b@b",
    nascimento:"2021/01/01",
    role:"admin",
    ativo:true, 
        exibirInfo: function() {
            console.log(this.nome,this.email)
        }
}

const admin = {
    nome: "Mariani",
    email: "m@m.com",
    role:"admin",
        criarCurso() {
            console.log('curso criado')
        }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfo()