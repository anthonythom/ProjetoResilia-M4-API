//criando o modelo para listar, inserir, atualizar e deletar os dados do banco de dados.
class AcessorioDAO {
    constructor(bd) {
      this.bd = bd
    }

    //função que lista dados do bd
    listarAcessorios() {
      return new Promise((resolve, reject) => {
        this.bd.all('SELECT * FROM ACESSORIOS', (error, rows) => {
          error ? reject(`Erro na seleção do banco: ${error}`) : resolve({"Tabela de acessórios": rows})
        })
      })
    }
  
    //função que insere dados do bd
    inserirAcessorios(acessorio) {
      return new Promise((resolve, reject) => {
        this.bd.run('INSERT INTO ACESSORIOS (IMAGEM, DESCRICAO, LOCAL, PRECO) VALUES (?, ?, ?, ?)', [acessorio.imagem, acessorio.descricao, acessorio.local, acessorio.preco], 
        (error) => {
          error ? reject(error) : resolve('Novo acessório inserida com sucesso')
        })
      })
    }
    
    //função que att dados do bd
    atualizaAcessorios(id, imagem, desc, local, preco) {
      return new Promise((resolve, reject) => {
        this.bd.run(`UPDATE ACESSORIOS SET imagem = ?, descricao = ?, tamanho = ?, preco = ? where id = ?`, [imagem, desc, local, preco, id], (error) => {
          error ? reject(error) : resolve(`Dados atualizados`)
        })
      })
    }
    
    //função que deleta dados do bd
    deletaAcessorios(id) {
      return new Promise((resolve, reject) => {
        if (id > -1) {
          this.bd.run(`DELETE FROM ACESSORIOS WHERE ID = ?`, [id], (error) => {
            error ? reject(error) : resolve(`Acessório de ID ${id} deletado`)
          })
        }
      })
    }
  }

  //exportando o modelo
  module.exports = AcessorioDAO
  