import React, { useState } from "react";
import home from "../img/navbar/home.png";
import graficos from "../img/navbar/graficos.png";
import estoque from "../img/navbar/estoque.png";
import agendamento from "../img/navbar/agendamento.png";
import relatoriosDiario from "../img/navbar/relatorioDiario.png";

import {
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLink,
  NavIcon,
} from "../Styles/NavbarStyled";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");
  console.log(activeItem);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <NavbarContainer>
      <NavMenu>
        <NavItem>
          <NavLink
            href="Estoque"
            isActive={activeItem === "Estoque"}
            onClick={() => handleItemClick("Estoque")}
          >
            <NavIcon src={estoque} alt="Estoque" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="Graficos"
            isActive={activeItem === "Graficos"}
            onClick={() => handleItemClick("Graficos")}
          >
            <NavIcon src={graficos} alt="Graficos" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="Dashboard"
            isActive={activeItem === "Dashboard"}
            onClick={() => handleItemClick("Dashboard")}
          >
            <NavIcon src={home} alt="home" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="Agendamento"
            isActive={activeItem === "Agendamento"}
            onClick={() => handleItemClick("Agendamento")}
          >
            <NavIcon src={agendamento} alt="Agendamento" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="RelatoriosDiario"
            isActive={activeItem === "RelatoriosDiario"}
            onClick={() => handleItemClick("RelatoriosDiario")}
          >
            <NavIcon src={relatoriosDiario} alt="RelatoriosDiario" />
          </NavLink>
        </NavItem>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
