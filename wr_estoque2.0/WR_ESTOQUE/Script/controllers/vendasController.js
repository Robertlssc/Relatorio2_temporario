import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid";

export const adicionarVenda = (request, response) => {
  const { vendedor, forma_pagamento, itens } = request.body;
  let valor_total = 0;

  if (!vendedor || !forma_pagamento || !itens || !Array.isArray(itens)) {
    return response.status(400).json({ msg: "Dados da venda inválidos" });
  }

  const precos = {};
  const validaEstoquePromessas = [];

  for (const item of itens) {
    if (!item.produto_id || !item.quantidade) {
      return response.status(400).json({ msg: "Dados dos itens inválidos" });
    }

    validaEstoquePromessas.push(
      new Promise((resolve, reject) => {
        const estoqueSql = `SELECT preco_produto, quantidade FROM estoque WHERE ?? = ?`;
        const insertEstoqueSql = ["id", item.produto_id];

        conn.query(estoqueSql, insertEstoqueSql, (err, data) => {
          if (err) {
            return reject(err);
          }
          if (data.length === 0) {
            return reject(
              new Error(`Produto com ID ${item.produto_id} não encontrado`)
            );
          }
          const produto = data[0];
          const preco = parseFloat(produto.preco_produto);
          const quantidadeEstoque = parseInt(produto.quantidade);
          const quantidadeVenda = parseInt(item.quantidade);

          if (
            isNaN(preco) ||
            isNaN(quantidadeEstoque) ||
            isNaN(quantidadeVenda)
          ) {
            return reject(new Error("Dados inválidos do produto"));
          }

          if (quantidadeVenda > quantidadeEstoque) {
            return reject(
              new Error(
                `Quantidade insuficiente para o produto ID ${item.produto_id}`
              )
            );
          }

          valor_total += quantidadeVenda * preco;
          precos[item.produto_id] = preco;

          resolve();
        });
      })
    );
  }

  Promise.all(validaEstoquePromessas)
    .then(() => {
      const vendaSql = `INSERT INTO vendas (?? , ??, ??) VALUES (?, ?, ?)`;
      const insertVendaSql = [
        "vendedor",
        "forma_pagamento",
        "valor_total",
        vendedor,
        forma_pagamento,
        valor_total,
      ];
      conn.query(vendaSql, insertVendaSql, (err, result) => {
        if (err) {
          return response
            .status(500)
            .json({ msg: "Erro ao registrar a venda" });
        }

        const vendaId = result.insertId;

        const itemSql = `INSERT INTO venda_itens (venda_id, produto_id, quantidade, preco) VALUES ?`;
        const valores = itens.map((item) => [
          vendaId,
          item.produto_id,
          parseInt(item.quantidade),
          precos[item.produto_id],
        ]);

        conn.query(itemSql, [valores], (err) => {
          if (err) {
            return response
              .status(500)
              .json({ msg: "Erro ao registrar itens da venda" });
          }

          const updateEstoquePromises = itens.map((item) => {
            return new Promise((resolve, reject) => {
              const estoqueSql = `UPDATE estoque SET quantidade = quantidade - ? WHERE id = ?`;
              conn.query(
                estoqueSql,
                [parseInt(item.quantidade), item.produto_id],
                (err) => {
                  if (err) {
                    return reject(err);
                  }
                  resolve();
                }
              );
            });
          });

          Promise.all(updateEstoquePromises)
            .then(() =>
              response.status(201).json({ msg: "Venda registrada com sucesso" })
            )
            .catch((err) => {
              response.status(500).json({ msg: "Erro ao atualizar o estoque" });
            });
        });
      });
    })
    .catch((err) => {
      response.status(400).json({ msg: err.message });
    });
};

export const consultarVendas = (request, response) => {
  const vendasSql = `SELECT id, vendedor, forma_pagamento, valor_total, created_at AS data_venda FROM vendas`;
  conn.query(vendasSql, (err, vendas) => {
    if (err) {
      return response.status(500).json({ msg: "Erro ao acessar as vendas" });
    }

    const vendasDetalhadas = [];

    const processarVendas = async () => {
      for (const venda of vendas) {
        const itensSql = `SELECT e.nome_produto, vi.quantidade, vi.preco, (vi.quantidade * vi.preco) AS valor_total 
                                  FROM venda_itens vi 
                                  JOIN estoque e ON vi.produto_id = e.id 
                                  WHERE vi.venda_id = ?`;
        await new Promise((resolve, reject) => {
          conn.query(itensSql, [venda.id], (err, itens) => {
            if (err) {
              return reject(err);
            }

            vendasDetalhadas.push({
              id: venda.id,
              vendedor: venda.vendedor,
              forma_pagamento: venda.forma_pagamento,
              valor_total: venda.valor_total,
              data_venda: venda.data_venda,
              produtos: itens.map((item) => ({
                nome_produto: item.nome_produto,
                quantidade: item.quantidade,
                preco_unidade: item.preco,
                valor_total: item.valor_total,
              })),
            });

            resolve();
          });
        });
      }

      response.status(200).json(vendasDetalhadas);
    };

    processarVendas().catch((err) => {
      response.status(500).json({ msg: "Erro ao processar as vendas" });
    });
  });
};

export const consultarItensVenda = (request, response) => {
  const { venda_id } = request.params;

  const itensSql = `SELECT e.nome_produto, vi.quantidade, vi.preco, (vi.quantidade * vi.preco) AS valor_total
                      FROM venda_itens vi
                      JOIN estoque e ON vi.produto_id = e.id
                      WHERE vi.venda_id = ?`;
  conn.query(itensSql, [venda_id], (err, itens) => {
    if (err) {
      return response
        .status(500)
        .json({ msg: "Erro ao acessar os itens da venda" });
    }

    if (itens.length === 0) {
      return response
        .status(404)
        .json({ msg: "Nenhum item encontrado para a venda especificada" });
    }

    response.status(200).json({
      venda_id,
      produtos: itens.map((item) => ({
        nome_produto: item.nome_produto,
        quantidade: item.quantidade,
        preco_unidade: item.preco,
        valor_total: item.valor_total,
      })),
    });
  });
};

export const gerarRelatorioDiario = (request, response) => {
  const valorTotalVendasSql = `
  SELECT SUM(valor_total) AS valor_total
  FROM vendas
`;

  const estoqueSql = `
  SELECT id, nome_produto
  FROM estoque
`;

  const vendasPorProdutoSql = `
  SELECT e.id, e.nome_produto, SUM(vi.quantidade) AS total_vendido
  FROM venda_itens vi
  JOIN estoque e ON vi.produto_id = e.id
  GROUP BY e.id, e.nome_produto
`;

  conn.query(valorTotalVendasSql, (err, resultadoValorTotal) => {
    if (err) {
      return response.status(500).json({ msg: "Erro ao acessar o valor total das vendas" });
    }

    conn.query(estoqueSql, (err, estoque) => {
      if (err) {
        return response.status(500).json({ msg: "Erro ao acessar o estoque" });
      }

      conn.query(vendasPorProdutoSql, (err, vendasPorProduto) => {
        if (err) {
          return response.status(500).json({ msg: "Erro ao acessar as vendas por produto" });
        }

        const valorTotalVendas = resultadoValorTotal[0] ? resultadoValorTotal[0].valor_total : 0;

        const vendasMap = vendasPorProduto.reduce((map, produto) => {
          map[produto.id] = produto.total_vendido;
          return map;
        }, {});

        let produtoMaisVendido = { nome_produto: "Nenhum produto", total_vendido: 0 };
        let produtoMenosVendido = { nome_produto: "Nenhum produto", total_vendido: Infinity };

        for (const produto of estoque) {
          const totalVendido = vendasMap[produto.id] || 0;

          if (totalVendido > produtoMaisVendido.total_vendido) {
            produtoMaisVendido = {
              nome_produto: produto.nome_produto,
              total_vendido: totalVendido
            };
          }

          if (totalVendido < produtoMenosVendido.total_vendido) {
            produtoMenosVendido = {
              nome_produto: produto.nome_produto,
              total_vendido: totalVendido
            };
          }
        }

        response.status(200).json({
          valor_total_vendas: valorTotalVendas,
          produto_mais_vendido: produtoMaisVendido,
          produto_menos_vendido: produtoMenosVendido
        });
      });
    });
  });
};
