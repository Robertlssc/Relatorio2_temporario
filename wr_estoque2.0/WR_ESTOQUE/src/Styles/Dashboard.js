import { styled } from "styled-components";
import backgroundImage from "../img/background.png";
import imageIcon from "../img/dashboard/imageReferenceIcon.png";

export const DashboardContainerDiv = styled.div`
  margin: 0 auto;
  width: 430px;
  height: 932px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  background-image: url(${backgroundImage});
`;

export const DashboardContainer = styled.div`
  padding: 16px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const DashBoardContainerProps = styled.div`
  width: ${(props) => props.largura || "0px"};
  height: ${(props) => props.altura || "0px"};
  margin: ${(props) => props.margin || "0px"};
  display: flex;
  flex-direction: ${(props) => props.direcao || "column"};
  background-color: #2b439c;
  border-radius: 7px;
  color: #fff;
  align-items: center;
  justify-content: start;
`;

export const DashboardTitle = styled.h1`
  color: #2b439c;
  font-size: 24px;
  font-weight: bold;
  padding: 40px 175px 20px 0;
`;

export const DashboardBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direcao || "row"};
  padding: ${(props) => props.padding || "0px"};
  gap: ${(props) => props.espaco || "20px"};
`;

export const DashboardImageSuport = styled.img`
  width: 90px;
  height: 90px;
  padding: 0px 0px 10px 3px;
  `;

export const DashboardImageComment = styled.img`
  cursor: pointer;
  width: auto;
  height: auto;
  padding: 0px 10px 15px 0px;
`;

export const DashboardImageCoin = styled.img`
  width: 90px;
  height: 90px;
  padding-top: 45px;
`;

export const DashboardTextProps = styled.p`
  color: ${(props) => props.cor || "#fff"};
  font-size: ${(props) => props.tamanho || "10px"};
  font-weight: ${(props) => props.peso || "bold"};
  padding: ${(props) => props.padding || "0px"};
`;

export const DashboardDailyGain = styled.h1`
  color: #000;
  font-size: 35px;
  font-weight: 600;
  padding: 10px 0 5px 10px;
  background-color: #fff;
  border-radius: 7px;
`;

export const NavbarWrapper = styled.div`
  margin-top: auto;
`;

export const DashboardItemsDiv = styled.div`
  width: ${(props) => props.largura || "153px"};
  height: ${(props) => props.altura || "28px"};
  background-color: #f0f8ff;
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const DashboardImageIconDiv = styled.img`
  width: 20px;
  height: 20px;
  padding: ${(props) => props.padding || "0 5px 0 5px"};
`;

export const DashboardCircleItem = styled.div`
  display: flex;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #fff;
`;

export const DashboardPizzaGrafic = styled.img`
  width: 85px;
  height: 85px;
  align-self: center;
`;

export const DashboardConfigPerfil = styled.button`
  width: 35px;
  height: 35px;
  background-color: #e9eff4;
  border-radius: 100%;
  margin: 20px 35px 0 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  &:hover{
    
  }
`;
