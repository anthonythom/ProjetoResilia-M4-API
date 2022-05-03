const Exclusivas = require("../models/model-catalogo-exclusivas")
const CatalogoExclusivasDAO = require("../dao/catalogo-exclusivas-dao")
const { response } = require("express")

const catalogoExclusivas = (app, bd) => {
  const instDAO = new CatalogoExclusivasDAO(bd)

  app.get('/catalogo-exclusivas', async (req, res)=>{
  try{
    const busca = await instDAO
    listarCatalogo()
    res.send(busca)
  }catch(error){
    res.send(error)
  }
  })

  app.get('/catalogo-exclusivas:id', async (req, res)=>{
    const user = req.params.instDAO
    try{
      const buscaId = await instDAO
      buscaEspecifica(user)
      res.send(buscaId)
    } catch(error){
      res.send(error)
    }
  })

  app.post('/catalogo-exclusivas', async (req, res)=>{
    const body = req.body
    const nova = new Exclusivas(body.imagem, body.titulo, body.descricao, body.tamanho, body.preco, body.categoria)

    try{
      const addExclusiva = await instDAO
      inserirExclusiva(novaExclusiva)
      res.send(addExclusiva)
    } catch(error){
      res.send(error)
    }
  })

  app.put('/catalogo-exclusivas:id', async (req, res)=>{
    const user = req.params.id 
    const body = req.body

    const data = async()=>{
      try{
        const dados = await instDAO
        buscaEspecifica(user);
        const catalogo = new Exclusivas(
        body.imagem || dados[0].IMAGEM,
        body.titulo || dados[0].TITULO,
        body.descricao || dados[0].DESCRICAO,
        body.tamanho || dados[0].TAMANHO,
        body.preco || dado[0].PRECO,
        body.categoria || dados[0].CATEGORIA
        )
        const parametros = [catalogo.imagem, catalogo.titulo, catalogo.descricao, catalogo.tamanho, catalogo.preco, catalogo.categoria, user]
        const update = await instDAO
        atualizaExclusivas(parametros)
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
        const deleta = await instDAO
        deletaExclusivas(user)
        res.send(deleta)
      } catch(error){
        res.send(error)
      }
    }
    data()
  })


}

module.exports = catalogoExclusivas

