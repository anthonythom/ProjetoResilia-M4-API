//PESSOA - CRUD 
const Tatuadores = require('../models/tatuadoresModels')
const TatuadoresDAO = require('../DAO/tatuadoresDao')


const TatuadoresLista = (app,bd)=>{
    const DAOTatuador = new TatuadoresDAO(bd)
    //CREATE DO CRUD - INSERIR REGISTROS

    app.post('/tatuadores', (req, res) => {
        // Armazenar banco de dados
        const body = req.body
        const TatuadoresDado = new Tatuadores(body.nome, body.email, body.ddd, body.telefone, body.cpf, body.rua, body.cep, body.data_nasc)
        const data = async() => {
            try {
                const tatuadores =  await DAOTatuadores.insereTatuadores(TatuadoresDado)
                res.send(tatuadores)
            }catch(err) {
                res.send(err)
            }
           
        }
        data()
     })
    // READ DO CRUD E EXIBI REGISTROS
    app.get('/tatuadores', (req, res) => {
        const data = async() => {
            try {
                const tatuadores =  await DAOTatuadores.listarTatuadores()
                res.send(tatuadores)
            }catch(err) {
                res.send(err)
            }
           
        }
        data()
     
    })
        // READ DO CRUD E EXIBI REGISTROS
        app.get('/tatuadores/:id_t', (req, res) => {
            const data = async() => {
                try {
                    const tatuadores =  await DAOTatuadores.listartatuadoresID(req.params.id);
                    res.send(tatuadores)
                }catch(err) {
                    res.send(err)
                }
               
            }
            data()
           })  
    //UPDATE DO CRUD - ATUALIZAR REGISTROS
    app.put('/pessoa/:id_t', (req, res) => {
        const body = req.body;
        const id_t = req.params.id_t
        const parametros = [body.nome, body.email, body.ddd, body.telefone, body.cpf, body.rua, body.cep, body.data_nasc , id]
        const data = async() => {
            try {
                const tatuadores =  await DAOTatuadores.altereTatuadores(parametros)
                res.send(tatuadores)
            }catch(err) {
                res.send(err)
            }
           
        }
        data()

      
    })
    //DELETE DO CRUD - DELETAR REGISTROS
    app.delete('/tatuadores/:id', (req, res) => {
        const data = async() => {
            try {
                const tatuadores =  await DAOTatuadores.deleteTatuadores(req.params.id)
                res.send(tatuadores)
            }catch(err) {
                res.send(err)
            }
           
        }
        data()
        
    })
} 

module.exports = TatuadoresLista;