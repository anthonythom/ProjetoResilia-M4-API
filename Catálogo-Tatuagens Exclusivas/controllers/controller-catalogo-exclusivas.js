const Exclusivas = require("../models/model-catalogo-exclusivas")
const CatalogoExclusivasDAO = require("../dao/catalogo-exclusivas-dao")

const Exclusivas = (app, bd) => {
  const instDAO = new CatalogoExclusivasDAO(bd)

  app.get('/catalogo-exclusivas', async (req, res)=>{
  try{
    const busca = await instDAO
    listaExclusi
  }
  })



}

