class TatuadoresDAO{
    constructor(bd){
        this.bd = bd;
    }
    listarTatuadores(){
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * FROM TATUADORES`, (err, results) => {
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            })
        })
    }
    listarTatauadoresID_T(id_t){
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * TATUADORES WHERE ID_T=${id_t}`, (err, results) => {
                if(err){
                   reject(err)
                }else{
                   resolve(results)
                }
            })
        })

    }
    insereTatuador(NovoTatuador){
        return new Promise((resolve, reject) =>{
            this. bd.run(`INSERT INTO TATUADORES (NOME , EMAIL ,  DDD, TELEFONE, CPF, RUA, CEP, DATA_NASC) VALUES (?,?,?,?,?,?,?,?,?)`,
            [NovoTatuador.nome, NovoTatuador.email, NovoTatuador.senha, NovoTatuador.ddd, NovoTatuador.telefone, NovoTatuador.cpf, NovoTatuador.cep, NovoTatuador.data_nasc],(error)=>{
                if(error){
                   reject(error);
                }else{
                   resolve("TATUADOR INSERIDO COM SUCESSO!")
                }
            })
      
        })

    }
    altereTatuador(Parametros){
        return new Promise((resolve, reject) =>{
            this.bd.run(`UPDATE TATUADORES SET NOME = ?, EMAIL = ? , SENHA = ?, DDD = ?, TELEFONE = ?, CPF = ?, RUA = ?, CEP = ?, DATA_NASC = ? WHERE id = ?`, Parametros ,(error)=>{
            if(error){
                console.log(error)
               reject(error);
            }else{
               resolve("TATUADOR ALTERADO COM SUCESSO!")
            }
        })
    })

    }
    deleteTatuador(id_t){
        return new Promise((resolve, reject) =>{
            this.bd.run(`DELETE FROM TATUADORES WHERE ID = ${id_t}`,(error)=>{
                if(error){
                   reject(error);
                }else{
                   resolve("TATUADOR REMOVIDO COM SUCESSO!")
                }
            })
    })


    }

}

module.exports = TatuadoresDAO;