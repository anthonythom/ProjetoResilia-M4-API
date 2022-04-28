const express = require('express')
const app = express()

// body-parser
app.use(express.json())

// importa rotas 
const clientes = require('./controllers/controller-clientes.js')


// Importa banco de dados fictício
const bd = require("./infra/bd.js")

// executa arquivos importados; 
  // banco de dados (bd) foi integrado e os controllers foram modificados para receberem dados do bd
clientes(app, bd)


app.listen(3030, () => {
  console.log(`Servidor rodando na porta 3030`);
})