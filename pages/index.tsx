import { Fragment } from "react";
// import { Query } from "react-apollo";
// import LogoNodejs from "react-ionicons/lib/LogoNodejs";
import { NextPage } from "next";
// import styled from "styled-components";
import Head from "next/head";
// import gql from "graphql-tag";
// import LogoNodejs from "react-ionicons/lib/LogoNodejs";
// import Fonts from "../util/Fonts";
// import { withApollo } from "../lib/apollo";
// import { useLayoutEffect } from "react";
// import Link from "next/link";
import { Intro } from "../components/home/Intro";
import {Skills} from "../components/home/Skills"
import {About} from "../components/home/About"
import {Contact} from "../components/home/Contact"
// import {
//   FaGithubSquare,
//   FaLinkedin,
//   FaFacebookSquare,
//   FaFileCode,
//   // FaRegCopyright,
//   FaTwitterSquare
// } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";

// const GET_REPOSITORIES_OF_CURRENT_USER = gql`
//   {
//     viewer {
//       repositories(first: 5, orderBy: { direction: DESC, field: STARGAZERS }) {
//         edges {
//           node {
//             id
//             name
//             url
//             descriptionHTML
//             primaryLanguage {
//               name
//             }
//             owner {
//               login
//               url
//             }
//             stargazers {
//               totalCount
//             }
//             viewerHasStarred
//             watchers {
//               totalCount
//             }
//             viewerSubscription
//           }
//         }
//       }
//     }
//   }
// `;

const Home: NextPage<any> = () => {
  // useLayoutEffect(() => {
  //   Fonts();
  // }, []);

  // interface Query {
  //   data: any;
  //   loading: any;
  // }

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
      <Skills/>
      <About/>
      <Contact />

      {/* <Query query={GET_REPOSITORIES_OF_CURRENT_USER}>
          {({ data, loading }: Query) => {
            if (loading || !data) {
              return <div>Loading ...</div>;
            }
            return <div>{JSON.stringify(data)}</div>;
          }}
        </Query> */}


    </Fragment>
  );
};

export default Home;


