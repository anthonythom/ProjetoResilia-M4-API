const Exclusivas = require("../models/modelCatalogoExclusivas")
const CatalogoExclusivasDAO = require("../dao/catalogoexclusivasdao")


const catalogoExclusivas = (app, bd) => {
  const instDAO = new CatalogoExclusivasDAO(bd)

  app.get('/catalogo-exclusivas', async (req, res)=>{
    try{
      const busca = await instDAO.listarCatalogo()
      res.send(busca)
    }catch(error){
      res.send(error)
    }
  })

  app.get('/catalogo-exclusivas/:id', async (req, res) => {
    const userID = req.params.id 
    try {
      const buscaId = await instDAO.buscaEspecifica(userID)
      res.status(200).send(buscaId)
    } catch(err) {
      res.send(err)
    }
  })

  app.post('/catalogo-exclusivas', async (req, res)=>{
    const body = req.body
    const nova = new Exclusivas(body.imagem, body.titulo, body.descricao, body.tamanho, body.preco, body.categoria)

    try{
      const addExclusiva = await instDAO.inserirExclusiva(nova)
      res.send(addExclusiva)
    } catch(error){
      res.send(error)
    }
  })

  app.put('/catalogo-exclusivas/:id', async (req, res) => {
    const user = req.params.id 
    const body = req.body

    const data = async ()=>{
      try{
        const dadosAtuais = await instDAO.buscaEspecifica(user);
        const catalogo = new Exclusivas(
        body.imagem || dadosAtuais[0].IMAGEM,
        body.titulo || dadosAtuais[0].TITULO,
        body.descricao || dadosAtuais[0].DESCRICAO,
        body.tamanho || dadosAtuais[0].TAMANHO,
        body.preco || dadosAtuais[0].PRECO,
        body.categoria || dadosAtuais[0].CATEGORIA
        )
        const parametros = [catalogo.imagem, catalogo.titulo, catalogo.descricao, catalogo.tamanho, catalogo.preco, catalogo.categoria, user]

        const update = await instDAO.atualizaExclusivas(parametros)
        res.send(update)
      } catch(error){
        res.send(error)
      }
    }
    data()
  })

  app.delete('/catalogo-exclusivas/:id', (req, res)=>{
    const data = async()=>{
      const user = req.params.id 
      try{
        const deleta = await instDAO.deletaExclusivas(user)
        res.send(deleta)
      } catch(error){
        res.send(error)
      }
    }
    data()
  })


}

module.exports = catalogoExclusivas

