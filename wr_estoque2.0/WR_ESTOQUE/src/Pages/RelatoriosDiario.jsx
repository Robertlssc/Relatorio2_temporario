import React, { useState } from "react";
import {
  RelatoriosContainerDiv,
  RelatoriosContainer,
  NavbarWrapper,
  RelatoriosBotaoPaginasDiv,
  RelatoriosBotaoPaginasButton,
  RelatoriosContainerPaginasDiv,
  RelatoriosFlechaImage,
} from "../Styles/RelatoriosDiario.js";
import Navbar from "../Components/navbar.jsx";
import arrowIcon from "../img/arrowIcon.png";

const RelatoriosDiario = () => {
  const [botaoSelecionado, setBotaoSelecionado] = useState("Relatorios");

  const selecionarBotaoManual = (pagina) => {
    setBotaoSelecionado(pagina);
  };

  return (
    <>
      <RelatoriosContainerDiv>
        <RelatoriosContainer>
          <RelatoriosFlechaImage
            src={arrowIcon}
            alt="Seta para voltar de página"
          />
          <RelatoriosBotaoPaginasDiv>
            <RelatoriosBotaoPaginasButton
              active={botaoSelecionado === "Relatorios"}
              onClick={() => selecionarBotaoManual("Relatorios")}
            >
              Relatório
            </RelatoriosBotaoPaginasButton>
            <RelatoriosBotaoPaginasButton
              active={botaoSelecionado === "Registrar"}
              onClick={() => selecionarBotaoManual("Registrar")}
            >
              Registrar
            </RelatoriosBotaoPaginasButton>
          </RelatoriosBotaoPaginasDiv>
        </RelatoriosContainer>

        {/* Renderização Condicional */}
        {botaoSelecionado === "Relatorios" && (
          <RelatoriosContainerPaginasDiv>
            <h2>Relatórios</h2>
            <p>Conteúdo para Relatórios aqui...</p>
          </RelatoriosContainerPaginasDiv>
        )}
        {botaoSelecionado === "Registrar" && (
          <RelatoriosContainerPaginasDiv>
            <h2>Registrar</h2>
            <p>Conteúdo para Registrar aqui...</p>
          </RelatoriosContainerPaginasDiv>
        )}
        <NavbarWrapper>
          <Navbar />
        </NavbarWrapper>
      </RelatoriosContainerDiv>
    </>
  );
};

export default RelatoriosDiario;
