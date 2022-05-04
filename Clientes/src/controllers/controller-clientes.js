//PESSOA - CRUD 
const Cliente = require('../models/clientes-models.js')
const ClienteDAO = require('../DAO/cliente-dao')


const cliente = (app, bd) => {
    const DAOCliente = new ClienteDAO(bd)
    //CREATE DO CRUD - INSERIR REGISTROS
    app.post('/cliente', (req, res) => {
        // pegar dados e armazenar no banco
        const body = req.body
        const ClienteDado = new Cliente(body.nome, body.email, body.senha, body.ddd, body.telefone, body.cpf, body.rua, body.cep, body.data_nasc)
        const data = async () => {
            try {
                const clientes = await DAOCliente.insereClientes(ClienteDado)
                res.send(clientes)
            } catch (err) {
                res.send(err)
            }

        }
        data()
    })
    // READ DO CRUD E EXIBI REGISTROS
    app.get('/cliente', (req, res) => {
        const data = async () => {
            try {
                const clientes = await DAOCliente.listarClientes()
                res.send(clientes)
            } catch (err) {
                res.send(err)
            }

        }
        data()

    })
    // READ DO CRUD E EXIBI REGISTROS
    app.get('/cliente/:id', (req, res) => {
        const data = async () => {
            try {
                const clientes = await DAOCliente.listarClientesID(req.params.id);
                res.send(clientes)
            } catch (err) {
                res.send(err)
            }

        }
        data()
    })
    //UPDATE DO CRUD - ATUALIZAR REGISTROS
    app.put('/cliente/:id', (req, res) => {
        const id = req.params.id
        const body = req.body
        const data = async () => {
            try {
                const dadosAtuais = await DAOCliente.listarClientesID(id)
                const dadosNovos = new Cliente(
                    body.nome || dadosAtuais[0].NOME,
                    body.email || dadosAtuais[0].EMAIL,
                    body.senha || dadosAtuais[0].SENHA,
                    body.ddd || dadosAtuais[0].DDD,
                    body.telefone || dadosAtuais[0].TELEFONE,
                    body.cpf || dadosAtuais[0].CPF,
                    body.rua || dadosAtuais[0].RUA,
                    body.cep || dadosAtuais[0].CEP,
                    body.data_nasc || dadosAtuais[0].DATA_NASC
                ) 
                const parametros = [dadosNovos.nome, dadosNovos.email, dadosNovos.senha, dadosNovos.ddd, dadosNovos.telefone, dadosNovos.cpf, dadosNovos.rua, dadosNovos.cep, dadosNovos.data_nasc, id]
            console.log(parametros)
        const atualizaCliente = await DAOCliente.altereClientes(parametros)
        res.send(atualizaCliente)
      } catch(error) {
        res.send(error)
      }
            }
            
     
        data()

    })
    //DELETE DO CRUD - DELETAR REGISTROS
    app.delete('/cliente/:id', (req, res) => {
        const data = async () => {
            try {
                const clientes = await DAOCliente.deleteClientes(req.params.id)
                res.send(clientes)
            } catch (err) {
                res.send(err)
            }

        }
        data()

    })
}

module.exports = cliente;