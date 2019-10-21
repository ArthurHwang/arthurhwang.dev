import { Fragment } from "react";
import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Projects: NextPage<any> = () => {
  return (
    <Fragment>
      <Head>
        <title>Arthur Hwang | Projects</title>
        <meta name="description" content="Arthur Hwang's Blog" />
      </Head>
      <ProjectOne></ProjectOne>
    </Fragment>
  );
};

export default Projects;

const ProjectOne = styled("div")``;
