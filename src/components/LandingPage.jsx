import React from "react";
import { Nav } from "./Nav";
import styled from "styled-components";
import { man, payments, card, send, register } from "../assets";
import { Footer } from "./Footer";
import { Button } from "./Button";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  @media screen and (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;
  margin: 1rem 0;
  width: 90vw;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

const LittleText = styled.p`
  margin: 0;
  background: #f5ebff;
  border-radius: 20px;
  text-align: center;
  padding: 0;
  min-width: 20%;
  max-width: 50%;
  font-size: 0.8rem;
  @media screen and (min-width: 768px) {
    padding: 0.3rem 0.5rem;
    max-width: 25%;
  }
`;

const TextContainer = styled.div`
  width: 90vw;
  h1,
  p {
    padding: 0.5rem 0;
  }
  ul {
    padding: 0 1rem;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    color: #3c1d59;
    max-width: 45vw;
  }
`;

const ImageContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
    img {
      width: 95%;
    }
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 0;
  margin: 2rem 0;
  background: #3c1d59;
  color: #fff;
  border-radius: 10px;
`;

const BottomTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 100%;
  padding: 0 1rem;
  @media screen and (min-width: 768px) {
    width: 70vw;
    padding-left: 3rem;
  }
`;

const BottomImage = styled.img`
  position: absolute;
  right: 7rem;
  z-index: 8;
  height: 60vh;
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

export const LandingPage = () => {
  return (
    <LandingContainer>
      <Nav />
      <Container>
        <TextContainer>
          <LittleText>DIGITAL BANK</LittleText>
          <h1>All lifestyles can gain from digital banking.</h1>
          <p>
            With a free Mollo, you can unlock the power of money. All of your
            bills, money transfers, buy airtime can be done in one spot.
          </p>
          <Button text="Get Started" />
          <SocialContainer>
            <Button text="Get it on Play Store" background="#A6C643" />
            <Button text="Get it on Apple Store" background="#A6C643" />
          </SocialContainer>
        </TextContainer>
        <ImageContainer>
          <img src={man} alt="smiling woman"></img>
        </ImageContainer>
      </Container>
      <Container>
        <ImageContainer>
          <img src={payments} alt="smiling woman"></img>
        </ImageContainer>
        <TextContainer>
          <LittleText>BILL PAYMENT</LittleText>
          <h1>Take advantage of seamless payments at a low or no cost.</h1>
          <p>
            With only a few clicks on your smartphone, you can pay all of your
            bills and top up your airtime at the lowest possible price.
          </p>
          <ul>
            <li>
              Purchase airtime and data for all networks you can get 10%
              discount.
            </li>
            <li>
              Pay for your cable television, power and water bills and save up
              to 100% on fees
            </li>
            <li>You can get up to 10% discount when you pay your bills</li>
          </ul>
        </TextContainer>
      </Container>
      <Container>
        <TextContainer>
          <LittleText>TRANSFER FUNDS</LittleText>
          <h1>Send money to friends and family in a flash.</h1>
          <p>
            Transfers to the Mollo account are free, and you can send money to
            any bank account in Nigeria.
          </p>
          <ul>
            <li>
              There are no conversion fees and the exchange rates are straight
              forward
            </li>
            <li>
              Transfers to local bank accounts and Mollo mobile money accounts
              are completed quickly
            </li>
            <li>Transfer of funds are easy discreet and fast</li>
          </ul>
        </TextContainer>
        <ImageContainer>
          <img src={send} alt="send money"></img>
        </ImageContainer>
      </Container>
      <Container>
        <ImageContainer>
          <img src={card} alt="virtual card"></img>
        </ImageContainer>
        <TextContainer>
          <LittleText>VIRTUAL CARDS</LittleText>
          <h1>Get an authentic card that pays you back.</h1>
          <p>
            The Mollo debit card gives you more financial control, security, and
            access to deals.
          </p>
          <ul>
            <li>You can make as many cards as you want</li>
            <li>
              For your transactions, we offer a transparent and dependable
              exchange rate.
            </li>
            <li>
              With our cashback loyalty scheme you will be able to pay smarter
              and earn more.
            </li>
            <li>
              Compatible with Apple Pay, Google Pay, Paypal, Netflix, Amazon,
              Spotify and other famous websites.
            </li>
          </ul>
        </TextContainer>
      </Container>

      <BottomContainer>
        <BottomTextContainer>
          <h1>Register For Free</h1>
          <p>
            Mollo is available on Google Play and the App Store. To enjoy
            ultimate financial security.
          </p>
          <SocialContainer>
            <Button
              text="Get it on Play Store"
              background="#A6C643"
              style={{ width: "90vw" }}
            />
            <Button
              text="Get it on Apple Store"
              background="#A6C643"
              style={{ width: "90vw" }}
            />
          </SocialContainer>
        </BottomTextContainer>
        <BottomImage src={register} alt="register image"></BottomImage>
      </BottomContainer>
      <Footer />
    </LandingContainer>
  );
};
