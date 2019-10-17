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
// import { useEffect } from "react";
// import Link from "next/link";

import { IoMdMail } from "react-icons/io";

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
  // useEffect(() => {
  //   Fonts();
  // }, []);

  // interface Query {
  //   data: any;
  //   loading: any;
  // }

  return (
    <Fragment>
      <Head>
        <title>Arthur Hwang | Full-stack Web Developer</title>
        <meta
          name="description"
          content="Full-stack Web Developer Arthur Hwang"
        />
      </Head>

      <ContentWrap>
        <StyledLeft>
          <h2>About me</h2>
          <p>
            As a natural tinkerer, I love digging out the "why" of things. Being
            a self taught developer has taught me to not fear what I don't know,
            instead tackle it with sheer determination and an unwavering will.
            Having the privilege everyday to produce elegant and performant
            software solutions makes me happy.
          </p>
          <p>
            I am drawn to creating performance driven websites that are fully
            responsive using best practices that work on a wide range of
            devices. I take tremendous care to ensure that the project I am
            working on is not only scalable but also maintainable.{" "}
          </p>
          {/* <h2>
            I estimate for, architect, build, optimise and launch client-side
            solutions that users love. Managing others, leading teams and
            consulting on front-end architecture are my day-to-day bread and
            butter. I'm equally happy interacting directly with clients or
            working alongside a Delivery Manager - every project is different.
            Here is a selection of relevant technologies that I have experience
            with:
          </h2>
          <h2>
            Ideas, code; presence specialising in impactful development &
            design.
          </h2>
          <p>
            I have worked on projects that have often exceeded expectations,
            while meeting budget objectives and deadlines. These projects have
            brought real and significant results for clients. I bring sound
            business processes and progressive thinking, with a proven ability
            to work with diverse groups of people at all levels. The value I
            bring to your organization is not only my performance record, but
            also my high-level analytical and decision making skills. I welcome
            the opportunity to discuss your needs and my qualifications.
          </p>
          <p>
            I love creating beautiful code, and cater for all kinds of projects.
            Whether it be an e-commerce solution, events management system;
            dashboard, or even a small business portfolio I'm your man. If you
            would like to see some of my work just take a look at my portfolio,
            or alternatively get in contact for more information.
          </p>
          <p>
            The way we view and interact with the web is constantly changing. As
            an experienced website developer, I help people and companies create
            an online presence that provides an optimal experience.
          </p> */}
        </StyledLeft>

        {/* <StyledMiddle>
          <h2>Some of my skills</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente excepturi natus dicta. Ipsum, odio officiis? Nemo aspernatur tenetur itaque totam labore odit asperiores atque quibusdam delectus temporibus. Necessitatibus amet, neque quae cupiditate expedita vero eaque ipsum aliquam voluptas deserunt placeat officia blanditiis voluptatum maxime quaerat pariatur dolor non nihil architecto dicta id? Sit blanditiis odio voluptates molestiae quos iste quibusdam odit unde! Molestiae nisi ex cumque blanditiis, iusto deserunt eligendi esse, vitae impedit quas minus repellendus ducimus nulla veritatis nam provident veniam nihil necessitatibus, laborum in dolore. Magnam, eaque excepturi assumenda voluptas repudiandae nobis optio architecto suscipit ut maxime quis quaerat repellendus voluptate mollitia quisquam dolorem tenetur ex nesciunt officiis aperiam! Quisquam temporibus accusamus obcaecati cupiditate saepe, provident voluptates voluptas modi ut vitae? Odit possimus maiores ducimus veniam tempore beatae ea ex. Ex magnam asperiores voluptate fugit optio nostrum quisquam reprehenderit at porro id. Quasi nihil repellendus provident modi repellat magnam iusto ipsam necessitatibus assumenda, quae eos harum aut, sapiente facilis voluptates eius quas praesentium corporis in alias? Esse a quo quasi vero temporibus. Officiis maxime tenetur exercitationem laudantium dignissimos minus blanditiis architecto repellendus nisi doloribus quisquam deleniti, culpa quia optio labore tempore? Beatae incidunt rem voluptatibus nobis soluta explicabo?</p>
        </StyledMiddle> */}

        <StyledRight>
          <h2>Contact me</h2>
          <div className="links">
            <a className="link" href="mailto:arthurhwang.dev">
              <IoMdMail />
              Email
            </a>
            <a className="link" href="mailto:arthurhwang.dev">
              <IoMdMail /> Github
            </a>
            <a className="link" href="mailto:arthurhwang.dev">
              Github
            </a>
            <a className="link" href="mailto:arthurhwang.dev">
              Github
            </a>
            <a className="link" href="mailto:arthurhwang.dev">
              Github
            </a>
          </div>
        </StyledRight>

        {/* <LogoNodejs
          onClick={() => alert("Hi!")}
          style={{ zIndex: "-1" }}
          fontSize="60px"
          beat={true}
          color="#43853d"
        /> */}
        {/* <Query query={GET_REPOSITORIES_OF_CURRENT_USER}>
          {({ data, loading }: Query) => {
            if (loading || !data) {
              return <div>Loading ...</div>;
            }
            return <div>{JSON.stringify(data)}</div>;
          }}
        </Query> */}
      </ContentWrap>
    </Fragment>
  );
};

export default Home;

// const StyledMiddle = styled("div")``;

const StyledLeft = styled("div")`
  /* padding: 0 2rem 0 18rem; */
`;

const StyledRight = styled("div")`
  /* padding: 0 8rem 0 2rem; */
  .links {
    display: flex;
    flex-direction: column;
  }
`;

const ContentWrap = styled("div")`
  /* display: grid; */
  /* grid-gap: 2rem; */
  /* grid-template-columns: 1fr 1fr 1fr; */
`;
