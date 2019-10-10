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
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}
body {
  margin: 0;
}
main {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}
pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}
button,
input { /* 1 */
  overflow: visible;
}
button,
select { /* 1 */
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}
details {
  display: block;
}
summary {
  display: list-item;
}
template {
  display: none;
}
[hidden] {
  display: none;
}
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
