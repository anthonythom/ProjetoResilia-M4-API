let id = 0
class Cliente {
  constructor(nome, email, senha, ddd, telefone, cpf, rua, cep, data_nasc) {
    this.id = id++
    this.nome = nome
    this.email = email
    this.senha = senha
    this.ddd = ddd 
    this.telefone = telefone 
    this.cpf = cpf 
    this.rua = rua 
    this.cep = cep
    this.data_nasc = data_nasc
  }
}
module.exports = Cliente