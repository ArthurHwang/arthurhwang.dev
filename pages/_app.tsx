import React from "react";
import App from "next/app";
import Layout from "../components/Layout";
import NextNProgress from "nextjs-progressbar";
import Router from "next/router";
import withGA from "next-ga";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  primary: "#fff",
  secondary: "#001730",
  accent: "#4AD7D1",
  secondaryAccent: "#FE4A49",
  yellow: "#faa916",
  blue: "#3454d1",
  lightgrey: "#f6f6f6",
  grey: "#525252",
  black: "#1e1e1e",
  maxWidth: "1000px"
};

class MyApp extends App<any> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      //@ts-ignore
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <NextNProgress
            color={theme.secondaryAccent}
            startPosition={0}
            stopDelayMs={0}
            height="3"
          />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default withGA(process.env.GA_TRACKING_ID, Router)(MyApp);

const GlobalStyle = createGlobalStyle`
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
  font-size: 1.6rem;
  font-family:  "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "Roboto", "Segoe UI", "lato", "Arial", "Open Sans", "sans-serif";
  font-feature-settings: "kern" 1;
  font-kerning: normal;
  line-height: 1.8;
  letter-spacing: 0.1px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-rendering: geometricPrecision; */
  text-rendering: optimizeLegibility;
}

h1,h2,h3 {
  color: ${theme.black};
}

h2 {
  font-size: 3rem;
}

ul, ol {
  padding-left: 2rem;
}

@media(max-width:490px) {
  h2 {
    font-size: 2.4rem; 
  }
  p {
    font-size: 1.4rem;
  }
}

p {
  color: ${theme.grey};
  text-align: justify;
  max-height: 999999px;
  word-break: break-word;
}

li {
  color: ${theme.grey};
}

/* li, p , span {
  font-weight: 500;
} */

strong {
  font-weight: 800;
  color: ${theme.black};
}

code {
  color: ${theme.secondaryAccent};
  background: 1px solid #ebeaeb;
  padding: 0 6px;
}



a {
  text-decoration: none;
  color: ${theme.blue};
  font-weight: 600;

  &:hover {
    color: ${theme.accent};
  }
}

a.link {
  text-decoration: none;
  font-weight: 600;
  background-image: linear-gradient(to right,#4AD7D1,#4AD7D1 50%,${theme.blue} 50%);
  background-position: 100%;
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all .4s;

  &:hover {
    background-position: 0%;
  }
}
`;
