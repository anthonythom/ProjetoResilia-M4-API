const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3030

// Usando CORS
app.use(cors())

// body-parser
app.use(express.json())

// importa rotas 
const clientes = require('./Clientes/src/controllers/controller-clientes.js')
const catalogoSimples = require('./Catálogo-Simples/src/controllers/controller-catalogo')
const acessorios = require('./acessorios/controllers/controller-acessorios')
const exclusivas = require('./Catálogo-Tatuagens Exclusivas/controllers/controller-catalogo-exclusivas')
const tatuadores = require('./Tatuadores/controllers/controllers-tatuadores')

// Importa banco de dados 
const bd = require("./infra/sqlite-db")

// executa rotas importadas; 
clientes(app, bd)
catalogoSimples(app, bd)
acessorios(app, bd)
exclusivas(app, bd)
tatuadores(app, bd)

app.listen(port, () => {
  console.log(`Servidor rodando na porta 3030`);
})