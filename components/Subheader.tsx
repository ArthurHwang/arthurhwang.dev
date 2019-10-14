import styled from "styled-components";
// import LogoNodejs from "react-ionicons/lib/LogoNodejs";

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
            <h1>Brute Force Determination</h1>
            <h2>Heuristic Approach</h2>
            <h1>
              {/* Full Stack Developer / React / Node{" "}
              <span>
                <LogoNodejs
                  onClick={() => alert("Hi!")}
                  fontSize="60px"
                  beat={true}
                  color="#43853d"
                  style={{ zIndex: "-1" }}
                />
              </span> */}
            </h1>

            {/* <h2>
              I love to learn about and create things with cutting-edge web
              technologies
            </h2> */}
          </SubheaderInner>
        );
    }
  }
  return (
    <StyledSubheader>
      <ContentWrap>{contentSwitch(pathName)}</ContentWrap>
    </StyledSubheader>
  );
};

const ContentWrap = styled("div")`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
`;

const SubheaderInner = styled("div")`
  h1,
  h2 {
    text-justify: left;
  }
  h1 {
    font-size: 5rem;
    color: ${({ theme }) => theme.primary};
  }
  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.primary};
  }
`;
const StyledSubheader = styled("section")`
  background: ${({ theme }) => theme.secondary} no-repeat 50%;
  background-size: cover;
  min-height: 200px;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;
