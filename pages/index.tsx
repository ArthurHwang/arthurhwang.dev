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
import Link from "next/link";

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
        <h2>
          I'm a Senior Front-end Developer at Torchbox. My role spans leading
          teams, managing others and web development itself. I ❤ React and
          Wagtail, and think Progressive Web Apps are awesome. While I work
          mostly with UI, I also enjoy getting involved in design, back-end
          development and improving project workflows. I work with the NHS,
          global charities, universities and many other great organisations.
          Browse some of my work, view my skills, or get in touch. You can also
          find me on Twitter, Github, LinkedIn, CodePen and Instagram.
        </h2>
        <h2>
          I estimate for, architect, build, optimise and launch client-side
          solutions that users love. Managing others, leading teams and
          consulting on front-end architecture are my day-to-day bread and
          butter. I'm equally happy interacting directly with clients or working
          alongside a Delivery Manager - every project is different. Here is a
          selection of relevant technologies that I have experience with:
        </h2>
        <h2>
          Ideas, code; presence specialising in impactful development & design.
        </h2>
        <p>
          I have worked on projects that have often exceeded expectations, while
          meeting budget objectives and deadlines. These projects have brought
          real and significant results for clients. I bring sound business
          processes and progressive thinking, with a proven ability to work with
          diverse groups of people at all levels. The value I bring to your
          organization is not only my performance record, but also my high-level
          analytical and decision making skills. I welcome the opportunity to
          discuss your needs and my qualifications.
        </p>
        <p>
          I love creating beautiful code, and cater for all kinds of projects.
          Whether it be an e-commerce solution, events management system;
          dashboard, or even a small business portfolio I'm your man. If you
          would like to see some of my work just take a look at my portfolio, or
          alternatively get in contact for more information.
        </p>
        <p>
          The way we view and interact with the web is constantly changing. As
          an experienced website developer, I help people and companies create
          an online presence that provides an optimal experience.
        </p>
        <Link href="/">
          <a className="link">GO HOME</a>
        </Link>

        <h2>Connect with me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          quas, voluptatum minima ab nesciunt nemo sapiente accusantium amet
          laboriosam velit corrupti exercitationem. Qui et similique officiis,
          asperiores sed nisi? Eaque blanditiis animi fuga beatae delectus sint
          reprehenderit. Ducimus, minus. Consequatur debitis deserunt a
          excepturi earum non dolorem, doloribus ullam illum aliquid? Voluptate
          iusto, eligendi, veniam modi cumque saepe illum in distinctio porro
          expedita eaque quos, aliquid qui rerum tempore est obcaecati nisi quis
          repudiandae. Saepe accusamus reiciendis blanditiis nesciunt autem,
          temporibus facilis, ducimus in consequuntur similique incidunt
          officiis dolorum vero eos odit eum laudantium ab! Corporis, deserunt?
          Animi, dolor iusto ipsam non quisquam voluptas architecto enim
          consequuntur eveniet quo quos esse similique facilis cumque,
          dignissimos repudiandae, doloribus perspiciatis provident odit amet
          adipisci inventore vero. Corporis mollitia in consequatur, est illo
          impedit numquam veniam sequi deserunt, fugiat atque possimus aut
          laborum dolores molestias. Aliquid, aperiam nostrum culpa deleniti
          inventore eos neque sequi voluptate, iure provident officiis dolores
          repellat itaque sunt et quas adipisci. Incidunt repellat ipsa omnis
          reiciendis. Totam, quam saepe amet sapiente ipsa labore sint nam nobis
          esse iusto ea doloremque molestiae explicabo. Blanditiis soluta vero
          nam beatae. Quibusdam repudiandae harum temporibus officia molestiae
          maiores ratione recusandae nesciunt nobis quaerat! Voluptates
          architecto provident rem at ipsa optio, aliquam laudantium eum
          necessitatibus, earum quia reiciendis nulla! Minus incidunt,
          asperiores necessitatibus ratione neque velit repellat, laboriosam,
          tempora modi rerum sapiente animi. Quisquam excepturi quis alias
          magnam eum earum consectetur aliquid ipsam nihil corrupti nulla
          possimus eaque, minima voluptatibus dolore, dolor minus corporis porro
          molestias fuga, iste exercitationem? Rem, similique nulla et doloribus
          ab fuga. Mollitia id illum itaque reiciendis odit impedit, atque,
          voluptatem magnam, numquam sit suscipit beatae quos. Dolore veritatis
          fuga voluptate molestias, adipisci consectetur laboriosam dolor
          quisquam, qui nulla distinctio doloremque cum dicta. Recusandae
          debitis modi sint rerum ipsum libero?
        </p>
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

const ContentWrap = styled("div")``;
