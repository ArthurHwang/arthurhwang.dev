import styled from "styled-components";

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
            {/* <img width="200px" src="/static/me.jpg" /> */}
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
        return (
          <SubheaderInner>
            <h1>Rong rong u ass is monsterous</h1>
            <h2>U ass end world hunger</h2>
          </SubheaderInner>
        );
    }
  }
  return <StyledSubheader>{contentSwitch(pathName)}</StyledSubheader>;
};

const StyledSubheader = styled("section")`
  background: #f5f8fa no-repeat 50%;
  background-size: cover;
  min-height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

const SubheaderInner = styled("div")`
  h1,
  h2 {
    font-size: 5rem;
    color: red;
  }
`;
