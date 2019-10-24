import { Fragment } from "react";
import { NextPage } from "next";
import Head from "next/head";
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
          content="Full Stack Developer Brute Force Code"
        />
      </Head>
      <Intro />
      <Skills />
      <About />
    </Fragment>
  );
};

export default Home;
