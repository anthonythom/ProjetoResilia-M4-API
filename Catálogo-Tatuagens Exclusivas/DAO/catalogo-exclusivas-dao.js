class CatalogoExlusivasDAO {
    constructor(bd) {
      this.bd = bd
    }
  
    listarCatalogo() {
      return new Promise((resolve, reject) => {
        this.bd.all('select*from Exclusivas', (error, rows) => {
          error ? reject(`Erro na seleção do banco: ${error}`) : resolve({"Banco de tatuagens exclusivas": rows})
        })
      })
    }
  }

  module.exports= CatalogoExlusivasDAO
  