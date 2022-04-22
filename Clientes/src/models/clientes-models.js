const { clientes } = require("../infra/bd")

let id = 0
class Cliente {
  constructor(nome, email, senha) {
    this.id = id++
    this.nome = nome
    this.email = email
    this.senha = senha
  }
}
module.exports = Cliente