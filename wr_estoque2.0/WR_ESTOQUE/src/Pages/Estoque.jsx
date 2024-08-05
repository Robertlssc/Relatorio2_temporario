import { useState } from "react";
import {
  ContainerEstoque,
  EstoqueH1,
  AdicionarProduto,
  PesquisaEstoque,
  ImagemPesquisa,
  ProdutosWrapper,
  Produto,
  ProdutoInfo,
  TextProduto,
  Textquantidade,
  ImagemProduto,
  EditarProduto,
  FormContainer,
  Input,
  FileInputWrapper,
  HiddenFileInput,
  CustomFileButton,
  Button,
  NoProductMessage, // Adicionar aqui
  LogoImagem, // Adicionar aqui
} from "../Styles/EstoqueStyled";
import produtoImagem from "../img/estoque/imgProduto.png";
import EditarImagem from "../img/estoque/editarEstoque.png";
import imgAdicionarProduto from "../img/estoque/maisEstoque.png";
import Pesquisaimg from "../img/estoque/lupa.png";
import Navbar from "../Components/navbar";
import logoProjeto from "../img/download.jpg"; // Importe a logo do projeto

const Estoque = () => {
  const [produtos, setProdutos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    quantidade: "",
    imagem: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null); // Para rastrear o índice do produto sendo editado
  const [searchTerm, setSearchTerm] = useState(""); // Estado para a pesquisa

  const adicionarProduto = () => {
    setShowForm(true);
    setNovoProduto({ nome: "", quantidade: "", imagem: "" }); // Limpa o formulário ao adicionar
    setSelectedImage(null); // Limpa a imagem selecionada
    setEditingIndex(null); // Reseta o índice de edição
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoProduto({ ...novoProduto, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNovoProduto({ ...novoProduto, imagem: reader.result });
      setSelectedImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = (index) => {
    const produto = produtos[index];
    setNovoProduto(produto); // Preenche o formulário com os dados do produto a ser editado
    setSelectedImage(produto.imagem); // Preenche a imagem selecionada
    setEditingIndex(index); // Define o índice do produto sendo editado
    setShowForm(true); // Mostra o formulário de edição
  };

  const handleDelete = (index) => {
    const updatedProdutos = produtos.filter((_, i) => i !== index);
    setProdutos(updatedProdutos);
    setShowForm(false); // Fecha o formulário de edição ao excluir
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!novoProduto.imagem) {
      return;
    }
    if (editingIndex !== null) {
      // Atualiza o produto existente
      const updatedProdutos = [...produtos];
      updatedProdutos[editingIndex] = novoProduto;
      setProdutos(updatedProdutos);
    } else {
      // Adiciona um novo produto
      setProdutos([...produtos, novoProduto]);
    }
    setNovoProduto({ nome: "", quantidade: "", imagem: "" });
    setSelectedImage(null);
    setShowForm(false);
    setEditingIndex(null); // Reseta o índice de edição após salvar
  };

  // Função para lidar com a mudança na pesquisa
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <ContainerEstoque>
      <EstoqueH1>Estoque</EstoqueH1>
      <AdicionarProduto src={imgAdicionarProduto} onClick={adicionarProduto} />
      <PesquisaEstoque>
        <Input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Procure pelo produto"
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            borderRadius: "10px",
            padding: "10px",
          }}
        />
        <ImagemPesquisa src={Pesquisaimg} />
      </PesquisaEstoque>
      {produtos.length === 0 ? (
        <NoProductMessage>
          <LogoImagem src={logoProjeto} alt="Logo do Projeto" />
          <p>Nenhum produto adicionado ao estoque</p>
        </NoProductMessage>
      ) : (
        <ProdutosWrapper>
          {produtos
            .filter((produto) =>
              produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((produto, index) => (
              <Produto key={index}>
                <ImagemProduto
                  src={produto.imagem || produtoImagem}
                  alt="Imagem do Produto"
                />
                <ProdutoInfo>
                  <TextProduto>{produto.nome}</TextProduto>
                  <Textquantidade>
                    Quantidade: {produto.quantidade}
                  </Textquantidade>
                </ProdutoInfo>
                <EditarProduto
                  src={EditarImagem}
                  onClick={() => handleEdit(index)}
                />
              </Produto>
            ))}
        </ProdutosWrapper>
      )}
      {showForm && (
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="nome"
              value={novoProduto.nome}
              onChange={handleInputChange}
              placeholder="Nome do Produto"
              required
            />
            <Input
              type="number"
              name="quantidade"
              value={novoProduto.quantidade}
              onChange={handleInputChange}
              placeholder="Quantidade"
              required
            />
            <FileInputWrapper>
              <HiddenFileInput
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <CustomFileButton
                onClick={() =>
                  document.querySelector('input[type="file"]').click()
                }
              >
                Escolher Imagem
              </CustomFileButton>
            </FileInputWrapper>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Imagem Selecionada"
                style={{ width: "100px", marginTop: "10px" }}
              />
            )}
            <Button type="submit">
              {editingIndex !== null
                ? "Atualizar Produto"
                : "Adicionar Produto"}
            </Button>
            {editingIndex !== null && (
              <Button
                type="button"
                onClick={() => handleDelete(editingIndex)}
                style={{ backgroundColor: "red", marginTop: "10px" }}
              >
                Excluir Produto
              </Button>
            )}
          </form>
        </FormContainer>
      )}
      <Navbar />
    </ContainerEstoque>
  );
};

export default Estoque;
