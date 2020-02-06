import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import Particles from "react-particles-js";
import { NextPage } from "next";
import { Fragment } from "react";
import ParticlesConfig from "../lib/particlesConfig_error";

const ErrorPage: NextPage<any> = () => {
  return (
    <Fragment>
      <Head>
        <title>Error Boundary</title>
        <meta name="description" content="error page, oh noes" />
      </Head>
      {/* 
        //@ts-ignore */}
      <ContentWrap>
        {/* 
        //@ts-ignore */}
        <Particles className="particles" params={ParticlesConfig} />;
        <div className="container">
          <div className="text">
            <h1> ERROR 404 </h1>

            <h2>
              Go{" "}
              <Link href="/">
                <a>
                  <span>home</span>
                </a>
              </Link>{" "}
              You're Drunk{" "}
            </h2>
          </div>
        </div>
      </ContentWrap>
    </Fragment>
  );
};

const ContentWrap = styled("div")`
  /* height: calc(100vh-60px); */
  .container {
    width: 100%;
    /* height: calc(100vh - 105px); */
    height: 96vh;
    overflow: hidden !important;
  }

  h1 {
    font-family: "SourceSansPro", sans-serif;
    font-weight: bold;
    font-size: 90px;
    letter-spacing: 20px;
    text-transform: uppercase;
    text-align: center;
    color: #b5b5b5;
    margin: 0px;
    padding: 0px;
    text-shadow: -3px 0 0 rgba(255, 0, 0, 0.7) 3px 0 0 rgba(0, 255, 255, 0.7);
  }

  h2 {
    font-family: "SourceSansPro", sans-serif;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 20px;
    text-transform: uppercase;
    text-align: center;
    color: #b5b5b5;
    line-height: 50px;
    padding: 0px;
    margin: 0px;
    text-shadow: -3px 0 0 rgba(255, 0, 0, 0.7) 3px 0 0 rgba(0, 255, 255, 0.7);
  }
  h2 a {
    color: #b5b5b5;
    text-decoration: none;
    border-bottom: 5px solid #b5b5b5;
    margin: 0;
    padding: 0;
  }
  h2 a span {
    letter-spacing: 0px !important;
    padding-right: 3px;
  }
  h2 a:hover {
    color: #808080;
    border-bottom: 5px solid #808080;
  }

  #scene ul {
    width: 100% !important;
    height: 100% !important;
    height: 100vh !important;
    overflow: hidden;
    position: relative;
  }

  .text {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%) !important;
    -ms-transform: translateY(-50%) !important;
    transform: translateY(-50%) !important;
    z-index: 3;
    display: block;
  }

  /* ---- reset ---- */

  body {
    margin: 0;
    font: normal 75% Arial, Helvetica, sans-serif;
  }

  canvas {
    display: block;
    vertical-align: bottom;
  }

  /* ---- particles.js container ---- */

  .particles {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #b61924;
    background-image: url("");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
`;

export default ErrorPage;
