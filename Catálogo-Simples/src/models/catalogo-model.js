let id = 0

class Tattoo {
  constructor(imagem, titulo, descricao, tamanho, preco) {
    this.id = id++
    this.imagem = imagem
    this.titulo = titulo
    this.descricao = descricao
    this.tamanho = tamanho
    this.preco = preco
  }
}
module.exports = Tattoo