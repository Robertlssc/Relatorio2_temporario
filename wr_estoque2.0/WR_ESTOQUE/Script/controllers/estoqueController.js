import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid";

export const getEstoque = (request, response) => {
  const sql = `SELECT * FROM estoque`;
  conn.query(sql, (err, data) => {
    if (err) {
      response.status(500).json({ msg: "Erro ao acessar o estoque" });
      return;
    }
    const estoque = data;
    response.status(200).json(estoque);
  });
};

export const addProduto = (request, response) =>{
    const { nome_produto, preco_produto, quantidade, imagem_produto } = request.body;


if(!nome_produto || !preco_produto || !quantidade || !imagem_produto){
    response.status(400).json({msg: "Algum campo está vazio, verifique e tente novamente"})

}


const checkSql = `select * from estoque where ?? = ?`;
const insertCheckSql = ["nome_produto", nome_produto]

conn.query(checkSql, insertCheckSql, (err,data)=>{
    if(data.length > 0){
        response.status(400).json({msg: "Nome do produto já está sendo usado, coloque outro nome e tente novamente"})
        return;
    }

    const sql = `insert into estoque (??, ??, ??, ??) values (?, ?, ?, ?)` 

    const insertSql = ["nome_produto", "preco_produto", "quantidade", "imagem_produto", nome_produto, preco_produto, quantidade, imagem_produto]

    conn.query(sql, insertSql, (err, data)=>{
        if (err) {
            console.error(err);
            response.status(500).json({ msg: "Erro ao cadatrar o produto no nosso banco de dados" });
            return;
          }
          response.status(201).json({msg: "produto adicionado no banco de dados com sucesso"})

    })

})}

export const unicoProduto = (request, response) => {
    const { nome_produto } = request.params;

    const sql = `select * from estoque where ?? = ?`;
    const insertData = ["nome_produto", nome_produto];

    conn.query(sql, insertData, (err, data)=>{
        if(err){
            console.error(err);
      response.status(500).json({ msg: "Erro ao buscar o produto" });
      return; 
        }
        if (data.length === 0) {
            response.status(404).json({ msg: "Produto não Encontrada" });
            return;
          }
          response.status(200).json(data)

    })
  };

  export const editarProduto = (request, response) =>{
    const {produto} = request.params

    const { nome_produto, preco_produto, quantidade, imagem_produto } = request.body;

    //Validação
    if(!nome_produto || !preco_produto || !quantidade || !imagem_produto){
        response.status(400).json({msg: "Algum campo está vazio, verifique e tente novamente"})
    }

    const checkSql = `SELECT * FROM estoque WHERE ?? = ?`;
    const insertData = ["nome_produto", produto];

    conn.query(checkSql, insertData, (err, data)=>{
        if (err) {
            console.error(err);
            response.status(500).json({ msg: "Erro ao buscar os produtos" });
            return;
          }
          if (data.length === 0) {
            return response.status(404).json({ msg: "produto não encontrado" });
          }

          const upadateSql = /*sql*/ `UPDATE estoque SET
          ?? = ?, ?? = ?, ?? = ?, ?? = ?
          WHERE ?? = ?`;
    
        const checkSqlData = [
          "nome_produto",
          nome_produto,
          "preco_produto",
          preco_produto,
          "quantidade",
          quantidade,
          "imagem_produto",
           imagem_produto,
          "nome_produto",
          produto,
        ];
        conn.query(upadateSql, checkSqlData, (err) => {
            if (err) {
              console.error(err);
              response.status(500).json({ msg: "Erro ao atualizar o produto" });
              return;
            }
            response.status(200).json({ msg: "produto atualizado" });
          });
    })
  }

  export const deletarProduto = (request, response) => {
    const { nome_produto } = request.params; 

    const deleteSql = /*sql*/ `delete from estoque where ?? = ?`;
    const insertData = ["nome_produto", nome_produto];

    conn.query(deleteSql, insertData, (err, info) => {
        if (err) {
            console.error(err);
            response.status(500).json({ message: "Erro ao deletar produto" });
        }
        console.log(info);
        if (info.affectedRows === 0) {
            response.status(404).json({ messagae: "produto não encontrado" });
            return;
        }

        response.status(200).json({ message: "produto selecionado foi deletado" });
    });
};


export const gerarRelatorioDiario = (request, response) => {
  // Consultar valor total de todas as vendas
  const valorTotalVendasSql = `
    SELECT SUM(valor_total) AS valor_total
    FROM vendas
  `;
  
  // Consultar o produto mais vendido
  const produtoMaisVendidoSql = `
    SELECT e.nome_produto, SUM(vi.quantidade) AS total_vendido
    FROM venda_itens vi
    JOIN estoque e ON vi.produto_id = e.id
    GROUP BY e.nome_produto
    ORDER BY total_vendido DESC
    LIMIT 1
  `;
  
  // Consultar o produto menos vendido
  const produtoMenosVendidoSql = `
    SELECT e.nome_produto, SUM(vi.quantidade) AS total_vendido
    FROM venda_itens vi
    JOIN estoque e ON vi.produto_id = e.id
    GROUP BY e.nome_produto
    ORDER BY total_vendido ASC
    LIMIT 1
  `;
  
  // Executar as consultas
  conn.query(valorTotalVendasSql, (err, resultadoValorTotal) => {
    if (err) {
      return response.status(500).json({ msg: "Erro ao acessar o valor total das vendas" });
    }
    
    conn.query(produtoMaisVendidoSql, (err, resultadoProdutoMaisVendido) => {
      if (err) {
        return response.status(500).json({ msg: "Erro ao acessar os produtos vendidos" });
      }
      
      conn.query(produtoMenosVendidoSql, (err, resultadoProdutoMenosVendido) => {
        if (err) {
          return response.status(500).json({ msg: "Erro ao acessar o produto menos vendido" });
        }
        
        const valorTotalVendas = resultadoValorTotal[0] ? resultadoValorTotal[0].valor_total : 0;
        
        const produtoMaisVendido = resultadoProdutoMaisVendido.length > 0
          ? resultadoProdutoMaisVendido[0]
          : { nome_produto: "Nenhum produto", total_vendido: 0 };
        
        const produtoMenosVendido = resultadoProdutoMenosVendido.length > 0
          ? resultadoProdutoMenosVendido[0]
          : { nome_produto: "Nenhum produto", total_vendido: 0 };
        
        response.status(200).json({
          valor_total_vendas: valorTotalVendas,
          produto_mais_vendido: {
            nome_produto: produtoMaisVendido.nome_produto,
            total_vendido: produtoMaisVendido.total_vendido
          },
          produto_menos_vendido: {
            nome_produto: produtoMenosVendido.nome_produto,
            total_vendido: produtoMenosVendido.total_vendido
          }
        });
      });
    });
  });
};