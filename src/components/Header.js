import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "./Nav"

const Header = () => {
  return (
    <div>
      <MainHeder>
        <NavLink to="/">
          <Logo
            src="https://cdn.iconscout.com/icon/free/png-512/free-amazon-logo-icon-download-in-svg-png-gif-file-formats--brand-social-media-card-pack-logos-icons-1583154.png?f=webp&w=256"
            alt="Logo of the website"
          />
        </NavLink>
        <Nav/>
      </MainHeder>
    </div>
  );
};

const MainHeder = styled.header`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 2rem;
`;

export default Header;
