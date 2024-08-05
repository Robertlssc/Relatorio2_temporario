import React from "react";
import { useForm } from "react-hook-form";
import InputWithLabel from "../Components/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonLogin } from "../Styles/Login";
import { object, string } from "yup";
import LogoLogin from "../img/logoBranca.png";

import {
  ContainerPaginaPerfil,
  FormContainer,
  DetalheFooter,
  DetalheTopo,
  Title,
  Subtitle,
  LogoBranca,
  H1BemVindoDeVolta
} from "../Styles/Login";

import userIcon from "../img/user.png";
import emailIcon from "../img/email.png";
import { Link } from "react-router-dom";

const schema = object({
  Email: string()
    .required("Campo obrigatório")
    .email("Formato de e-mail inválido")
    .matches(/@/, "O e-mail deve conter '@'")
    .trim(),
  Password: string()
    .required("Campo obrigatório")
    .min(8, "A senha precisa ter pelo menos 8 caracteres"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>

      <ContainerPaginaPerfil>
        <DetalheTopo>
          <LogoBranca src={LogoLogin} alt="Logo" />
          <H1BemVindoDeVolta>Bem Vindo de volta!</H1BemVindoDeVolta>
        </DetalheTopo>
        <FormContainer>
          <Title>Sign in</Title>
          <Subtitle>faça seu login!</Subtitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputWithLabel
              backgroundImageUrl={emailIcon}
              label="Email:"
              name="Email"
              type="text"
              placeholder="Digite seu email"
              register={register}
              error={errors.Email}
            />
            <InputWithLabel
              backgroundImageUrl={userIcon}
              label="Senha:"
              name="Password"
              type="Password"
              placeholder="Digite sua senha"
              register={register}
              error={errors.Password}
            />
            <Link to="/dashboard">
              <ButtonLogin type="submit">Entrar</ButtonLogin>
            </Link>
          </form>
        </FormContainer>
        <DetalheFooter />
      </ContainerPaginaPerfil>
    </>
  );
};

export default Login;
