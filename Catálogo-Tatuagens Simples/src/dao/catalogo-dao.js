class CatalogoSimplesDAO {
  constructor(bd) {
    this.bd = bd
  }

  listarTattoo() {
    return new Promise((resolve, reject) => {
      this.bd.all('SELECT * FROM CATALOGO-SIMPLES', (error, rows) => {
        error ? reject('Erro na seleçãod o banco') : resolve({"Banco de tatuagens": rows})
      })
    })
  }
}
module.exports = CatalogoSimplesDAO