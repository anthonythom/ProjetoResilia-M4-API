/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

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

const BRINCOS_PIERCINGS = `
CREATE TABLE IF NOT EXISTS "BRINCOS_PIERCINGS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "IMAGEM" varchar(400),
    "DESCRICAO" varchar(200),
    "LOCAL" varchar(100),
    "PRECO" int
  );`



function criaTabelaCata() {
    db.run(CATALOGO_SCHEMA, (error)=> {
       if (error) console.log(`Erro ao criar tabela de catalogo + ${error}`);
    });
}

function populaTabelaCata() {
    db.run(ADD_CATALOGO_DATA, (error)=> {
       if (error) console.log(`Erro ao popular tabela de catalogo + ${error}`);
    });
}

db.serialize( ()=> {
    criaTabelaCata();
    populaTabelaCata();
});