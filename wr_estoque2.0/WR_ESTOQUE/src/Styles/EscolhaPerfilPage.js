import { styled } from "styled-components";
import backgroundImage from "../img/background.png";

export const ContainerPaginaPerfil = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 30px;
  width: 430px;
  height: 932px;
  margin: 0 auto;
  background-color: #ffffff;
  color: #2b439c;
  background-image: url(${backgroundImage});

`;

export const PerguntaPefilText = styled.text`
  font-size: 24px;
  font-weight:bold;
  align-self: start;
  padding: 0 40px;
`

export const BotaoProximo = styled.button`
  width: 180px;
  height: 50px;
  margin-bottom: 20px;
  background-color: #2b439c;
  color: #ffffff;
  border: none;
  border-radius: 7px;
  cursor: pointer;
`;

export const DetalheFooter = styled.div`
  width: 430px;
  height: 50px;
  background-color: #2b439c;
  border-radius: 200px 200px 0 0;
`;

export const ImageCard = styled.button`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 284px;
  height: 297px;
  gap: 20px;
  border-radius: 7px;
  font-size: 20px;
  font-weight: 600;
  transition: 0.2s;
  border: 0.5px solid #ffffff;
  padding-top: 5px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  color: ${props => props.active ? '#2B439C' : '#000'};
  filter: ${props => props.active ? 'none' : 'blur(1px)'}; 
  border-color: ${props => props.active ? '#2B439C' : '#ffffff'};
`;
export const BackgroundImg = styled.div`
  width: 250px;
  height: 230px;
  border-radius: 100%;
  background-color: #d9d9d9;
`;

export const ImageIcon = styled.img`
  width: 250px;
  height: 250px;
	transition: .3s ease-in-out;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${props => props.active ? 'blue' : 'gray'};
  color: white;
  border: none;
  outline: none;
`;