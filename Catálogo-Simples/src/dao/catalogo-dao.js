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
}
module.exports = CatalogoSimplesDAO
