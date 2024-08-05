import styled from "styled-components";
import backgroundImage from "../img/background.png";

export const ContainerPaginaInicial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 932px;
  text-align: center;
  background-color: white; 
  width: 430px;
  margin: 0 auto;
  position: relative; 
  background-image: url(${backgroundImage});
`;

export const Titulo = styled.h1`
  font-size: 24px; 
  color: #333;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif; 
`;

export const Subtitulo = styled.h2`
  font-size: 20px;
  color: #333;
  margin-top: 1%;
  margin-bottom: 20%;
`;

export const Logo = styled.img`
  width: 200px; 
  height: 200px;
`;

export const GlobalButtonLogin = styled.button`
  background-color: ${(props) => props.color || "#2b439c"};
  color: ${(props) => props.color || "#ffffff"};
  border-radius: ${(props) => props.borderRadius || "7px"};
  border: 2px solid #ccc;
  padding: 8px 16px; 
  width: ${(props) => props.width || "300px"}; 
  height: ${(props) => props.height || "60px"}; 
  font-size: 25px; 
  cursor: pointer;
  margin: 10px;

  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  &:hover{
    border: 2px solid black;
    transition: 0.4s;
  }
`;
export const GlobalButtonCadastro = styled.button`
  background-color: ${(props) => props.color || "#ffffff"};
  color: ${(props) => props.color || "#000000"};
  border-radius: ${(props) => props.borderRadius || "7px"};
  border: 2px solid #ccc;
  padding: 8px 16px; 
  width: ${(props) => props.width || "300px"}; 
  height: ${(props) => props.height || "60px"}; 
  font-size: 25px; 
  cursor: pointer;
  margin: 10px;

  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  &:hover{
    border: 2px solid black;
    transition: 0.4s;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

export const Content = styled.div`
  flex: 1;
`;

export const DetalheFooter = styled.div`
  width: 100%;
  height: 50px;
  background-color: #2b439c;
  border-radius: 200px 200px 0 0;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
