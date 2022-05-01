const Acessorios = require("../models/catalogo-model")
const AcessoriosDAO = require("../dao/catalogo-dao")

const acessorios = (app, bd) => {
  // Instanciando catalogoDAO para puxar os métodos
  const instanciaDAO = new AcessoriosDAO(bd)

  app.get('/acessorios', async (_, resp) => {
    try {
      const buscaAcessorio = await instanciaDAO.listarAcessorios()
      resp.send(buscaAcessorio)
    } catch(error) {
      resp.send(error)
    }
  })

  app.post('/acessorios', async (req, resp) => {
    const body = req.body
    const novaAcessorios = new Acessorios(body.imagem, body.descricao, body.local, body.preco)

    try {
      const adicionaAcessorios = await instanciaDAO.inserirAcessorios(novaAcessorios)
      resp.send(adicionaAcessorios)
    } catch(error) {
      resp.send(error)
    }
  })

  app.put('/acessorios/:id', async (req, resp) => {
    const userID = req.params.id
    // Novos dados
    const body = req.body
    const novaImg = body.imagem
    const novaDesc = body.descricao
    const novolocal = body.local
    const novoPreco = body.preco 

    try {
      const updateAcessorios = await instanciaDAO.atualizaAcessorios(userID, novaImg, novaDesc, novolocal, novoPreco)
      resp.send(updateAcessorios)
    } catch(error) {
      resp.send(error)
    }
  })

  app.delete('/acessorios/:id', async (req, resp) => {
    const idUser = req.params.id
    try {
      const deletaRegistro = await instanciaDAO.deletaAcessorios(idUser)
      resp.send(deletaRegistro)
    } catch(error) {
      resp.send(error)
    }
  })
}

module.exports = acessorios