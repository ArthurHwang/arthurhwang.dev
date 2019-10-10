import { Fragment } from "react";
import styled from "styled-components";
import Head from "next/head";
import gql from "graphql-tag";
import { Query } from "react-apollo";
// import Fonts from "../util/Fonts";
// import { withApollo } from "../lib/apollo";

const GET_REPOSITORIES_OF_CURRENT_USER = gql`
  {
    viewer {
      repositories(first: 5, orderBy: { direction: DESC, field: STARGAZERS }) {
        edges {
          node {
            id
            name
            url
            descriptionHTML
            primaryLanguage {
              name
            }
            owner {
              login
              url
            }
            stargazers {
              totalCount
            }
            viewerHasStarred
            watchers {
              totalCount
            }
            viewerSubscription
          }
        }
      }
    }
  }
`;

const Home = () => {
  // useEffect(() => {
  //   Fonts();
  // }, []);
  return (
    <Fragment>
      <Head>
        <title>Arthur Hwang | Fullstack Web Developer</title>
        <meta
          name="description"
          content="Full Stack Developer Brute Force Code"
        />
      </Head>

      <StyledWrap>
        <Query query={GET_REPOSITORIES_OF_CURRENT_USER}>
          {({ data, loading }) => {
            // const { viewer } = data;
            console.log(data);
            // if (loading || !viewer) {
            //   return <div>Loading ...</div>;
            // }
            return (
              <div>
                {/* {viewer.name} {viewer.login} */}
                {JSON.stringify(data)}
              </div>
            );
          }}
        </Query>
      </StyledWrap>
    </Fragment>
  );
};

export default Home;

const StyledWrap = styled("div")`
  /* color: red;
  background: blue; */
`;
