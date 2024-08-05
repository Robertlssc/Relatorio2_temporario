import React from "react";
import { Link } from 'react-router-dom';
import { GlobalButtonLogin, GlobalButtonCadastro } from "../Styles/TelaInicial";

export const BotaoCadastrar = () => {
  return (
    <Link to="/login">
      <GlobalButtonCadastro>Cadastre-se</GlobalButtonCadastro>
    </Link>
  );
};

export const BotaoEntrar = () => {
  return (
    <Link to="/login">
      <GlobalButtonLogin>Entrar</GlobalButtonLogin>
    </Link>
  );
};
