import React from "react";
import styled from "styled-components";

const MolButton = styled.button`
  background: ${({ background }) => (background ? background : "#3c1d59")};
  color: ${({ color }) => (color ? color : "#fff")};
  width: 100%;
  padding: 1rem 0;
  margin-top: 1rem;
  border-radius: 4px;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

export const Button = ({ text, background, color }) => {
  return (
    <MolButton background={background} color={color}>
      {text}
    </MolButton>
  );
};
