import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import Subheader from "./Subheader";
import { withRouter } from "next/router";

const Layout = ({ children, router: { pathname } }) => {
  // console.log(pathname);
  return (
    <StyledLayout>
      <Meta />
      <Header />
      <Subheader pathName={pathname} />
      <Inner>{children}</Inner>
      <Footer />
    </StyledLayout>
  );
};
//@ts-ignore
export default withRouter(Layout);

const StyledLayout = styled("div")`
  background: white;
  color: ${({ theme }) => theme.black};
`;

const Inner = styled("section")`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;
