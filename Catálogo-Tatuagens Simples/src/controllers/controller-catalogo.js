const Tattoo = require("../models/catalogo-model")
const CatalogoSimplesDAO = require("../dao/catalogo-dao")

const catalogo = (app, bd) => {
  const instanciaDAO = new CatalogoSimplesDAO
  app.get('/catalogo-simples', (req, resp) => {
    instanciaDAO.listarTattoo()
      .then((resposta) => {
        resp.status(200).json(resposta)
      }).catch((error) => {
        resp.json(error)
      })

  })
}