import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { woman, logo } from "../assets";

export const SignPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  padding-top: 0.7rem;
  padding-left: 2rem;
  margin-bottom: 3rem;
`;

export const FormSection = styled.div`
  color: #3c1d59;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  max-width: 95vw;
  padding: 0 2rem;
  img {
    display: none;
  }
  @media screen and (min-width: 768px) {
    img {
      display: inline-block;
    }
  }
`;

export const HeaderText = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
  font-family: "Roboto", sans-serif;
`;

export const Text = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@500&display=swap");
  font-family: "Abhaya Libre", serif;
  color: #433d4a;
  font-size: 1rem;
  padding: 1rem 0;
`;

export const FormContainer = styled.div`
  margin-bottom: 2rem;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input {
    padding: 0.5rem 0;
    border: 1px solid #e1e0e2;
    border-radius: 4px;
  }
`;

export const SignUp = () => {
  return (
    <SignPage>
      <Link to="/" style={{ padding: "0" }}>
        <Logo src={logo} alt="mollo logo" />
      </Link>
      <FormSection>
        <FormContainer>
          <HeaderText>Sign Up to Mollo</HeaderText>
          <Text>
            Please enter your Mollo password and the email address associated
            with your account to sign in.
          </Text>
          <SignUpForm>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName"></input>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="phone" name="phoneNumber"></input>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email"></input>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password"></input>
          </SignUpForm>
          <Button text="Sign Up" />
        </FormContainer>
        <img src={woman} alt="smiling woman"></img>
      </FormSection>
    </SignPage>
  );
};
