import React from "react";
import App from "next/app";
import Layout from "../components/Layout";
import NextNProgress from "nextjs-progressbar";
import Router from "next/router";
import withGA from "next-ga";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  primary: "#fff",
  secondary: "#333",
  accent: "#37bc9b",
  secondaryAccent: "#FE4A49",
  yellow: "#faa916",
  blue: "#3B68B5",
  lightgrey: "#f6f6f6",
  grey: "#525252",
  black: "#1e1e1e",
  maxWidth: "1200px",
  font: {
    white: "#F6F5F3",
    aqua: "#2E9E82",
    darkAqua: "#37bc9b"
  },
  bg: {
    white: "#f9f8fd",
    black: "#222",
    aqua: "#37bc9b",
    grey: "rgba(0,0,0,.1)"
  }
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

export default withGA("UA-150992172-1", Router)(MyApp);

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Titillium';
  font-weight: 400;
  font-style: normal;
  src: url('/static/fonts/TitilliumWeb-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'Titillium';
  font-weight: 600;
  font-style: normal;
  src: url('/static/fonts/TitilliumWeb-SemiBold.ttf') format('truetype');
}
@font-face {
  font-family: 'Titillium';
  font-weight: 700;
  font-style: normal;
  src: url('/static/fonts/TitilliumWeb-Bold.ttf') format('truetype');
}
@font-face {
  font-family: 'SourceSansPro';
  font-weight: 400;
  font-style: normal;
  src: url('/static/fonts/SourceSansPro-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'SourceSansPro';
  font-weight: 600;
  font-style: normal;
  src: url('/static/fonts/SourceSansPro-SemiBold.ttf') format('truetype');
}
@font-face {
  font-family: 'SourceSansPro';
  font-weight: 700;
  font-style: normal;
  src: url('/static/fonts/SourceSansPro-Bold.ttf') format('truetype');
}

html {
  box-sizing: border-box;
  font-size: 10px;
  scroll-behavior: smooth;
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
  font-family:  "Titillium","-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "Roboto", "Segoe UI", "lato", "Arial", "Open Sans", "sans-serif";
  font-weight: 400;
  font-feature-settings: "kern" 1;
  font-kerning: normal;
  line-height: 1.8;
  letter-spacing: 0.1px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

h1,h2,h3 {
  font-weight: bold;
  color: ${theme.black};
  text-transform: uppercase;
  /* letter-spacing: -1px; */
}

h2 {
  font-size: 3.8rem;
}

h3 {
  font-size: 2.4rem;
}

h4 {
  font-size: 1.8rem;
}

ul, ol {
  padding-left: 2rem;
}

@media(max-width:490px) {
  h2 {
    font-size: 3rem; 
  }
  h3 {
    font-size: 2.2rem;
  }
  h4 {
    font-size: 1.6rem;
  }
  p, li {
    font-size: 1.4rem;
  }
}

p {
  color: ${theme.grey};
  text-align: justify;
  max-height: 999999px;
  word-break: break-word;
  font-family: "SourceSansPro";
}

li {
  color: ${theme.grey};
  font-family: "SourceSansPro"
}

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

a.invert {
  color: ${theme.font.white};

  &:hover {
    color: ${theme.accent};
  }
}

a.link {
  text-decoration: none;
  font-weight: 600;
  background-image: linear-gradient(to right,#37bc9b,#37bc9b 50%,${theme.blue} 50%);
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
