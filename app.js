const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3030

// Usando CORS
app.use(cors())

// body-parser
app.use(express.json())

// importa rotas 
const clientes = require('./Clientes/src/controllers/controllerClientes')
const catalogoSimples = require('./CatálogoSimples/src/controllers/controllerCatalogo')
const acessorios = require('./acessorios/controllers/controllerAcessorios')
const exclusivas = require('./CatálogoTatuagensExclusivas/controllers/controllerCatalogoExclusivas')
const listaTatuadores = require('./Tatuadores/controllers/controllersTatuadores')

// Importa banco de dados 
const bd = require("./infra/sqlitedb")

// executa rotas importadas; 
clientes(app, bd)
catalogoSimples(app, bd)
acessorios(app, bd)
exclusivas(app, bd)
listaTatuadores(app, bd)

app.listen(port, () => {
  console.log(`Servidor rodando na porta 3030`);
})