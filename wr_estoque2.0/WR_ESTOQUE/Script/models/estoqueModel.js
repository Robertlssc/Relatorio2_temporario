import conn from "../config/conn.js";

const tableEstoque = /*sql*/ `
    CREATE TABLE IF NOT EXISTS estoque(
        id INT auto_increment PRIMARY KEY,
        nome_produto varchar(255) not null,
        preco_produto decimal(10,2) not null,
        quantidade int not null,
        imagem_produto varchar(255),
        created_at timestamp default current_timestamp,
        updated_at timestamp default current_timestamp on update current_timestamp
    );
`;

conn.query(tableEstoque, (err, result, field) => {
  if (err) {
    console.error("erro ao criar a tabela" + err.stack);
    return;
  }

  console.log("Tabela [ESTOQUE] criada com sucesso!");
});