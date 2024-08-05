import React, { useState } from "react";

import {
  BotaoProximo,
  ContainerPaginaPerfil,
  DetalheFooter,
  ImageCard,
  ImageIcon,
  BackgroundImg,
  PerguntaPefilText,
} from "../Styles/EscolhaPerfilPage.js";
import AdiministradorImg from "../img/Admin.png";
import FuncionarioImg from "../img/Funcio.png";

const Home = () => {
  const [perfilSelecionado, setPerfilSelecionado] = useState(null);

  const SelecionarPerfilManual = (perfil) => {
    setPerfilSelecionado(perfil);
  };
  return (
    <>
      <ContainerPaginaPerfil>
        <PerguntaPefilText>Qual seu perfil?</PerguntaPefilText>
        <ImageCard
          active={perfilSelecionado === "administrador"}
          onClick={() => SelecionarPerfilManual("administrador")}
        >
          <BackgroundImg>
            <ImageIcon
              src={AdiministradorImg}
              alt={"Imagem representativa de administrador"}
            />
          </BackgroundImg>
          Administrador
        </ImageCard>
        <ImageCard
          active={perfilSelecionado === "funcionario"}
          onClick={() => SelecionarPerfilManual("funcionario")}
        >
          <BackgroundImg>
            <ImageIcon
              src={FuncionarioImg}
              alt={"Imagem representativa de funcionário"}
            />
          </BackgroundImg>
          Funcionário
        </ImageCard>
        <BotaoProximo>Próximo</BotaoProximo>
        <DetalheFooter></DetalheFooter>
      </ContainerPaginaPerfil>
    </>
  );
};

export default Home;
