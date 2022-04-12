import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "./SignUp";
import { Button } from "./Button";
import { logo } from "../assets";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #3c1d59;
  padding: 0.5rem 0 3rem;
  width: 50vw;
  a {
    border-radius: 4px;
    :hover {
      cursor: pointer;
    }
  }
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

const MenuIconContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 1.2rem;
  right: 1rem;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavGroup = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 20%;
  }
`;

const FeatureGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  button {
    padding-top: 0;
  }
`;

const VerticalMenu = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  transition: ease-in 0.3s;
`;

const MenuLink = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  a {
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    :hover {
      color: #3c1d59;
    }
  }
`;

export const Nav = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <NavBar>
      <Link to="/" style={{ padding: "0" }}>
        <Logo
          src={logo}
          alt="mollo logo"
          style={{ paddingLeft: "0", marginBottom: "0" }}
        />
      </Link>
      <MenuIconContainer>
        <MenuIcon onClick={() => setDisplayMenu(!displayMenu)} />
      </MenuIconContainer>
      {displayMenu && (
        <VerticalMenu>
          <MenuLink>
            <Link to="/SignUp">Sign Up</Link>
          </MenuLink>
          <MenuLink>
            <Link to="/SignIn">Log In</Link>
          </MenuLink>
          <MenuLink>
            <Link to="/">Company</Link>
          </MenuLink>
          <MenuLink>
            <Link to="/">Features</Link>
          </MenuLink>
          <MenuLink>
            <Link to="/">Help</Link>
          </MenuLink>
        </VerticalMenu>
      )}
      <NavGroup>
        <FeatureGroup>
          <Button text="Company" background="transparent" color="#3C1D59" />
          <ArrowDropDownIcon />
        </FeatureGroup>
        <FeatureGroup>
          <Button text="Features" background="transparent" color="#3C1D59" />
          <ArrowDropDownIcon />
        </FeatureGroup>
        <FeatureGroup>
          <Button text="Help" background="transparent" color="#3C1D59" />
          <ArrowDropDownIcon />
        </FeatureGroup>
      </NavGroup>

      <NavGroup>
        <Link
          to="./SignIn"
          style={{
            background: "transparent",
            color: "#3C1D59",
            textDecoration: "none",
            padding: "0.7rem 2rem",
          }}
        >
          Log In
        </Link>
        <Link
          to="./SignUp"
          style={{
            background: "#3c1d59",
            color: "#fff",
            textDecoration: "none",
            padding: "0.7rem 2rem",
          }}
        >
          Sign Up
        </Link>
      </NavGroup>
    </NavBar>
  );
};
