// const res = require("express/lib/response")
// const Cliente = require("Clientes/src/models/clientes-models.js")

 const clientes = (app, bd) => {
  app.post('/cliente', (req, res) => {
    res.json({"clientes": bd.usuario})
  })
}
module.exports = clientes
