class CatalogoExlusivasDAO {
    constructor(bd) {
      this.bd = bd
    }
  
    listarCatalogo() {
      return new Promise((resolve, reject)=>{
        this.bd.all('select*from EXCLUSIVAS', (error, rows)=>{
          error? reject(`Erro na seleção do banco ${error}`):resolve({"Banco de tatuagens":rows})
        })
      })
    }
  

  buscaEspecifica(id){
    return new Promise((resolve, reject)=>{
      this.bd.all(`select*from EXCLUSIVAS where id = ?`, [id], (error, rows)=>{
        error?reject(console.log(error)):resolve(rows)
      })
    })
  }

  inserirExclusiva(novaExclusiva){
    return new Promise((resolve, reject) => {
      this.bd.run('INSERT INTO EXCLUSIVAS (IMAGEM, TITULO, DESCRICAO, TAMANHO, PRECO, CATEGORIA) VALUES (?, ?, ?, ?, ?, ?)', [novaExclusiva.imagem, novaExclusiva.titulo, novaExclusiva.descricao, novaExclusiva.tamanho, novaExclusiva.preco, novaExclusiva.categoria], 
      (error) => {
        error ? reject(error) : resolve('Nova tatuagem inserida com sucesso')
      })
    })
  }

  atualizaExclusivas(atualizacao){
    return new Promise((resolve, reject)=>{
      this.bd.run(`update EXCLUSIVAS set imagem=?, titulo=?, descricao=?, tamanho=?, preco=?, catalogo=?, where id=?`, atualizacao, (error)=>{
        error?reject(error):resolve(`Usuário de ID ${id} deletado`)
      })
    })
  }

  deletaExclusivas(id){
    return new Promise((resolve, reject)=>{
      if(id>-1){
        this.bd.run(`delete from EXCLUSIVAS where id =?`, [id], (error)=>{
          error?reject(error):resolve(`usuário de id ${id} deletado`)
        })
      }
    })
  }

}

module.exports= CatalogoExlusivasDAO
  