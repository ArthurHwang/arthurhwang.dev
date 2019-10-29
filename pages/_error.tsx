import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import Particles from "react-particles-js";
import { NextPage } from "next";
import { Fragment } from "react";

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: { nb_sides: 5 },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: { opacity: 1 }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
};

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
        <Particles className="particles" params={particlesOptions} />;
        <div className="container">
          <div className="text">
            {/* 
            //@ts-ignore */}
            <h1> ERROR 404 </h1>
            {/* 
            //@ts-ignore */}
            <h2>
              Go{" "}
              <Link href="/">
                <a>
                  <span>home</span>
                </a>
              </Link>
              &nbsp; You're Drunk{" "}
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
    font-family: "Source Sans Pro", sans-serif;
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
    font-family: "Source Sans Pro", sans-serif;
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
