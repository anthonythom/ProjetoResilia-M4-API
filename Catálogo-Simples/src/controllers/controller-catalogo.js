const Tattoo = require("../models/catalogo-model")
const CatalogoSimplesDAO = require("../dao/catalogo-dao")

const catalogoSimples = (app, bd) => {
  // Instanciando catalogoDAO para puxar os métodos
  const instanciaDAO = new CatalogoSimplesDAO(bd)

  app.get('/catalogo', async (req, resp) => {
    const buscaCatalogo = await instanciaDAO.listarTattoo()
      .then((resposta) => {
        resp.status(200).json(resposta)
      }).catch((error) => {
        resp.json(error)
      })
  })

  app.post('/catalogo', async (req, resp) => {
    const body = req.body
    const novaTattoo = new Tattoo(body.imagem, body.titulo, body.descricao, body.tamanho, body.preco)

    const adicionaTattoo = await instanciaDAO.inserirTattoos(novaTattoo)
      .then((resposta) => {
        resp.status(201).json(resposta)
      }).catch((error) => {
        console.log(error)
        resp.json(error)
      })
  })

  app.put('/catalogo/:id', async (req, resp) => {
    const userID = req.params.id
    // Novos dados
    const body = req.body
    const novaImg = body.imagem
    const novoTit = body.titulo
    const novaDesc = body.descricao
    const novoTamanho = body.tamanho
    const novoPreco = body.preco 

    try {
      const updateTattoo = await instanciaDAO.atualizaTattoos(userID, novaImg, novoTit, novaDesc, novoTamanho, novoPreco)
      resp.send(updateTattoo)
    } catch(error) {
      resp.send(error)
    }
  })

  app.delete('/catalogo/:id', async (req, resp) => {
    const idUser = req.params.id
    try {
      const deletaRegistro = await instanciaDAO.deletaTattoos(idUser)
      resp.send(deletaRegistro)
    } catch(error) {
      resp.send(error)
    }

  })
}

module.exports = catalogoSimples