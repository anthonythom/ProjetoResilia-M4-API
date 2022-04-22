const res = require("express/lib/response")
const Cliente = require("Clientes/src/models/clientes-models.js")

 const clientes = (app, bd) => {
  app.get('/cliente', function(req, res) {
    respo.json({"clientes": bd.usuario})
  })}