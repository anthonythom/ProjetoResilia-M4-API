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
//catálogo simples
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

//catalogo de tatuagens exclusivas

const EXCLUSIVAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "EXCLUSIVAS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "IMAGEM" varchar(300),
    "TITULO" varchar(64),
    "DESCRICAO" varchar(200),
    "TAMANHO" int(10),
    "PRECO" int(15),
    "CATEGORIA" varchar(20)
  );`;

const ADD_EXCLUSIVAS_DATA = `
INSERT INTO EXCLUSIVAS (ID, IMAGEM, TITULO, DESCRICAO, TAMANHO, PRECO, CATEGORIA)
VALUES 
    (1, 'http://3.bp.blogspot.com/-pqr1_yExk1o/UdRczdaitMI/AAAAAAAAAJ0/90vu5wOKU9A/s770/Tatuagens-em-lugares-estranhos-20.jpg', 'Tubarão', 'tubarão engolindo uma pessoa', 20, 500, 'animais'),
    (2, 'https://bemresolvida.com.br/wp-content/uploads/2020/05/Tatuagem-de-cachorro-2-740x740.jpg, 'cachorro', 'retrato do cachorro da cliente', 10, 700, 'animais/retrato'),
    (3, 'https://blog.pajaris.com.br/wp-content/uploads/2020/07/tatuagem-caes.jpg'), 'cachorro', 'retrato do cachorro da cliente', 15, 600, 'animais/retrato'),
    (4, 'https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2021/01/tatuagens-realistas-desenhos-impressionantes-para-te-inspirar-960x658.jpg.webp', 'olho', 'imagem de perfil de um olho', '20', '800', 'realismo'),
    (5, 'https://blog.pajaris.com.br/wp-content/uploads/2020/07/tatugem-para-homenagear-os-c%C3%A3es-750x430.jpg', 'cachorro', 'desenho do cachorro da cliente', 15, 700, 'desenho'),
    (6, 'https://s3-blog.tattoo2me.com/wp-content/uploads/2020/02/1*7H5cDtPp6pgqZsXBeL4kEg.jpeg', 'leão', 'desenho de um leão para cobertura das costas', 60, 4000, 'animais'),
    (7, 'https://s3-blog.tattoo2me.com/wp-content/uploads/2020/02/1*Pb1kb71D0NnCYI3Xuglcig.jpeg', 'leão', 'desenho de leão para fechamento de braço', 40, 2000, 'animais'),
    (8, 'https://letsgeek.com.br/wp-content/uploads/2021/04/137340462_156342756022591_6745089354111183829_n-818x1024.jpg', 'naruto', 'arte criada inspirada no anime naruto', 30, 2000, 'anime'),
    (9, 'https://criticalhits.com.br/wp-content/uploads/2021/10/gambetti.tattoo_231437657_366825928348230_654679779693125168_n-768x768.jpg', 'naruto', 'arte criada inspirada no anime naruto', 25, 900, 'anime'),
    (10, 'https://cdn.men-lifestyle.net/3068363/30_best_black_white_one_piece_tattoo_design_ideas_14.jpg.webp', 'one-piece', 'arte criada inspirada no anime one piece', 90, 5000, 'anime'),
    (11, 'https://static.dicionariodesimbolos.com.br/upload/1e/cf/tatuagem-de-caveira-1_xl.jpeg', 'caveira', 'caveiras empilhadas', 25, 400, 'dark'),
    (12, 'https://i.pinimg.com/564x/8b/e4/64/8be464b91dab9302e2a7b10fde79072e.jpg', 'caveira', 'caveira militar para cobertura de braço', 35, 600, 'dark'),
    (13, 'https://i.pinimg.com/564x/82/13/c9/8213c9f268cccf7098996ff78d74924c.jpg', 'caveira', 'caveira para cobertura completa de braço', 60, 2500, 'dark'),
    (14, 'https://i.pinimg.com/564x/4d/f9/a6/4df9a6d8e959837cc23fa01f1623c3c8.jpg', 'indiano', 'desenho realista de um senhor indiano', 35, 2000, 'realismo'),
    (15, 'https://mega.ibxk.com.br/2018/12/05/tatuagem-05122931304132.jpg?ims=610x', 'ciborg', 'desenho realista ilustrando um braço de ciborg', 40, 4000, 'realismo'),
    (16, 'https://www.tattooers.net/pt/el-loco-tattoo-lounge/tatuagem-retrato-realisticas-peito/14362/', 'retrato', 'retrato baseado em uma foto', 35, 4000, 'retrato'),  
`

function criaTabelaExclusivas() {
    db.run(EXCLUSIVAS_SCHEMA, (error)=> {
       if (error) console.log(`Erro ao criar tabela de tatuagens exclusivas: ${error}`);
    });
}

function populaTabelaExclusivas() {
    db.run(ADD_EXCLUSIVAS_DATA, (error)=> {
       if (error) console.log(`Erro ao popular tabela de tatuagens exclusivas: ${error}`);
    });
}

db.serialize( ()=> {
    criaTabelaClientes();
    populaClientes();
    criaTabelaCata();
    populaTabelaCata();
    criaTabelaAcessorios();
    populaAcessorios();
    criaTabelaExclusivas();
    populaTabelaExclusivas();
});