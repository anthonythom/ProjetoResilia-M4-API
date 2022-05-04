//PESSOA - CRUD 
const Tatuadores = require('../models/tatuadores-models.js')
const TatuadoresDAO = require('../DAO/tatuadores-dao')

const TatuadoresController = (app, bd)=>{
    const DAOTatuador = new TatuadoresDAO(bd)
    
    //CREATE DO CRUD - INSERIR REGISTROS
    app.post('/tatuadores', (req, res) => {
        // Armazenar banco de dados
        const body = req.body
        const TatuadoresDado = new Tatuadores(body.nome, body.email, body.ddd, body.telefone, body.cpf, body.rua, body.cep, body.data_nasc)

        const data = async() => {
            try {
                console.log(TatuadoresDado)
                const tatuadores =  await DAOTatuador.insereTatuadores(TatuadoresDado)
                res.send(tatuadores)
            }catch(err) {
                res.send(err)
            }
           
        }
        data()
     })
    // READ DO CRUD E EXIBI REGISTROS
    app.get('/tatuadores', (req, res) => {
        const data = async () => {
            try {
                const tatuadores = await DAOTatuador.listarTatuadores()
                res.send(tatuadores)
            } catch(err) {
                res.send(err)
            }     
        }
        data()
     
    })
        // READ DO CRUD E EXIBI REGISTROS
        app.get('/tatuadores/:id_t', (req, res) => {
            const data = async() => {
                try {
                    const tatuadores =  await DAOTatuador.listartatuadoresID(req.params.id);
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
        const parametros = [body.nome, body.email, body.ddd, body.telefone, body.cpf, body.rua, body.cep, body.data_nasc , id_t]
        const data = async() => {
            try {
                const tatuadores =  await DAOTatuador.altereTatuadores(parametros)
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
                const tatuadores =  await DAOTatuador.deleteTatuadores(req.params.id)
                res.send(tatuadores)
            }catch(err) {
                res.send(err)
            }
           
        }
        data()
        
    })
} 

module.exports = TatuadoresController;