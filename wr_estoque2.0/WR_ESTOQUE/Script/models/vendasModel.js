import conn from "../config/conn.js";

const tableVendas = /*sql*/ `
    CREATE TABLE IF NOT EXISTS vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vendedor VARCHAR(255) NOT NULL,
    forma_pagamento VARCHAR(255) NOT NULL,
    valor_total DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

conn.query(tableVendas, (err, result, field) => {
  if (err) {
    console.error("Erro ao criar a tabela vendas: " + err.stack);
    return;
  }

  console.log("Tabela [VENDAS] criada com sucesso!");
});
