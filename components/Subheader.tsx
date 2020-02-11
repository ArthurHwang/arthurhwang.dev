import styled from "styled-components";
import Particles from "react-particles-js";
import { Divider } from "./Divider";
import { SubheaderHome } from "./Subheader-Home";
import { SubheaderDefault } from "./Subheader-Default";
import { useState, ReactElement, useEffect } from "react";
import ParticlesConfig from "../lib/particlesConfig";

interface Props {
  pathName: string;
}

// @ts-ignore
export const Subheader: React.FC<Props> = ({ pathName }) => {
  const windowGlobal: any = typeof window !== "undefined" && window;
  const [height, setHeight] = useState(windowGlobal.innerHeight);

  useEffect(() => {
    setHeight(windowGlobal.innerHeight - 60);
    window.addEventListener("resize", () => {
      setHeight(windowGlobal.innerHeight - 60);
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);

  function contentSwitch(path: string): ReactElement | null {
    switch (path) {
      case "/projects":
        return (
          <SubheaderDefault>
            <h1>Projects</h1>
            <Divider invert={true} color="red" />
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
        <Particles className="particles" params={ParticlesConfig} />
        {contentSwitch(pathName)}
      </StyledSubheader>
    )
  );
};

// prettier-ignore
const StyledSubheader = styled('section')<{pathname: string; viewportHeight: number;}>`
  background: ${({ theme }) => theme.secondary} no-repeat 50%;
  height: ${props => (props.pathname === '/' ? 'calc(100vh - 60px)' : '300px')};
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
    right: 0;
    left: 0;
    z-index: 0 !important;

    canvas {
      height: 100vmax !important;
      z-index: 0;
    }
  }
`
