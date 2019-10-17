import styled from "styled-components";
import { SubheaderHome } from "./Subheader-Home";
import { SubheaderDefault } from "./Subheader-Default";

import { Divider } from "./Divider";
interface Props {
  pathName: string;
}

export const Subheader: React.FC<Props> = ({ pathName }) => {
  function contentSwitch(path: string) {
    switch (path) {
      case "/about":
        return (
          <SubheaderDefault>
            <h1>About</h1>
            <Divider invert={true} color="green" padding={2} />
            <h2>Some things about me.</h2>
          </SubheaderDefault>
        );
      case "/projects":
        return (
          <SubheaderDefault>
            <h1>Projects</h1>
            <Divider invert={true} color="red" padding={2} />
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
            <Divider invert={true} padding={2} />
            <h2>
              This blog is powered by Contentful Delivery API and a lot of
              markdown parsing.
            </h2>
          </SubheaderDefault>
        );
      case "/blog/[post]":
        return (
          <SubheaderDefault>
            <h1>Blog</h1>
            <Divider invert={true} color="green" padding={2} />
            <h2>
              This blog is powered by Contentful Delivery API and a lot of
              markdown parsing.
            </h2>
          </SubheaderDefault>
        );
      case "/contact":
        return (
          <SubheaderDefault>
            <h1>Contact Me</h1>
            <Divider invert={true} color="red" padding={2} />
            <h2>
              You're awesome and I'm flattered. Please feel free to reach out to
              me for any reason!
            </h2>
          </SubheaderDefault>
        );
      default:
        return <SubheaderHome />;
    }
  }
  return <StyledSubheader>{contentSwitch(pathName)}</StyledSubheader>;
};

const StyledSubheader = styled("section")`
  background: ${({ theme }) => theme.secondary} no-repeat 50%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  position: relative;
  bottom: 1px;
`;
