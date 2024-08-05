import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid";

export const getAdmin = (request, response) => {
  const sql = `SELECT * FROM admin`;
  conn.query(sql, (err, data) => {
    if (err) {
      response.status(500).json({ msg: "Erro ao acessar os admins" });
      return;
    }
    const Admins = data;
    response.status(200).json(Admins);
  });
};


export const addAdmin = (request, response) =>{
  
  const { nome, email, senha, cnpj } = request.body;
  

  if (!nome || !email || !senha || !cnpj) {
    response.status(400).json({ msg: "Algum campo está vazio, verifique e tente novamente" });
    return;
}


const checkEmailSql = `SELECT * FROM admin WHERE ?? = ?`;
const insertCheckEmail = ["email",email];

conn.query(checkEmailSql, insertCheckEmail, (err, data) => {
  if (err) {
      response.status(500).json({ msg: "Erro ao verificar o email existente", error: err.message });
      return;
  }

  if (data.length > 0) {
      response.status(400).json({ msg: "Email já está sendo usado, coloque outro email e tente novamente" });
      return;
  }

  const checkCnpjSql = `SELECT * FROM admin WHERE ?? = ?`;
  const insertCheckCnpj = ["cnpj", cnpj];

  conn.query(checkCnpjSql, insertCheckCnpj, (err, data) => {
      if (err) {
          response.status(500).json({ msg: "Erro ao verificar o CNPJ existente"});
          return;
      }

      if (data.length > 0) {
          response.status(400).json({ msg: "CNPJ já está sendo usado, coloque outro CNPJ e tente novamente" });
          return;
      }

      const id = uuidv4();

  const sql = `insert into admin (??, ??, ??, ??, ??) values (?,?, ?, ?, ?)` 

  const insertSql = ["id","nome", "email", "senha", "cnpj", id, nome, email, senha, cnpj]

  conn.query(sql, insertSql, (err, data)=>{
      if (err) {
          console.error(err);
          response.status(500).json({ msg: "Erro ao cadastrar o admin no banco de dados" });
          return;
        }
        response.status(201).json({msg: "Admin Cadastrado"})
      });
    });
});
};


export const unicoAdmin = (request, response) => {
  const { id } = request.params;

  const sql = `select * from admin where ?? = ?`;
  const insertData = ["id", id];

  conn.query(sql, insertData, (err, data)=>{
      if(err){
          console.error(err);
    response.status(500).json({ msg: "Erro ao buscar o Admin" });
    return; 
      }
      if (data.length === 0) {
          response.status(404).json({ msg: "Admin não Encontrada" });
          return;
        }
        response.status(200).json(data)

  })
};