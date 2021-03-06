import Head from "next/head";
import { Fragment, ReactElement } from "react";
import { NextPage } from "next";
import { Intro } from "../components/home/Intro";
import { Skills } from "../components/home/Skills";
import { About } from "../components/home/About";

const Home: NextPage = (): ReactElement => {
  return (
    <Fragment>
      <Head>
        <title>Arthur Hwang | Full Stack Developer</title>
        <meta
          name="description"
          content="Arthur Hwang's Full Stack Developer portfolio.  I am a Mission-driven, detail-oriented developer that likes to build software solutions and solve problems with code.  All code, all day. "
        />
        <meta
          property="og:title"
          content="Arthur Hwang | Full Stack Developer"
        />
        <meta property="og:url" content="https://arthurhwang.dev" />
        <meta
          property="og:image"
          content="https://arthurhwang.dev/static/projects/arthurhwang.dev/linkedin.png"
        />
        <meta
          property="og:description"
          content="Arthur Hwang's Full Stack Developer portfolio.  I am a Mission-driven, detail-oriented developer that likes to build software solutions and solve problems with code.  All code, all day. "
        />
      </Head>
      <Intro />
      <Skills />
      <About />
    </Fragment>
  );
};

export default Home;
