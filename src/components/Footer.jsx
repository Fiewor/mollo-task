import React from "react";
import styled from "styled-components";
import { molloBlack } from "../assets";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Foot = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4rem;
  flex-wrap: wrap;
  width: 100%;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 3rem 0;
  @media screen and (min-width: 768px) {
    padding-bottom: 1rem;
  }
`;

const FooterGroups = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem 0;
  }
`;

const FooterGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.8rem 0;
  padding: 0 1rem;
  p {
    font-size: 18px;
    margin: 0;
  }
  a {
    color: #433d4a;
    font-size: 16px;
    text-decoration: none;
  }
`;

const SocialGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #3c1d59;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    gap: 1rem;
  }
`;

const CopyRightText = styled.p`
  padding: 0.4rem 1rem;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

export const Footer = () => {
  return (
    <Foot>
      <FooterContainer>
        <FooterGroups>
          <FooterGroup>
            <img src={molloBlack} alt="mollo logo"></img>
          </FooterGroup>
          <FooterGroup>
            <p>COMPANY</p>
            <a href="#">Our Story</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Media Center</a>
          </FooterGroup>
          <FooterGroup>
            <p>CONTACT</p>
            <a href="#">Enquiry</a>
          </FooterGroup>
          <SocialGroup>
            <FacebookOutlinedIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <YouTubeIcon />
            <InstagramIcon />
          </SocialGroup>
        </FooterGroups>
        <CopyRightText>
          Copyright © 2021 Mollo Technology. All Rights Reserved.
        </CopyRightText>
      </FooterContainer>
    </Foot>
  );
};
