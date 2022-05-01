class ClienteDAO{
    constructor(bd){
        this.bd = bd;
    }
    listarClientes(){
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * FROM CLIENTES`, (err, results) => {
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            })
        })
    }
    listarClientesID(id){
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * CLIENTES WHERE ID=${id}`, (err, results) => {
                if(err){
                   reject(err)
                }else{
                   resolve(results)
                }
            })
        })

    }
    insereClientes(NovoCliente){
        return new Promise((resolve, reject) =>{
            this. bd.run(`INSERT INTO CLIENTES (NOME , EMAIL , SENHA, DDD, TELEFONE, CPF, RUA, CEP, DATA_NASC) VALUES (?,?,?,?,?,?,?,?,?)`,
            [NovoCliente.nome, NovoCliente.email, NovoCliente.senha, NovoCliente.ddd, NovoCliente.telefone, NovoCliente.cpf, NovoCliente.cep, NovoCliente.data_nasc],(error)=>{
                if(error){
                   reject(error);
                }else{
                   resolve("CLIENTE INSERIDO COM SUCESSO!")
                }
            })
      
        })

    }
    altereClientes(Parametros){
        return new Promise((resolve, reject) =>{
            this.bd.run(`UPDATE CLIENTES SET NOME = ?, EMAIL = ? , SENHA = ?, DDD = ?, TELEFONE = ?, CPF = ?, RUA = ?, CEP = ?, DATA_NASC = ? WHERE id = ?`, Parametros ,(error)=>{
            if(error){
                console.log(error)
               reject(error);
            }else{
               resolve("CLIENTE ALTERADO COM SUCESSO!")
            }
        })
    })

    }
    deleteClientes(id){
        return new Promise((resolve, reject) =>{
            this.bd.run(`DELETE FROM CLIENTES WHERE ID = ${id}`,(error)=>{
                if(error){
                   reject(error);
                }else{
                   resolve("CLIENTE DELETADO COM SUCESSO!")
                }
            })
    })


    }

}

module.exports = ClienteDAO;