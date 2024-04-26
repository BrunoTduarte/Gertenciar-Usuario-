// function User(nome,email) {
//     this.nome  = nome 
//     this.email = email

//     this.exibiriInfos = function(){
//         return `${this.nome}, ${this.email}`
//     }
// }

// const novoUser = new User('Juliana', 'j@J.com')
// console.log(novoUser.exibiriInfos()) // forma de criar um objeto com new 

function Admin(role){
    User.call(this, 'juliana', 'j@j.com')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('admin')
console.log(novoUser.exibirInfos())
console.log(novoUser.role)

