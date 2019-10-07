import React from "react";
// import Head from "next/head";
import Meta from "./Meta";
import Header from "./Header";
import styled from "styled-components";

const StyledLayout = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  ${""}
  margin: 0 auto;
  padding: 2rem;
`;

export default ({ children }) => {
  return (
    <StyledLayout>
      <Meta />
      <Header />
      <Inner>{children}</Inner>
    </StyledLayout>
  );
};
