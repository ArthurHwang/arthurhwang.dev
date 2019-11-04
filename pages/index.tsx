import Head from "next/head";
import { Fragment } from "react";
import { NextPage } from "next";
import { Intro } from "../components/home/Intro";
import { Skills } from "../components/home/Skills";
import { About } from "../components/home/About";

const Home: NextPage<any> = () => {
  return (
    <Fragment>
      <Head>
        <title>Arthur Hwang | Fullstack Web Developer</title>
        <meta
          name="description"
          content="Personal Fullstack Web Developer portfolio.  I am a Mission-driven, detail-oriented developer that likes to build software solutions and solve problems with code.  All code, all day. "
        />
      </Head>
      <Intro />
      <Skills />
      <About />
    </Fragment>
  );
};

export default Home;
