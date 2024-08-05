import { styled } from "styled-components";
import backgroundImage from "../img/background.png";

export const RelatoriosContainerDiv = styled.div`
  margin: 0 auto;
  width: 430px;
  height: 932px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  background-image: url(${backgroundImage});
`;

export const RelatoriosContainer = styled.div`
  width: 430px;
  height: auto;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const NavbarWrapper = styled.div`
  margin-top: auto;
`;

export const RelatoriosFlechaImage = styled.img`
  width: 26px;
  height: 26px;
  margin-bottom: 30px;
`;

export const RelatoriosBotaoPaginasDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const RelatoriosBotaoPaginasButton = styled.button`
  width: 180px;
  height: 52px;
  background-color: ${(props) => (props.active ? "#2B439C" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border: none;
  border-radius: 7px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  font-weight: bold;
`;

export const RelatoriosContainerPaginasDiv = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`
