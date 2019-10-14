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
    <StyledLayout>
      <Meta />
      <MobilePush />
      <Header />
      <Subheader pathName={pathname} />
      <Inner>{children}</Inner>
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
  background: white;
  color: ${({ theme }) => theme.black};
`;

const Inner = styled("section")`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 2rem 0;
  background-color: ${({theme}) => theme.primary};
  /* min-height: ; */
`;
