import { Fragment } from "react";
import { NextPage } from "next";
import Head from "next/head";

const Projects: NextPage<any> = () => {
  return (
    <Fragment>
      <Head>
        <title>Arthur Hwang | Projects</title>
        <meta name="description" content="Arthur Hwang's Blog" />
      </Head>
      <div>
        <h3>bestattorney.netlify.com</h3>
        gatsby cypress react hooks context API, useReducerAPI, jest graphql
        custom hosting headless CMS wordpress . Smoke tests, unit tests, E2E
        tests
        <h3>arthurhwang.dev</h3>
        apollo graphql nextjs contentful cloudflare ziet now
        <h3>
          bestattorney.com angular user login / user authentication system
        </h3>
        cookies local storage angular reverse proxy
        <h4>toneify</h4>
        react redux mongodb express
        <h4>DS ALGOS</h4>
        DS-ALGO
      </div>
    </Fragment>
  );
};

export default Projects;
