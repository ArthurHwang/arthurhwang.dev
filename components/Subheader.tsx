import styled from "styled-components";
import Particles from "react-particles-js";
import ParticleConfig from "../lib/particlesConfig";
import { Divider } from "./Divider";
import { SubheaderHome } from "./Subheader-Home";
import { SubheaderDefault } from "./Subheader-Default";
import { ReactElement } from "react";
interface Props {
  pathName: string;
}

// @ts-ignore
export const Subheader: React.FC<Props> = ({ pathName }) => {
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
      <StyledSubheader pathname={pathName}>
        {/* 
      //@ts-ignore */}
        <Particles className="particles" params={ParticleConfig} />
        {contentSwitch(pathName)}
      </StyledSubheader>
    )
  );
};

const StyledSubheader = styled("section")<{ pathname: string }>`
  background: ${({ theme }) => theme.secondary} no-repeat 50%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  /* position: relative;
  bottom: 1px; */
  height: 94.1vh;
  /* overflow: hidden; */

  @media (max-width: 490px) {
    height: ${props => (props.pathname === "/" ? "250px" : "200px")};
  }

  .particles {
    position: absolute;
    height: 94.1vh;
    right: 0;
    top: 60px;
    left: 0;
    z-index: 0 !important;
  }
`;
