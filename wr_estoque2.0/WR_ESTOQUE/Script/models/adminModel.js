import conn from "../config/conn.js";

const tableAdmin = /*sql*/ `
    CREATE TABLE IF NOT EXISTS admin(
        id varchar(255) PRIMARY KEY not null,
        nome varchar(255) not null,
        email varchar(255) not null,
        senha varchar(255) not null,
        cnpj varchar(13) not null,
        created_at timestamp default current_timestamp,
        updated_at timestamp default current_timestamp on update current_timestamp
    );
`;

conn.query(tableAdmin, (err, result, field) => {
  if (err) {
    console.error("erro ao criar a tabela" + err.stack);
    return;
  }

  console.log("Tabela [Admin] criada com sucesso!");
});