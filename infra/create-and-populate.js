/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

//CLIENTES
const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "SENHA" varchar(64),
    "DDD" int(2),
    "TELEFONE" varchar(9),
    "CPF" int(11),
    "RUA" varchar(64),
    "CEP" int(8),
    "DATA_NASC" date null 
  );`;

  const ADD_CLIENTES_DATA  = `
INSERT INTO CLIENTES (ID, NOME, EMAIL, SENHA, DDD, TELEFONE, CPF, RUA, CEP, DATA_NASC)
VALUES
    (1, 'Bruno José Blanquez', 'brunp@bol.com.br', '*******', '11', '940028922', '56923423965', 'rua chuvas de verao', '65485010', '30/05/2001'),
    (2, 'Hugo Legramandi', 'hugo2@gmail.com', '********', '12', '940428922', '56223423465', 'rua gotas de verao', '65585000', '30/06/2001'),
    (3, 'Rafael Silva', 'contatorafa@yahoo.com', '********', '98', '950028922', '56923433465', 'rua noite de verao', '67485000', '30/04/2001') `

function criaTabelaClientes() {
    db.run(CLIENTES_SCHEMA, (erro)=> {
       if (erro) console.log(`Erro ao criar tabela de clientes: ${erro}`);
    });
}
function populaClientes() {
    db.run(ADD_CLIENTES_DATA, (erro)=> {
       if (erro) console.log(`Erro ao popular tabela de clientes: ${erro}`);
    });
}

//==== Usuários
const CATALOGO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CATALOGO" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "IMAGEM" varchar(300),
    "TITULO" varchar(64),
    "DESCRICAO" varchar(200),
    "TAMANHO" int(10),
    "PRECO" int(15)
  );`;

const ADD_CATALOGO_DATA = `
INSERT INTO CATALOGO (ID, IMAGEM, TITULO, DESCRICAO, TAMANHO, PRECO)
VALUES 
    (1, 'https://i.pinimg.com/564x/90/c1/dc/90c1dca5341e4bc2b564d85c82d3d26c.jpg', 'Itachi', 'Itachi como membro da Akatsuki', 9, 650),
    (2, 'https://i.pinimg.com/564x/cc/dc/28/ccdc2877cc2558fcab8fa18b88f02442.jpg', 'Sharingan Itachi', 'Um olhar especial', 9, 750),
    (3, 'https://i.pinimg.com/564x/b2/61/ee/b261ee8e825edf86192c54f691097399.jpg', 'Sharingan Itachi e corvos', 'Itachi usando seu jutso e corvos característicos', 20, 1250),
    (4, 'https://cdn.shopify.com/s/files/1/0217/4045/3952/products/Small-Digimon-Digivice-Cartoon-Temporary-Tattoo-Sticker-Design-Idea-Inner-Arm_720x.jpg?v=1562565317', 'Digivice', 'Um digivice para um digiescolhido', 5, 350),
    (5, 'https://outsons.com/wp-content/uploads/2019/10/2019-10-17-22.12.11-2156723779665278306_animetattoos.jpg', 'Sora', 'Sora, protagonista de Kingdom Hearts', 20, 900),
    (6, 'https://i.pinimg.com/564x/da/4b/ee/da4bee50412c37ecd21ec5f5891d2a1c.jpg', 'Angemon', 'Linha evolutiva do Angemon, representado em cores', 17, 1050),
    (7, 'https://i.pinimg.com/564x/dc/bf/1e/dcbf1eb721729c6e34b8e80ed4ff2e07.jpg', '4 elementos Avatar', 'Os 4 elementos de Avatar, em um design sutil', 20, 800),
    (8, 'https://i.pinimg.com/564x/61/e8/57/61e857e295ed15685039e276537dd148.jpg', '4 elementos Avatar (colorida)', 'Os 4 elementos de Avatar, representados com cores', 19, 950),
    (9, 'https://i.pinimg.com/564x/ac/b5/46/acb546131381603b2101ff9aea4d84ec.jpg', 'Planador Aang', 'O planador da tribo do Ar, característico do Avatar Aang', 12, 850),
    (10, 'https://i.pinimg.com/564x/ea/96/45/ea9645d37b4138adfdfebf3e7726c73e.jpg', 'Keyblade e flores', 'Uma keyblade com flores características da série', 9, 750),
    (11, 'https://i.pinimg.com/564x/bb/b4/3f/bbb43fa3a7698046efea28b0a62bcbdd.jpg', 'Keyblade e portal', 'Uma keyblade e um portal para outro mundo', 5, 650),
    (12, 'https://i.pinimg.com/564x/2e/bb/4f/2ebb4fff8b3237293c4996911234ac30.jpg', 'Sora', 'Sora em traços finos', 7, 400),
    (13, 'https://i.pinimg.com/564x/0d/66/87/0d6687b1d2c3f789e1a8d6c0b81050ef.jpg', 'Tanjirou', 'Tanjirou com um olhar ameaçador', 15, 850),
    (14, 'https://i.pinimg.com/564x/8a/eb/09/8aeb0971bb5b3276330840c3e45e726b.jpg', 'Tanjiro, Zenitsu e Inosuke', 'Representação do olhar de Tanjiro, Zenitsu e Inosuke', 23, 900),
    (15, 'https://i.pinimg.com/564x/32/bf/44/32bf445f1f2efafbab68e6273ccbe717.jpg', 'Jack Frost', 'Jack Frost e a lua', 10, 450),
    (16, 'https://i.pinimg.com/564x/cf/0e/ef/cf0eef3257004385814e0fefe34d9f37.jpg', 'Máscara dos Kindred', 'Nunca um sem o outro', 13, 800),
    (17, 'https://i.pinimg.com/564x/e4/9c/fc/e49cfc5c314e03994c44c8fae1c9ea34.jpg', 'Reliquias da morte - origem', 'Reliquias da morte e seus primeiros donos', 7, 450)
`

function criaTabelaCata() {
    db.run(CATALOGO_SCHEMA, (error)=> {
       if (error) console.log(`Erro ao criar tabela de catalogo: ${error}`);
    });
}

function populaTabelaCata() {
    db.run(ADD_CATALOGO_DATA, (error)=> {
       if (error) console.log(`Erro ao popular tabela de catalogo: ${error}`);
    });
}

//criando a tabela brincos e piercings
const ACESSORIOS_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "ACESSORIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "IMAGEM" varchar(400),
    "DESCRICAO" varchar(200),
    "LOCAL" varchar(100),
    "PRECO" int
  );`

  //populando a tabela brincos e piercings
  const ADD_ACESSORIOS_DATA  = `
    INSERT or IGNORE INTO ACESSORIOS (ID, IMAGEM, DESCRICAO, LOCAL, PRECO)
    VALUES (1, 'https://raw.githubusercontent.com/anthonythom/ProjetoResilia-M4-API/main/imagens/img-piercings-brincos/brincos.jpg', 'Imagem de conjutos de brincos e piercings', 'orelha',  30)`

//função que cria a tabela brincos e piercings
function criaTabelaAcessorios() {
    db.run(ACESSORIOS_SCHEMA, (erro)=> {
       if (erro) console.log(`Erro ao criar tabela de brincos e piercings: ${erro}`);
    });
}

//função que popula a tabela brincos e piercings
function populaAcessorios() {
    db.run(ADD_ACESSORIOS_DATA, (erro)=> {
       if (erro) console.log(`Erro ao popular tabela de catalogo: ${erro}`);
    });
}

//TATUADORES

const  TATUADORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "TATUADORES" (
    "ID-T" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "DDD" int(2),
    "TELEFONE" varchar(9),
    "CPF" int(11),
    "RUA" varchar(64),
    "CEP" int(8),
    "DATA_NASC" date null 
  );`;
//POPULANDO TATUADORES
  const ADD_TATUADORES_DATA  = `
  INSERT INTO TATUADORES (ID-T, NOME, EMAIL, DDD, TELEFONE, CPF, RUA, CEP, DATA_NASC)
  VALUES
      (100B, 'Bruce Wayne', 'batman@dc.com.br', '*******', '99', '940028922', '56923423965', 'rua de Gothan', '65485010', '30/05/2001'),
      (200V, 'James Howleat', 'logan2@gmail.com', '********', '98', '940428922', '56223423465', 'rua Melhor naquilo que faz', '65585000', '30/06/1737'),
      (300P, 'Guen Stacy', 'spider@yahoo.com', '********', '97', '950028922', '56923433465', 'rua Marvel', '67485000', '30/04/2001') `
  
      function criaTabelaTatuadores() {
        db.run(TATUADORES_SCHEMA, (erro)=> {
           if (erro) console.log(`Erro ao criar tabela de tatuadores: ${erro}`);
        });
    }
    function populaTatuadores() {
        db.run(ADD_TATUADORES_DATA, (erro)=> {
           if (erro) console.log(`Erro ao popular tabela de tatuadores: ${erro}`);
        });
    }
    

db.serialize( ()=> {
   criaTabelaClientes();
   populaClientes();
   criaTabelaCata();
   populaTabelaCata();
   criaTabelaAcessorios();
   populaAcessorios();
   criaTabelaTatuadores
   populaTatuadores
});