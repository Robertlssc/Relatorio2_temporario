import { Link } from "react-router-dom";

import {
  DashboardContainer,
  DashboardContainerDiv,
  DashBoardContainerProps,
  DashboardBox,
  DashboardTitle,
  DashboardImageSuport,
  DashboardTextProps,
  DashboardImageComment,
  DashboardImageCoin,
  DashboardDailyGain,
  DashboardItemsDiv,
  DashboardImageIconDiv,
  DashboardCircleItem,
  DashboardPizzaGrafic,
  DashboardConfigPerfil,
  NavbarWrapper,
} from "../Styles/Dashboard.js";

import PizzaGraficIcon from "../img/dashboard/graficoPizza.png";
import commentImage from "../img/dashboard/comentIcon.png";
import suportImage from "../img/dashboard/SuportPerfil.png";
import imageIcon from "../img/dashboard/imageReferenceIcon.png";
import coinImage from "../img/dashboard/moeda.png";
import Navbar from "../Components/navbar.jsx";

const Dashboard = () => {
  return (
    <DashboardContainerDiv>
      <DashboardBox>
        <DashboardTitle>Dashboard</DashboardTitle>
        <DashboardConfigPerfil>
          <DashboardImageIconDiv src={imageIcon} padding="0 0 0 0" />
        </DashboardConfigPerfil>
      </DashboardBox>
      <DashboardContainer>
        <DashBoardContainerProps largura="366px" altura="106px" direcao="row">
          <DashboardImageSuport
            src={suportImage}
            alt={"Imagem ilustrativa de suport"}
          />
          <DashboardBox direcao="column" espaco="0.5px">
            <DashboardTextProps cor="#fff" tamanho="16px">
              Olá User! Precisa de ajuda?
            </DashboardTextProps>
            <DashboardTextProps cor="#939FCC" tamanho="10px">
              Clique no ícone ao lado e entre em contato com o suporte!
            </DashboardTextProps>
          </DashboardBox>
          <Link to="/suporte">
            <DashboardImageComment
              src={commentImage}
              alt={"Imagem de balão de comentario"}
            />
          </Link>
        </DashBoardContainerProps>

        <DashBoardContainerProps largura="366px" altura="183px">
          <DashboardBox direcao="row" espaco="25px">
            <DashboardBox direcao="column">
              <DashboardTextProps
                cor="#fff"
                tamanho="28px"
                peso="550"
                padding="20px 0 0 0"
              >
                Ganhos do dia
              </DashboardTextProps>
              <DashboardDailyGain cor="#fff" tamanho="30px" peso="600">
                R$557,50
              </DashboardDailyGain>
            </DashboardBox>
            <DashboardImageCoin
              src={coinImage}
              alt={"Imagem de moeda com banco esculpido no meio"}
            />
          </DashboardBox>
        </DashBoardContainerProps>

        <DashboardBox direcao="row" espaco="20px">
          <DashBoardContainerProps largura="175px" altura="160px">
            <DashboardTextProps
              cor="#fff"
              tamanho="12px"
              peso="500"
              padding="10px 15px 8px 0px"
            >
              Produtos em reta final
            </DashboardTextProps>
            <DashboardBox direcao="column" espaco="7px">
              <DashboardItemsDiv>
                <DashboardImageIconDiv
                  src={imageIcon}
                  alt="icone de imagem representando local para por imagem"
                />
                <DashboardBox direcao="column" espaco="0">
                  <DashboardTextProps
                    cor="#000"
                    tamanho="10px"
                    peso="450"
                    padding=""
                  >
                    Garrafinha
                  </DashboardTextProps>
                  <DashboardTextProps
                    cor="#000"
                    tamanho="7px"
                    peso="450"
                    padding=""
                  >
                    Quantidade: 2
                  </DashboardTextProps>
                </DashboardBox>
              </DashboardItemsDiv>
              <DashboardItemsDiv>
                <DashboardImageIconDiv
                  src={imageIcon}
                  alt="icone de imagem representando local para por imagem"
                />
                <DashboardBox direcao="column" espaco="0">
                  <DashboardTextProps
                    cor="#000"
                    tamanho="10px"
                    peso="450"
                    padding=""
                  >
                    Brownie
                  </DashboardTextProps>
                  <DashboardTextProps
                    cor="#000"
                    tamanho="7px"
                    peso="450"
                    padding=""
                  >
                    Quantidade: 1
                  </DashboardTextProps>
                </DashboardBox>
              </DashboardItemsDiv>
              <DashboardItemsDiv>
                <DashboardImageIconDiv
                  src={imageIcon}
                  alt="icone de imagem representando local para por imagem"
                />
                <DashboardBox direcao="column" espaco="0">
                  <DashboardTextProps
                    cor="#000"
                    tamanho="10px"
                    peso="450"
                    padding=""
                  >
                    Coxinha
                  </DashboardTextProps>
                  <DashboardTextProps
                    cor="#000"
                    tamanho="7px"
                    peso="450"
                    padding=""
                  >
                    Quantidade: 5
                  </DashboardTextProps>
                </DashboardBox>
              </DashboardItemsDiv>
            </DashboardBox>
            <DashboardBox direcao="row" espaco="5px" padding="7px 0 0 0">
              <DashboardCircleItem></DashboardCircleItem>
              <DashboardCircleItem></DashboardCircleItem>
              <DashboardCircleItem></DashboardCircleItem>
            </DashboardBox>
          </DashBoardContainerProps>

          <DashBoardContainerProps largura="175px" altura="160px">
            <DashboardBox direcao="column" espaco="5px">
              <DashboardTextProps
                cor="#fff"
                tamanho="12px"
                peso="500"
                padding="10px 40px 0 0px"
              >
                Produto destaque
              </DashboardTextProps>
              <DashboardPizzaGrafic
                src={PizzaGraficIcon}
                alt="Gráfico pizza com os produtos em destaque"
              />
              <DashboardItemsDiv>
                <DashboardImageIconDiv
                  src={imageIcon}
                  alt="icone de imagem representando local para por imagem"
                />
                <DashboardBox direcao="column" espaco="0">
                  <DashboardTextProps
                    cor="#000"
                    tamanho="10px"
                    peso="450"
                    padding=""
                  >
                    Coxinha
                  </DashboardTextProps>
                  <DashboardTextProps
                    cor="#000"
                    tamanho="7px"
                    peso="450"
                    padding=""
                  >
                    R$ 10,00
                  </DashboardTextProps>
                </DashboardBox>
              </DashboardItemsDiv>
            </DashboardBox>
          </DashBoardContainerProps>
        </DashboardBox>

        <DashBoardContainerProps largura="366px" altura="215px">
          <DashboardBox direcao="column" espaco="5px">
            <DashboardTextProps
              cor="#fff"
              tamanho="20px"
              peso="450"
              padding="10px 150px 0 0"
            >
              Últimas compras
            </DashboardTextProps>
            <DashboardItemsDiv largura="330px" altura="30px">
              <DashboardImageIconDiv
                src={imageIcon}
                alt="icone de imagem representando local para por imagem"
              />
              <DashboardBox direcao="column" espaco="0">
                <DashboardTextProps
                  cor="#000"
                  tamanho="10px"
                  peso="450"
                  padding=""
                >
                  Coxinha + Caçulinha
                </DashboardTextProps>
                <DashboardTextProps
                  cor="#000"
                  tamanho="7px"
                  peso="450"
                  padding=""
                >
                  R$ 10,00
                </DashboardTextProps>
              </DashboardBox>
            </DashboardItemsDiv>
            <DashboardItemsDiv largura="330px" altura="30px">
              <DashboardImageIconDiv
                src={imageIcon}
                alt="icone de imagem representando local para por imagem"
              />
              <DashboardBox direcao="column" espaco="0">
                <DashboardTextProps
                  cor="#000"
                  tamanho="10px"
                  peso="450"
                  padding=""
                >
                  Coxinha + Caçulinha
                </DashboardTextProps>
                <DashboardTextProps
                  cor="#000"
                  tamanho="7px"
                  peso="450"
                  padding=""
                >
                  R$ 10,00
                </DashboardTextProps>
              </DashboardBox>
            </DashboardItemsDiv>
            <DashboardItemsDiv largura="330px" altura="30px">
              <DashboardImageIconDiv
                src={imageIcon}
                alt="icone de imagem representando local para por imagem"
              />
              <DashboardBox direcao="column" espaco="0">
                <DashboardTextProps
                  cor="#000"
                  tamanho="10px"
                  peso="450"
                  padding=""
                >
                  Coxinha + Caçulinha
                </DashboardTextProps>
                <DashboardTextProps
                  cor="#000"
                  tamanho="7px"
                  peso="450"
                  padding=""
                >
                  R$ 10,00
                </DashboardTextProps>
              </DashboardBox>
            </DashboardItemsDiv>
            <DashboardItemsDiv largura="330px" altura="30px">
              <DashboardImageIconDiv
                src={imageIcon}
                alt="icone de imagem representando local para por imagem"
              />
              <DashboardBox direcao="column" espaco="0">
                <DashboardTextProps
                  cor="#000"
                  tamanho="10px"
                  peso="450"
                  padding=""
                >
                  Coxinha + Caçulinha
                </DashboardTextProps>
                <DashboardTextProps
                  cor="#000"
                  tamanho="7px"
                  peso="450"
                  padding=""
                >
                  R$ 10,00
                </DashboardTextProps>
              </DashboardBox>
            </DashboardItemsDiv>
          </DashboardBox>
          <DashboardBox direcao="row" espaco="5px" padding="10px">
            <DashboardCircleItem></DashboardCircleItem>
            <DashboardCircleItem></DashboardCircleItem>
            <DashboardCircleItem></DashboardCircleItem>
          </DashboardBox>
        </DashBoardContainerProps>
      </DashboardContainer>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
    </DashboardContainerDiv>
  );
};

export default Dashboard;
