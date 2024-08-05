import conn from "../config/conn.js";

const tableVendasDetalhes = /*sql*/ `
CREATE TABLE IF NOT EXISTS venda_itens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    venda_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (venda_id) REFERENCES vendas(id),
    FOREIGN KEY (produto_id) REFERENCES estoque(id)
);
`;

conn.query(tableVendasDetalhes, (err, result, field) => {
  if (err) {
    console.error("Erro ao criar a tabela vendas_detalhes: " + err.stack);
    return;
  }

  console.log("Tabela [VENDAS_DETALHES] criada com sucesso!");
});
