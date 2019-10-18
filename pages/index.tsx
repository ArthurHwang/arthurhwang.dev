import { Fragment } from "react";
// import { Query } from "react-apollo";
// import LogoNodejs from "react-ionicons/lib/LogoNodejs";
import { NextPage } from "next";
import styled from "styled-components";
import Head from "next/head";
// import gql from "graphql-tag";
// import LogoNodejs from "react-ionicons/lib/LogoNodejs";
// import Fonts from "../util/Fonts";
// import { withApollo } from "../lib/apollo";
// import { useLayoutEffect } from "react";
// import Link from "next/link";
import { Intro } from "../components/home/Intro";

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

      {/* <Query query={GET_REPOSITORIES_OF_CURRENT_USER}>
          {({ data, loading }: Query) => {
            if (loading || !data) {
              return <div>Loading ...</div>;
            }
            return <div>{JSON.stringify(data)}</div>;
          }}
        </Query> */}

      <StyledSkills>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          libero quam numquam quisquam cumque fugit harum blanditiis, maiores
          non natus reprehenderit necessitatibus, iste dicta. Ab ea saepe animi!
          Assumenda animi similique, eligendi cumque nobis perferendis veniam
          rerum perspiciatis possimus dolorem at magni mollitia a maxime tenetur
          nulla porro fugiat placeat ratione. Cumque natus quisquam eius
          delectus nisi dolorum, velit earum corrupti quidem nulla? Natus fugiat
          dolores vero odio eveniet nesciunt quis dolorum quas ipsam.
          Temporibus, maxime similique. Suscipit omnis dignissimos, alias
          distinctio dolor dolore dicta aspernatur, ipsum nulla consequuntur ex
          possimus officia eveniet corporis. Ab laborum minus sed tenetur
          quibusdam, porro excepturi! Aliquid ex enim accusamus consequuntur
          pariatur omnis saepe iste deserunt dolores magni sapiente odio, unde
          doloremque excepturi, distinctio eos aspernatur. Repellendus tempora
          iure voluptates quasi totam odit iusto dicta dolorem delectus
          reiciendis dolore a enim possimus illum ratione, ut adipisci. Natus,
          corporis assumenda! Illo, quaerat iste eius laudantium explicabo
          mollitia veritatis aperiam id at temporibus, esse similique adipisci
          alias suscipit pariatur qui provident fuga ad itaque tenetur.
          Accusantium totam incidunt debitis a sed odio, alias quis commodi
          voluptates distinctio exercitationem rem provident officia, labore
          quidem neque maiores facere magni itaque quam, illo in ut minima quae?
          Nam, quis!
        </p>
      </StyledSkills>
    </Fragment>
  );
};

export default Home;

const StyledSkills = styled("div")``;
