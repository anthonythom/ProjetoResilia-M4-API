let id = 0

class Exclusivas {
  constructor(imagem, titulo, descricao, tamanho, preco, categoria) {
    this.id = id++
    this.imagem = imagem
    this.titulo = titulo
    this.descricao = descricao
    this.tamanho = tamanho
    this.preco = preco
    this.categoria = categoria
  }
}
module.exports = Exclusivas