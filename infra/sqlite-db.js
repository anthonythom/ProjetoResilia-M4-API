// Importante o SQLite no arquivo
  // Verbose serve para lidar com possíveis erros
const sqlite3 = require('sqlite3').verbose();

// Criando banco de dados
  // Passar como parâmetro o caminho do arquivo que eu quero criar
const bd = new sqlite3.Database("./database.db");

//Processamento de sinal
    // Encerra o banco, quando terminamos de usar
process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;