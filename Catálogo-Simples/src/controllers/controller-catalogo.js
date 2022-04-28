const Tattoo = require("../models/catalogo-model")
const CatalogoSimplesDAO = require("../dao/catalogo-dao")

const catalogoSimples = (app, bd) => {
  // Instanciando catalogoDAO para puxar os métodos
  const instanciaDAO = new CatalogoSimplesDAO(bd)

  app.get('/catalogo', function(req, resp) {
    instanciaDAO.listarTattoo()
      .then((resposta) => {
        resp.status(200).json(resposta)
      }).catch((error) => {
        resp.json(error)
      })
  })
}

module.exports = catalogoSimples