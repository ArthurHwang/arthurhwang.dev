import Head from "next/head";
import { NextPage } from "next";
import { ReactElement } from "react";
import { withApollo } from "../lib/apollo";
import { Project1 } from "../components/projects/Project1";
import { Project2 } from "../components/projects/Project2";
import { Project3 } from "../components/projects/Project3";
import { Project4 } from "../components/projects/Project4";
// import { Project5 } from '../components/projects/Project5';
import { Project6 } from "../components/projects/Project6";
import { Project7 } from "../components/projects/Project7";
import "../util/slick-fix.css";

const Projects: NextPage = (): ReactElement => {
  return (
    <div className="circuit-bg">
      <Head>
        <title>Arthur Hwang | Projects</title>
        <meta
          name="description"
          content="Built with custom NextJS, Apollo, and GraphQL, this website is a showcase of my recent projects as a Full Stack Web Developer."
        />
      </Head>

      {/* PROJECT 7 -RSVP Serverless */}
      <Project7 />

      {/* PROJECT 1 - bestattorney.com-gatsby */}
      <Project1 />

      {/* PROJECT 2 - arthurhwang.dev */}
      <Project2 />

      {/* PROJECT 4 - bestattorney - LAMP */}
      <Project4 />

      {/* PROJECT 3 - bestattorney.com-admin*/}
      <Project3 />

      {/* PROJECT 6 - keeb kraze*/}
      <Project6 />

      {/* PROJECT 5 - toneify*/}
      {/* <Project5 /> */}
    </div>
  );
};

export default withApollo(Projects);
