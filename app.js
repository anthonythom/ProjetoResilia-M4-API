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

// Importa banco de dados 
const bd = require("./infra/sqlite-db")

// executa arquivos importados; 
clientes(app, bd)
catalogoSimples(app, bd)
acessorios(app, bd)

app.listen(port, () => {
  console.log(`Servidor rodando na porta 3030`);
})