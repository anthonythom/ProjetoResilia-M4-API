class CatalogoSimplesDAO {
  constructor(bd) {
    this.bd = bd
  }

  listarTattoo() {
    return new Promise((resolve, reject) => {
      this.bd.all('SELECT * FROM CATALOGO', (error, rows) => {
        error ? reject(`Erro na seleção do banco: ${error}`) : resolve({"Banco de tatuagens": rows})
      })
    })
  }

  inserirTattoos(novaTattoo) {
    return new Promise((resolve, reject) => {
      this.bd.run('INSERT INTO CATALOGO (IMAGEM, TITULO, DESCRICAO, TAMANHO, PRECO) VALUES (?, ?, ?, ?, ?)', [novaTattoo.imagem, novaTattoo.titulo, novaTattoo.descricao, novaTattoo.tamanho, novaTattoo.preco], 
      (error) => {
        error ? reject(error) : resolve('Nova tatuagem inserida com sucesso')
      })
    })
  }

  atualizaTattoos(id, imagem, titulo, desc, tamanho, preco) {
    return new Promise((resolve, reject) => {
      this.bd.run(`UPDATE CATALOGO SET imagem = ?, titulo = ?, descricao = ?, tamanho = ?, preco = ? where id = ?`, [imagem, titulo, desc, tamanho, preco, id], (error) => {
        error ? reject(error) : resolve(`Dados atualizados`)
      })
    })

  }

  deletaTattoos(id) {
    return new Promise((resolve, reject) => {
      if (id > -1) {
        this.bd.run(`DELETE FROM CATALOGO WHERE ID = ?`, [id], (error) => {
          error ? reject(error) : resolve(`Usuário de ID ${id} deletado`)
        })
      }
    })
  }
}
module.exports = CatalogoSimplesDAO
