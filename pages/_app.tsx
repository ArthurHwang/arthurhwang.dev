import React from "react";
import App from "next/app";
import Layout from "../components/Layout";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import withApolloClient from "../lib/with-apollo-client";
import { ApolloProvider } from "react-apollo";
import Particles from "react-particles-js";

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

const particlesOptions = {
  particles: {
    number: {
      value: 52,
      density: { enable: true, value_area: 946.9771699587272 }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 3 },
      image: { src: "img/github.svg", width: -520, height: 0 }
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 1.2,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 1,
      width: 20
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
};

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <GlobalStyle />
          {/* 
          //@ts-ignore */}
          <Particles className="particles" params={particlesOptions} />
          <Layout>
            <NextNProgress
              color={theme.secondaryAccent}
              startPosition={0}
              stopDelayMs={0}
              height="2"
            />

            <Component {...pageProps} />
          </Layout>
          {/* <Component {...pageProps} /> */}
        </ApolloProvider>
      </ThemeProvider>
    );
  }
}

export default withApolloClient(MyApp);

const GlobalStyle = createGlobalStyle`

.particles {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
background: ${theme.secondary};
  left: 0;
  z-index: -1 !important;
}
/* NormalizeCSS Start*/
html {
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%; 
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
  box-sizing: content-box; 
  height: 0; 
  overflow: visible; 
}
pre {
  font-family: monospace, monospace; 
  font-size: 1em; 
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none; 
  text-decoration: underline; 
  text-decoration: underline dotted; 
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace; 
  font-size: 1em; 
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
  font-family: inherit; 
  font-size: 100%; 
  line-height: 1.15; 
  margin: 0; 
}
button,
input { 
  overflow: visible;
}
button,
select { 
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
  box-sizing: border-box; 
  color: inherit; 
  display: table; 
  max-width: 100%; 
  padding: 0; 
  white-space: normal; 
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; 
  padding: 0; 
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield; 
  outline-offset: -2px; 
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button; 
  font: inherit; 
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
/* NormalizeCSS End*/

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
  font-family:  "-apple-system", "BlinkMacSystemFont", "lato", "Segoe UI", "Helvetica", "Arial", "Open Sans", "sans-serif";
  font-feature-settings: "kern" 1;
  font-kerning: normal;
  line-height: 1.8;
  letter-spacing: 0.1px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
}

h1,h2,h3 {
  color: ${theme.primary};
}

p, span {
  color: ${theme.primary};
  text-align: justify;
}


a {
  text-decoration: none;
  color: ${theme.blue};
  font-weight: 500;

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
  transition: all .4s;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    background-position: 0%;
  }
}
`;
