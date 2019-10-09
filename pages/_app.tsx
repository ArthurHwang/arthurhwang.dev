import React from "react";
import App from "next/app";
import Layout from "../components/Layout";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  blue: "#2b486d",
  lightgrey: "#E1E1E1",
  link: "#0096cc",
  linkHover: "#007199",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <NextNProgress
            color="red"
            startPosition={0.3}
            stopDelayMs={0}
            height="2"
          />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Roboto';
    src: url('/static/fonts/Roboto-Regular.ttf');
    font-weight: 400;
    font-display: auto;
    font-style: normal;
}
@font-face {
    font-family: 'Roboto';
    src: url('/static/fonts/Roboto-Bold.ttf');
    font-weight: 700;
    font-display: auto;
    font-style: normal;
}
@font-face {
    font-family: 'Roboto';
    src: url('/static/fonts/Roboto-Medium.ttf');
    font-weight: 500;
    font-display: auto;
    font-style: normal;
}
@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-Regular.ttf');
    font-weight: 400;
    font-display: auto;
    font-style: normal;
}
@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-SemiBold.ttf');
    font-weight: 500;
    font-display: auto;
    font-style: normal;
}
@font-face {
    font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-Bold.ttf');
    font-weight: 700;
    font-display: auto;
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
  font-size: 1.6rem;
  line-height: 2;
  font-family: "Roboto", "Open Sans";
  font-feature-settings: "kern" 1;
  font-kerning: normal;
  line-height: 1.8;
  letter-spacing: 0.1px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

a {
  text-decoration: none;
  color: ${theme.link};
  font-weight: 500;

  &:hover {
    color: ${theme.linkHover}
  }
}
`;

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// static async getInitialProps(appContext) {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
