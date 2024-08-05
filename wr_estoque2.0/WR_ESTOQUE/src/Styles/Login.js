import styled from "styled-components";

export const ContainerPaginaPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 430px;
  height: 932px;
  margin: 0 auto;
  background-color: #ffffff;
  color: #2b439c;
  background-size: cover;
  background-position: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1; /* Ocupa o espaço disponível no centro */
`;

export const Title = styled.h1`
  font-size: 60px; 
  color: black;
  font-family: "Josefin Sans", sans-serif; 
  font-weight: 400; 

`;

export const Subtitle = styled.h2`
  font-size: 18px; /* Tamanho da fonte */
  color: black;
  font-family: "Poppins", sans-serif; /* Fonte */
  font-weight: 400; /* Peso da fonte Regular */
  margin-bottom: 30px; /* Espaçamento inferior */
`;

export const InputContainer = styled.div`
  margin-bottom: 30px; /* Adicione espaço para acomodar a mensagem de erro */
  display: flex;
  flex-direction: column;
  position: relative; /* Para usar o posicionamento absoluto do ícone */

  label {
    margin-bottom: -5px;
    color: #333;
  }

  input {
    background-image: url(${props => props.backgroundImageUrl});
    background-repeat: no-repeat;
    background-position: right 10px center; /* Ajuste para o lado direito */
    background-size: 30px;
    padding: 10px 40px 10px 10px; /* Espaçamento para acomodar o ícone */
    font-size: 16px;
    border: 0;
    border-bottom: 1px solid black;
    outline: none;
    width: 330px; 
    box-sizing: border-box;

  }
  

  .error-message {
    color: red;
    font-size: 14px;
      overflow: hidden; 
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;

`;

export const DetalheFooter = styled.div`
  width: 430px;
  height: 50px;
  background-color: #2b439c;
  border-radius: 200px 200px 0 0;
`;

export const DetalheTopo = styled.div`
  background-color: #2b439c;
  width: 100%;
  height: 270px;
  border-bottom-left-radius: 60% 15%;
  border-bottom-right-radius: 60% 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ButtonLogin = styled.button`
  width: 150px;
  height: 50px;
  background-color: #2b439c;
  color: white;
  border: none;
  border-radius: 7px;
  font-size: 17px;
  text-align: center;
  cursor: pointer;
  margin: 50px auto; 
  display: block; /* Garante que o botão se comporte como um bloco */
  font-family: "Poppins", sans-serif;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.5);
  &:hover {
    border: 2px solid black;
    transition: 0.4s
  }

`;

export const LogoBranca = styled.img`
  width: 120px;
  height: 105px;
`;

export const H1BemVindoDeVolta = styled.h1`
  font-size: 30px; /* Tamanho da fonte */
  color: white;
  font-family: "Poppins", sans-serif; /* Fonte */
  font-weight: 700; /* Peso da fonte Bold */
`;