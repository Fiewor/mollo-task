import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { woman, logo } from "../assets";
import {
  SignPage,
  Logo,
  FormSection,
  HeaderText,
  Text,
  FormContainer,
  SignUpForm,
} from "./SignUp";

export const SignIn = () => {
  return (
    <SignPage>
      <Link to="/" style={{ padding: "0" }}>
        <Logo src={logo} alt="mollo logo" />
      </Link>
      <FormSection>
        <FormContainer>
          <HeaderText>Sign In to Mollo</HeaderText>
          <Text>
            Please enter your Mollo password and the email address associated
            with your account to sign in.
          </Text>
          <SignUpForm>
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
