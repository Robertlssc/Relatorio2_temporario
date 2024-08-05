import { Route, Routes, BrowserRouter } from "react-router-dom";
import EscolhaPerfil from "../Pages/EscolhaPerfil";
import TelaInicial from "../Pages/TelaInicial";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Estoque from "../Pages/Estoque";
import RelatoriosDiario from "../Pages/RelatoriosDiario";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/Escolhaperfil" element={<EscolhaPerfil />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/RelatoriosDiario" element={<RelatoriosDiario />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
