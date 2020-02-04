import styled from "styled-components";
import Particles from "react-particles-js";
import { Divider } from "./Divider";
import { SubheaderHome } from "./Subheader-Home";
import { SubheaderDefault } from "./Subheader-Default";
interface Props {
  pathName: string;
}

// @ts-ignore
export const Subheader: React.FC<Props> = ({ pathName }) => {
  function contentSwitch(path: string) {
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
        <Particles className="particles" params={particlesOptions} />
        {contentSwitch(pathName)}
      </StyledSubheader>
    )
  );
};

const StyledSubheader = styled("section")<{ pathname: string }>`
  background: ${({ theme }) => theme.secondary} no-repeat 50%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  position: relative;
  bottom: 1px;
  height: 350px;

  @media (max-width: 490px) {
    height: ${props => (props.pathname === "/" ? "250px" : "200px")};
  }

  .particles {
    position: absolute;
    height: 100%;
    right: 0;
    top: 0;
    left: 0;
    z-index: 0 !important;
  }
`;

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#4AD7D1", "#FE4A49", "#faa916"]
    },
    shape: {
      type: ["circle", "edge", "polygon", "star", "triangle"],
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 0.5,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 9,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
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
        line_linked: {
          opacity: 1
        }
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
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
