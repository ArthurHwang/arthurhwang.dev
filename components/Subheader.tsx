import styled from "styled-components";
import { SubheaderHome } from "./Subheader-Home";
interface Props {
  pathName: string;
}

export const Subheader: React.FC<Props> = ({ pathName }) => {
  function contentSwitch(path: string) {
    switch (path) {
      case "/about":
        return (
          <SubheaderInner>
            <h1>hi</h1>
            <h2>what</h2>
          </SubheaderInner>
        );
      case "/projects":
        return (
          <SubheaderInner>
            <h1>projects</h1>
            <h2>hehehehe</h2>
          </SubheaderInner>
        );
      case "/blog":
        return (
          <SubheaderInner>
            <h1>hi</h1>
            <h2>what</h2>
          </SubheaderInner>
        );
      case "/contact":
        return (
          <SubheaderInner>
            <h1>contact me</h1>
            <h2>what</h2>
          </SubheaderInner>
        );
      default:
        return <SubheaderHome />;
    }
  }
  return <StyledSubheader>{contentSwitch(pathName)}</StyledSubheader>;
};

const SubheaderInner = styled("div")`
  h1 {
    margin: 0;
    font-size: 5rem;
    color: ${({ theme }) => theme.primary};
  }
  h2 {
    margin: 0;
    font-size: 3rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const StyledSubheader = styled("section")`
  background: ${({ theme }) => theme.lightgrey} no-repeat 50%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  position: relative;
`;
