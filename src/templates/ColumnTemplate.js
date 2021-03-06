import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { theme } from "../theme/mainTheme";
import Navbar from "../components/organisms/Navbar/Navbar";

const StyledWrapper = styled.div`
  max-width: 140rem;
  margin: 0 auto 3rem;
  padding: 2rem;
  @media (max-width: 1400px) {
    max-width: 100rem;
  }
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

const ColumnTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <StyledWrapper>
          <StyledMain>{children}</StyledMain>
        </StyledWrapper>
      </ThemeProvider>
    </>
  );
};

export default ColumnTemplate;
