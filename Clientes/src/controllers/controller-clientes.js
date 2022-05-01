//PESSOA - CRUD 
const Cliente = require('../models/clientes-models.js')
const ClienteDAO = require('../DAO/cliente-dao')


const cliente = (app,bd)=>{
    const DAOCliente = new ClienteDAO(bd)
    //CREATE DO CRUD - INSERIR REGISTROS
    app.post('/cliente', (req, res) => {
        // pegar dados e armazenar no banco
        const body = req.body
        const ClienteDado = new Cliente(body.nome, body.email, body.senha, body.ddd, body.telefone, body.cpf, body.rua, body.cep, body.data_nasc)
        const data = async() => {
            try {
                const clientes =  await DAOCliente.insereClientes(ClienteDado)
                res.send(clientes)
            }catch(err) {
                res.send(err)
            }
           
        }
        data()
     })
    // READ DO CRUD E EXIBI REGISTROS
    app.get('/cliente', (req, res) => {
        const data = async() => {
            try {
                const clientes =  await DAOCliente.listarClientes()
                res.send(clientes)
            }catch(err) {
                res.send(err)
            }
           
        }
        data()
     
    })
        // READ DO CRUD E EXIBI REGISTROS
        app.get('/cliente/:id', (req, res) => {
            const data = async() => {
                try {
                    const clientes =  await DAOCliente.listarClientesID(req.params.id);
                    res.send(clientes)
                }catch(err) {
                    res.send(err)
                }
               
            }
            data()
           })  
    //UPDATE DO CRUD - ATUALIZAR REGISTROS
    app.put('/pessoa/:id', (req, res) => {
        const body = req.body;
        const id = req.params.id
        const parametros = [body.nome, body.email, body.senha, body.ddd, body.telefone, body.cpf, body.rua, body.cep, body.data_nasc , id]
        const data = async() => {
            try {
                const clientes =  await DAOCliente.altereClientes(parametros)
                res.send(clientes)
            }catch(err) {
                res.send(err)
            }
           
        }
        data()

      
    })
    //DELETE DO CRUD - DELETAR REGISTROS
    app.delete('/cliente/:id', (req, res) => {
        const data = async() => {
            try {
                const clientes =  await DAOCliente.deleteClientes(req.params.id)
                res.send(clientes)
            }catch(err) {
                res.send(err)
            }
           
        }
        data()
        
    })
} 

module.exports = cliente;