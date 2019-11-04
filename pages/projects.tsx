import Head from "next/head";
import { NextPage } from "next";
import { Fragment } from "react";
import { withApollo } from "../lib/apollo";
import { Project1 } from "../components/projects/Project1";
import { Project2 } from "../components/projects/Project2";
import { Project3 } from "../components/projects/Project3";
import { Project4 } from "../components/projects/Project4";
import { Project5 } from "../components/projects/Project5";

const Projects: NextPage<any> = () => {
  return (
    <Fragment>
      <Head>
        <title>Arthur Hwang | Projects</title>
        <meta
          name="description"
          content="Built with custom NextJS, Apollo, and GraphQL, this website is a showcase of my recent projects as a Fullstack Web Developer."
        />
      </Head>

      {/* PROJECT 1 - bestattorney.com-gatsby */}
      <Project1 />
      {/* PROJECT 2 - arthurhwang.dev */}
      <Project2 />
      {/* PROJECT 3 - bestattorney.com-admin*/}
      <Project3 />
      {/* PROJECT 4 - bestattorney - LAMP */}
      <Project4 />
      {/* PROJECT 5 - toneify*/}
      <Project5 />
    </Fragment>
  );
};

export default withApollo(Projects);
