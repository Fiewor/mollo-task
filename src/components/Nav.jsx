import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "./SignUp";
import { Button } from "./Button";
import { logo } from "../assets";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #3c1d59;
  padding: 0.5rem 0 3rem;
  width: 100%;
  a {
    border-radius: 4px;
    :hover {
      cursor: pointer;
    }
  }
`;

const NavGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 20%;
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

export const Nav = () => {
  return (
    <NavBar>
      <Link to="/" style={{ padding: "0" }}>
        <Logo
          src={logo}
          alt="mollo logo"
          style={{ paddingLeft: "0", marginBottom: "0" }}
        />
      </Link>

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
