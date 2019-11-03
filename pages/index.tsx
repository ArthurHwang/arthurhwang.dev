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
          content="Arthur Hwang | Fullstack Web Developer"
        />
      </Head>
      <Intro />
      <Skills />
      <About />
    </Fragment>
  );
};

export default Home;
