import React from "react";
// import Head from "next/head";
import Meta from "./Meta";
import Header from "./Header";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  blue: "#2b486d",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledLayout = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  ${""}
  margin: 0 auto;
  padding: 2rem;
`;

export default ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledLayout>
        <Meta />
        <Header />
        <Inner>{children}</Inner>
      </StyledLayout>
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'radnika_next';
  src: url(/static/radnikanext-medium-webfont.woff2) format('woff2');
  font-weight: normal;
  font-style: normal;
}

html {
  box-sizing: border-box;
  font-size: 10px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;
  font-family: 'radnika_next';
}

a {
  text-decoration: none;
  color: ${theme.black};
}
`;
