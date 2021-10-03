import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(48, 48, 48, 0.2);
`;

const StyledSpan = styled.span`
  color: #ffc400;
  text-shadow: 1px 1px rgb(0, 21, 138);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        &copy; {new Date().getFullYear()}
        <StyledSpan> SaaS </StyledSpan> antivirus || All rights reserved
      </p>
    </StyledFooter>
  );
};

export default Footer;
