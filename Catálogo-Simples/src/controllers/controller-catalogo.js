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

  app.post('/catalogo', function(req, resp) {
    const body = req.body
    const novaTattoo = new Tattoo(body.imagem, body.titulo, body.descricao, body.tamanho, body.preco)

    instanciaDAO.inserirTattoos(novaTattoo)
      .then((resposta) => {
        resp.status(201).json(resposta)
      }).catch((error) => {
        console.log(error)
        resp.json(error)
      })
  })
}

module.exports = catalogoSimples