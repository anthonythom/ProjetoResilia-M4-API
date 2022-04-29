const Tattoo = require("../models/catalogo-model")
const CatalogoSimplesDAO = require("../dao/catalogo-dao")

const catalogoSimples = (app, bd) => {
  // Instanciando catalogoDAO para puxar os métodos
  const instanciaDAO = new CatalogoSimplesDAO(bd)

  app.get('/catalogo', async (req, resp) => {
    try {
      const buscaCatalogo = await instanciaDAO.listarTattoo()
      resp.send(buscaCatalogo)
    } catch(error) {
      resp.send(error)
    }
  })

  app.post('/catalogo', async (req, resp) => {
    const body = req.body
    const novaTattoo = new Tattoo(body.imagem, body.titulo, body.descricao, body.tamanho, body.preco)

    try {
      const adicionaTattoo = await instanciaDAO.inserirTattoos(novaTattoo)
      resp.send(adicionaTattoo)
    } catch(error) {
      resp.send(error)
    }
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