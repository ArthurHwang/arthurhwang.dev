import { Fragment } from "react";
import { Query } from "react-apollo";
import { NextPage } from "next";
import styled from "styled-components";
import Head from "next/head";
import gql from "graphql-tag";
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

const Home: NextPage<any> = () => {
  // useEffect(() => {
  //   Fonts();
  // }, []);

  interface Query {
    data: any;
    loading: any;
  }

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
          {({ data, loading }: Query) => {
            if (loading || !data) {
              return <div>Loading ...</div>;
            }
            return <div>{JSON.stringify(data)}</div>;
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
