import React from "react";
import App from "next/app";
import Layout from "../components/Layout";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#EEE",
  blue: "#2b486d",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

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
  font-size: 1.8rem;
  /* line-height: 2; */
  font-family: "Segoe UI";
  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
  direction: ltr;
  text-rendering: optimizeLegibility;
}

a {
  text-decoration: none;
  color: ${theme.black};
}
`;

class MyApp extends App {
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
            height="3"
          />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default MyApp;
