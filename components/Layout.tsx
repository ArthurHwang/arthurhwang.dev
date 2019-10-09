import React from "react";
import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const StyledLayout = styled.div`
  background: white;
  color: ${({ theme }) => theme.black};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

export default ({ children }) => {
  return (
    <StyledLayout>
      <Meta />
      <Header />
      <Inner>{children}</Inner>
      <Footer />
    </StyledLayout>
  );
};
