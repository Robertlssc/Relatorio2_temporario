# Documentação EndPoints API

## Estoque

**Base URL:** `localhost:3333/estoque/`

### Listar Todos os Produtos do Estoque

**Endpoint:** `GET /estoque/`

**Descrição:** Retorna todos os produtos presentes no estoque.

**Resposta:**
```json
[
  {
    "id": 1,
    "nome_produto": "Coxinha",
    "preco_produto": 8.99,
    "quantidade": 20,
    "imagem_produto": "src/image/coxinha.png",
    "created_at": "2024-07-28T10:00:00Z",
    "updated_at": "2024-07-28T10:00:00Z"
  }
]
```

### Listar Um Produto Específico

**Endpoint:** `GET /estoque/:nome_produto`

**Descrição:** Retorna as informações de um produto específico baseado no nome.

**Parâmetros:**
- `nome_produto` (string): Nome do produto a ser consultado.

**Resposta:**
```json
{
  "id": 1,
  "nome_produto": "Coxinha",
  "preco_produto": 8.99,
  "quantidade": 20,
  "imagem_produto": "src/image/coxinha.png",
  "created_at": "2024-07-28T10:00:00Z",
  "updated_at": "2024-07-28T10:00:00Z"
}
```

**404 Not Found:**
```json
{
  "msg": "Produto não encontrado"
}
```

### Deletar Um Produto Específico

**Endpoint:** `DELETE /estoque/delete-produto/:nome_produto`

**Descrição:** Remove um produto específico do estoque baseado no nome.

**Parâmetros:**
- `nome_produto` (string): Nome do produto a ser deletado.

**Resposta:**
**200 OK**
```json
{
  "msg": "Produto deletado com sucesso"
}
```

**404 Not Found:**
```json
{
  "msg": "Produto não encontrado"
}
```

**500 Internal Server Error:**
```json
{
  "msg": "Erro ao deletar o produto"
}
```

### Adicionar Um Produto no Estoque

**Endpoint:** `POST /estoque/add-produto`

**Descrição:** Adiciona um novo produto ao estoque. O banco de dados não aceitará produtos com o mesmo nome.

**Corpo da Requisição:**
```json
{
  "nome_produto": "Coxinha",
  "preco_produto": 8.99,
  "quantidade": 20,
  "imagem_produto": "src/image/coxinha.png"
}
```

**Resposta:**
**201 Created**
```json
{
  "msg": "Produto adicionado ao estoque com sucesso"
}
```

**400 Bad Request:**
```json
{
  "msg": "Nome do produto já está sendo usado"
}
```

**500 Internal Server Error:**
```json
{
  "msg": "Erro ao adicionar o produto ao estoque"
}
```

### Atualizar Informações do Produto

**Endpoint:** `PUT /estoque/edit-produto/:nome_produto`

**Descrição:** Atualiza as informações de um produto no estoque. O banco de dados não aceitará produtos com o mesmo nome.

**Parâmetros:**
- `nome_produto` (string): Nome atual do produto a ser atualizado.

**Corpo da Requisição:**
```json
{
  "nome_produto": "Diplomata",
  "preco_produto": 8.99,
  "quantidade": 20,
  "imagem_produto": "src/image/coxinha.png"
}
```

**Resposta:**
**200 OK**
```json
{
  "msg": "Produto atualizado com sucesso"
}
```

**404 Not Found:**
```json
{
  "msg": "Produto não encontrado"
}
```

**500 Internal Server Error:**
```json
{
  "msg": "Erro ao atualizar o produto"
}
```

## ADMIN

**Base URL:** `localhost:3333/admin/`

### Listar Todos os Admins

**Endpoint:** `GET /admin/`

**Descrição:** Retorna todos os admins cadastrados.

**Resposta:**
```json
[
  {
    "id": 1,
    "nome": "Wendel",
    "email": "email@example.com",
    "cnpj": "1234567891241"
  }
]
```

### Adicionar Um Admin

**Endpoint:** `POST /admin/cadastrar-admin`

**Descrição:** Adiciona um novo admin ao sistema. O banco de dados não aceitará CNPJ ou email já cadastrados.

**Corpo da Requisição:**
```json
{
  "nome": "Wendel",
  "email": "email@example.com",
  "senha": "123",
  "cnpj": "1234567891241"
}
```

**Resposta:**
**201 Created**
```json
{
  "msg": "Admin cadastrado com sucesso"
}
```

**400 Bad Request:**
```json
{
  "msg": "CNPJ ou email já cadastrados"
}
```

**500 Internal Server Error:**
```json
{
  "msg": "Erro ao cadastrar o admin"
}
```

---
## 1. Adicionar uma Nova Venda

**Endpoint:** `POST /vendas`

**Descrição:** Adiciona uma nova venda, registrando o vendedor, a forma de pagamento e os itens vendidos. Atualiza o estoque conforme a quantidade vendida.

### Requisição

**Cabeçalhos:**
- `Content-Type: application/json`

**Corpo da Requisição:**
```json
{
  "vendedor": "João Silva",
  "forma_pagamento": "Cartão de Crédito",
  "itens": [
    {
      "produto_id": 1,
      "quantidade": 2
    },
    {
      "produto_id": 3,
      "quantidade": 1
    }
  ]
}
```

**Campos:**
- `vendedor` (string): Nome do vendedor.
- `forma_pagamento` (string): Forma de pagamento utilizada.
- `itens` (array): Lista de itens vendidos.
  - `produto_id` (integer): ID do produto vendido.
  - `quantidade` (integer): Quantidade do produto vendido.

### Respostas

**201 Created**
```json
{
  "msg": "Venda registrada com sucesso"
}
```

**400 Bad Request**
```json
{
  "msg": "Dados da venda inválidos"
}
```
ou
```json
{
  "msg": "Quantidade insuficiente para o produto ID {produto_id}"
}
```

**500 Internal Server Error**
```json
{
  "msg": "Erro ao registrar a venda"
}
```

## 2. Consultar Todas as Vendas

**Endpoint:** `GET /vendas`

**Descrição:** Consulta todas as vendas registradas, incluindo detalhes dos produtos vendidos.

### Respostas

**200 OK**
```json
[
  {
    "id": 1,
    "vendedor": "João Silva",
    "forma_pagamento": "Cartão de Crédito",
    "valor_total": 59.98,
    "data_venda": "2024-07-28T10:00:00Z",
    "produtos": [
      {
        "nome_produto": "Produto A",
        "quantidade": 2,
        "preco_unidade": 29.99,
        "valor_total": 59.98
      }
    ]
  }
]
```

**500 Internal Server Error**
```json
{
  "msg": "Erro ao acessar as vendas"
}
```

## 3. Consultar Itens de uma Venda Específica

**Endpoint:** `GET /vendas/:venda_id`

**Descrição:** Consulta os itens de uma venda específica, retornando detalhes sobre cada produto vendido.

**Parâmetros:**
- `venda_id` (integer): ID da venda a ser consultada.

### Respostas

**200 OK**
```json
{
  "venda_id": 1,
  "produtos": [
    {
      "nome_produto": "Produto A",
      "quantidade": 2,
      "preco_unidade": 29.99,
      "valor_total": 59.98
    }
  ]
}
```

**404 Not Found**
```json
{
  "msg": "Nenhum item encontrado para a venda especificada"
}
```

**500 Internal Server Error**
```json
{
  "msg": "Erro ao acessar os itens da venda"
}
```

## Considerações Adicionais

### Validações e Erros

- **Dados de Venda Inválidos:** O sistema verifica se todos os campos obrigatórios estão presentes e se os itens são válidos.
- **Quantidade Insuficiente:** Verifica se há quantidade suficiente do produto no estoque antes de completar a venda.
- **Erros de Banco de Dados:** Mensagens de erro são retornadas se houver falhas durante a comunicação com o banco de dados.

### Atualização do Estoque

Após registrar uma venda, o estoque é atualizado para refletir a quantidade vendida. Se a quantidade no estoque for insuficiente, a venda não será registrada.

### Formatos de Data e Hora

As datas e horas são retornadas no formato ISO 8601 (`YYYY-MM-DDTHH:mm:ssZ`).

---

## Gerar Relatório Diário

- **Endpoint**: `/relatorio/relatorio-diario`
- **Método**: `GET`
- **Descrição**: Gera um relatório diário contendo o valor total das vendas e informações sobre os produtos mais e menos vendidos.

### Resposta de Sucesso

- **Código**: `200 OK`
- **Corpo**:
  ```json
  {
    "valor_total_vendas": "Valor Total das Vendas",
    "produto_mais_vendido": {
      "nome_produto": "Nome do Produto Mais Vendido",
      "total_vendido": "Quantidade Vendida"
    },
    "produto_menos_vendido": {
      "nome_produto": "Nome do Produto Menos Vendido",
      "total_vendido": "Quantidade Vendida"
    }
  }
