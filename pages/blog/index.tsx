import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Arthur Hwang | Fullstack Web Developer</title>
      </Head>
      <StyledWrap>
        <Link href="/blog/next-vs-gatsby">
          <a>Next Vs Gatsby</a>
        </Link>
      </StyledWrap>
    </Fragment>
  );
}

const StyledWrap = styled("div")`
  /* color: red;
  background: blue; */
`;
