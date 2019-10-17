import { Meta } from "./Meta";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Subheader } from "./Subheader";
import { withRouter } from "next/router";
import styled from "styled-components";
// import Particles from "react-particles-js";

interface Props {
  children: any;
  router: {
    pathname: string;
  };
}

// const particlesOptions = {
//   particles: {
//     number: {
//       value: 80,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     }
//   }
// };

const Layout: React.FC<Props> = ({ children, router: { pathname } }) => {
  return (
    <StyledLayout>
      <Meta />
      <MobilePush />
      {/* <Particles className="particles" params={particlesOptions} /> */}
      <Header />
      <Subheader pathName={pathname} />
      <Inner pathname={pathname}>{children}</Inner>

      <Footer />
    </StyledLayout>
  );
};
// @ts-ignore
export default withRouter(Layout);

const MobilePush = styled("div")`
  height: 60px;

  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledLayout = styled("div")`
  /* background: transparent; */
  /* color: ${({ theme }) => theme.black}; */

  /* .particles {
    position: fixed;
    right: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  } */
`;

const Inner = styled("section")<{ pathname: string }>`
  max-width: ${props =>
    props.pathname === "/projects" ? "100%" : props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  /* background-color: ${({ theme }) => theme.primary}; */
  min-height: 800px;
`;
