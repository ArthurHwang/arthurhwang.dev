import { Meta } from "./Meta";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Subheader } from "./Subheader";
import { withRouter } from "next/router";
import styled from "styled-components";

interface Props {
  children: any;
  router: {
    pathname: string;
  };
}

const Layout: React.FC<Props> = ({ children, router: { pathname } }) => {
  return (
    <StyledLayout pathName={pathname}>
      <Meta />
      <MobilePush />
      <Header />
      <Subheader pathName={pathname} />
      <Inner pathName={pathname}>{children}</Inner>
      <FooterPush />
      <Footer />
    </StyledLayout>
  );
};
// @ts-ignore
export default withRouter(Layout);

const FooterPush = styled("div")`
  height: 46px;

  @media (max-width: 910px) {
    height: 107px;
  }
`;

const MobilePush = styled("div")`
  height: 60px;

  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledLayout = styled("div")<{ pathName: string }>`
  background: white;
  /* position: ${props => (props.pathName === "/" ? "initial" : "relative")}; */
  color: ${({ theme }) => theme.black};
  /* height: 100vh; */
  width: 100%;

  @media (max-width: 910px) {
    position: relative;
  }
`;

const Inner = styled("section")<{ pathName: string }>`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.primary};
  min-height: ${props => {
    switch (props.pathName) {
      case "/blog":
        return "700px";
      default:
        return "";
    }
  }};
`;
