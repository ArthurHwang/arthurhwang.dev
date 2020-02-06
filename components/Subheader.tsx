import styled from "styled-components";
import Particles from "react-particles-js";
import ParticleConfig from "../lib/particlesConfig";
import { Divider } from "./Divider";
import { SubheaderHome } from "./Subheader-Home";
import { SubheaderDefault } from "./Subheader-Default";
import { useState, ReactElement, useLayoutEffect } from "react";
interface Props {
  pathName: string;
}

// @ts-ignore
export const Subheader: React.FC<Props> = ({ pathName }) => {
  const windowGlobal: any = typeof window !== "undefined" && window;
  const [height, setHeight] = useState(
    windowGlobal.innerHeight < 768
      ? windowGlobal.innerHeight - 60
      : windowGlobal.innerHeight
  );

  useLayoutEffect(() => {
    console.log("fired");
    setHeight(windowGlobal.innerHeight - 60);
    window.addEventListener("resize", () => {
      setHeight(windowGlobal.innerHeight - 60);
    });
    return () => window.removeEventListener("resize", () => {});
  });

  function contentSwitch(path: string): ReactElement | null {
    switch (path) {
      case "/projects":
        return (
          <SubheaderDefault>
            <h1>Projects</h1>
            <Divider invert={true} color="green" />
            <h2>
              See my projects below. Unless explicity stated,{" "}
              <strong>all source code is completely authored by me.</strong>
            </h2>
          </SubheaderDefault>
        );
      case "/blog":
        return (
          <SubheaderDefault>
            <h1>Blog</h1>
            <Divider invert={true} />
            <h2>Thoughts on life, work and everything in between.</h2>
          </SubheaderDefault>
        );
      case "/contact":
        return (
          <SubheaderDefault>
            <h1>Contact Me</h1>
            <Divider invert={true} color="red" />
            <h2>
              You're awesome and I'm flattered. Please feel free to reach out to
              me for any reason!
            </h2>
          </SubheaderDefault>
        );
      case "/blog/[post]":
        return null;
      default:
        return <SubheaderHome />;
    }
  }
  return (
    pathName !== "/blog/[post]" && (
      <StyledSubheader viewportHeight={height} pathname={pathName}>
        {/* 
          //@ts-ignore */}
        <Particles className="particles" params={ParticleConfig} />
        {contentSwitch(pathName)}
      </StyledSubheader>
    )
  );
};

// prettier-ignore
const StyledSubheader = styled('section')<{pathname: string; viewportHeight: number;}>`
  background: ${({ theme }) => theme.secondary} no-repeat 50%;
  height: ${props => (props.pathname === '/' ? '94.1vh' : '300px')};
  overflow: hidden;
  position: relative;

  @media (max-width: 490px) {
    height: ${props => {
      if (props.pathname === '/') {
        return props.viewportHeight + 'px';
      } else {
        return props.pathname !== '/' && '250px';
      }
    }};
  }

  .particles {
    position: absolute;
    height: auto;
    height: ${props => (props.pathname === '/' ? '94.1vh' : '300px')};
    right: 0;
    top: 60px;
    left: 0;
    z-index: 0 !important;

    canvas {
      height: 100vmax !important;
      z-index: 0;
    }
  }
`;
