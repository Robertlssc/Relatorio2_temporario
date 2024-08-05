import "dotenv/config";
import express from "express";
import conn from "./config/conn.js";

//Importação dos modulos e criação das tabelas
import "./models/estoqueModel.js";
import "./models/adminModel.js";
import "./models/vendasModel.js";
import "./models/detalhesVendas.js";

//Criação das rotas
import estoqueRoutes from "./routes/estoqueRoutes.js";
import userRoutes from "./routes/adminRoutes.js";
import vendasRoutes from "./routes/vendasRoutes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Utilização das rotas

//http://localhost:3333/estoque
app.use("/estoque", estoqueRoutes);
app.use("/admin", userRoutes);
app.use("/vendas", vendasRoutes);

const PORT = process.env.PORT;

app.get("/", (request, response) => {
  response.send("Olá, Mundo!");
});

app.listen(PORT, () => {
  console.log("Servidor rodando na porta: " + PORT);
});
