import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #2B439C;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 430px;
  height: 60px;
  margin 0 auto;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.2);
  align
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-size: 0.8rem;
  text-align: center;
  padding: 5px;
  transition: 0.4s;

  &:hover {
    background-color: #ffffff89;
    border-radius: 10px;
    color: #ffffff;
  }

  ${({ isActive }) =>
    isActive &&
    `
    background-color: #ffffff89;
    border-radius: 10px;
    color: #ffffff;
  `}
`;

export const NavIcon = styled.img`
  height: 30px;
  width: auto;
  margin-bottom: 5px;
`;
