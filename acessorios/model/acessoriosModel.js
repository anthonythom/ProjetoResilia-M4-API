let id = 0

class Acessorios {
  constructor(imagem, descricao, local, preco) {
    this.id = id++
    this.imagem = imagem
    this.descricao = descricao
    this.local = local
    this.preco = preco
  }
}
module.exports = Acessorios