import styled from "styled-components";
import { Meta } from "./Meta";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Subheader } from "./Subheader";
import { withRouter } from "next/router";
import { Contact } from "./Contact";
import { ReactElement } from "react";

if (process.env.NODE_ENV !== "production") {
  // Fix for slick carousel on development mode not SSR correctly
  require("../util/slick-fix.css");
}

interface Props {
  children: any;
  router: {
    pathname: string;
  };
}

function addCircuitBG(pathname: string): string | undefined {
  switch (pathname) {
    case "/blog" || "/projects":
      return "circuit-bg";
    default:
      return "";
  }
}

const Layout: React.FC<Props> = ({
  children,
  router: { pathname }
}): ReactElement => {
  return (
    <StyledLayout pathName={pathname}>
      <Meta pathName={pathname} />
      <MobilePush />
      <Header />
      {pathname !== "/_error" && <Subheader pathName={pathname} />}
      <main className={`${addCircuitBG(pathname)}`}>
        <Inner pathName={pathname}>{children}</Inner>
      </main>
      {pathname !== "/contact" && <Contact />}
      <Footer />
    </StyledLayout>
  );
};
// @ts-ignore
export default withRouter(Layout);

const MobilePush = styled("div")`
  height: 60px;
`;

const StyledLayout = styled("div")<{ pathName: string }>`
  background: white;
  color: ${({ theme }) => theme.black};
  width: 100%;

  @media (max-width: 910px) {
    position: relative;
  }
`;

const Inner = styled("section")<{ pathName: string }>`
  margin: 0 auto;
  max-width: ${props => {
    switch (props.pathName) {
      case "/":
        return "100%";
      case "/projects":
        return "100%";
      case "/_error":
        return "100%";
      case "/contact":
        return "100%";
      default:
        return props.theme.maxWidth;
    }
  }};
  padding: ${props => {
    switch (props.pathName) {
      case "/":
        return "";
      case "/projects":
        return "";
      case "/_error":
        return "";
      case "/contact":
        return "";
      default:
        return "2rem";
    }
  }};
  min-height: ${props => {
    switch (props.pathName) {
      case "/blog":
        return "700px";
      default:
        return "";
    }
  }};
`;
