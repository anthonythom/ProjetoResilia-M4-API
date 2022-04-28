const express = require('express')
const app = express()

// body-parser
app.use(express.json())

// importa rotas 
const clientes = require('./Clientes/src/controllers/controller-clientes.js')
const catalogoSimples = require('./Catálogo-Simples/src/controllers/controller-catalogo')

// Importa banco de dados 
const bd = require("./infra/sqlite-db")

// executa arquivos importados; 
clientes(app, bd)
catalogoSimples(app, bd)

app.listen(3030, () => {
  console.log(`Servidor rodando na porta 3030`);
})