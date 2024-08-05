import { styled } from "styled-components";
import backgroundImage from "../img/background.png";

// Estilos para o estoque
export const InnerContainer = styled.div`
  padding: 16px 32px; /* Padding interno */
  width: 100%;
  height: 100%;
  box-sizing: border-box; /* Inclui padding na largura e altura total */
`;

export const ContainerEstoque = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 430px;
  height: 932px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  background-image: url(${backgroundImage});
  position: relative; /* Garante que o posicionamento absoluto funcione */
`;
export const AdicionarProduto = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  position: absolute;
  top: 34px;
  right: 30px;
  cursor: pointer;
  z-index: 2;
`;
export const EstoqueH1 = styled.h1`
  color: #2b439c;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  top: 32px;
  left: 32px; /* Alinhe com base no padding ou outros elementos */
  z-index: 2;
  margin: 0; /* Certifique-se de que margin é zero para evitar deslocamento */
  padding: 0; /* Padding não deve ser necessário aqui */
`;
export const PesquisaEstoque = styled.div`
  width: 373px;
  height: 50px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  margin-top: 93px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
`;

export const TextPesquisa = styled.span`
  margin-left: 20px;
  flex-grow: 1; /* Para ocupar o espaço disponível */
  align-items: center;
`;

export const ImagemPesquisa = styled.img`
  width: 23px;
  height: 29px;
  object-fit: cover;
  margin-left: 10px; /* Adicionado espaçamento à esquerda da imagem */
  margin-right: 10px; /* Adicionado espaçamento à direita da imagem */
`;

export const ProdutosWrapper = styled.div`
  width: 373px;
  margin-top: 20px;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

export const Produto = styled.div`
  width: 372px;
  height: 130px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  margin: 10px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const ProdutoInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const TextProduto = styled.h3`
  margin: 0;
`;

export const Textquantidade = styled.span`
  margin: 0;
  margin-top: 5px;
`;

export const ImagemProduto = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-left: 30px;
`;

export const EditarProduto = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: absolute;
  right: 55px;
  top: 50%;
  transform: translateY(-50%);
`;

export const ExcluirProduto = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

export const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  z-index: 3;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const FileInputWrapper = styled.div`
  position: relative;
  margin-top: 10px;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const CustomFileButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #2b439c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1a2e6c;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #2b439c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #1a2e6c;
  }
`;

// Estilos para o dashboard
export const DashboardContainerDiv = styled.div`
  margin: 0 auto;
  width: 430px;
  height: 932px;
  background-image: url(${backgroundImage});
  display: flex;
  flex-direction: column;
`;

export const DashboardContainer = styled.div`
  flex: 1;
  padding: 16px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const DashBoardContainerProps = styled.div`
  width: ${(props) => props.largura || "0px"};
  height: ${(props) => props.altura || "0px"};
  background-color: #2b439c;
  border-radius: 7px;
  color: #fff;
`;

export const DashboardTitle = styled.h1`
  color: #2b439c;
  font-size: 24px;
  font-weight: bold;
  padding: 0; /* Removido padding para consistência */
  margin: 0; /* Removido margin para consistência */
  text-align: left; /* Certifica-se de que o texto esteja alinhado à esquerda */
`;

export const DashboardBox2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

// export const NavbarWrapper = styled.div`
//   margin-top: auto;
// `;

export const NoProductMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: #2b439c;
  color: black;
  opacity: 080%;
`;

export const LogoImagem = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 10px;
  opacity: 90%;
`;