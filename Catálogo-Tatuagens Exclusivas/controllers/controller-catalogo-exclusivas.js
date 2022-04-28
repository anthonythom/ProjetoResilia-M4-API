const Exclusivas = require("../models/model-catalogo-exclusivas")
const CatalogoExclusivasDAO = require("../dao/catalogo-exclusivas-dao")

const Exclusivas = (app, bd) => {
  const instDAO = new CatalogoExclusivasDAO
  app.get('/catalogo-simples', (req, res) => {
    instDAO.listarCatalogo()
      .then((resposta) => {
        res.status(200).json(resposta)
      }).catch((error) => {
        res.json(error)
      })

  })
}