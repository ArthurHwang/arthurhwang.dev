import styled from "styled-components";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { LoadingDots } from "./LoadingDots";

interface Props {
  owner: string;
  name: string;
  path?: string;
}

const COMMIT_LIST_QUERY = gql`
  query Repo($owner: String!, $name: String!, $path: String) {
    repository(owner: $owner, name: $name) {
      ref(qualifiedName: "master") {
        target {
          ... on Commit {
            history(first: 5, path: $path) {
              pageInfo {
                hasNextPage
                endCursor
              }
              edges {
                node {
                  oid
                  commitUrl
                  messageHeadline
                  pushedDate
                  status {
                    state
                    contexts {
                      state
                      targetUrl
                      description
                      context
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// function truncateText(str: string) {
//   return str.substring(0, 40);
// }

export const CommitList: React.FC<Props> = ({ owner, name, path = null }) => {
  return (
    <Query query={COMMIT_LIST_QUERY} variables={{ owner, name, path }}>
      {({ data, loading }: any) => {
        if (loading || !data) {
          return (
            <ContentWrapper>
              {/* <h3>Recent Commits & CI/CD Status</h3> */}
              <StyledCommits>
                <LoadingDots />
              </StyledCommits>
            </ContentWrapper>
          );
        }

        const commitHistory = data.repository.ref.target.history.edges;

        // console.log(commitHistory);
        return (
          <ContentWrapper>
            <h3>Recent Commits || CI/CD Status</h3>

            <StyledCommits>
              {/* <LoadingDots /> */}
              {commitHistory.map((commit: any) => (
                <li key={commit.node.oid}>
                  <div className="commit-wrap">
                    <a
                      className="link"
                      href={
                        commit.node.status
                          ? commit.node.status.contexts[0].targetUrl
                          : null
                      }
                    >
                      <span>-</span> {commit.node.messageHeadline}
                    </a>
                  </div>
                  <a
                    className="commit-status"
                    href={
                      commit.node.status
                        ? commit.node.status.contexts[0].targetUrl
                        : null
                    }
                  >
                    <CIButton>
                      {commit.node.status
                        ? commit.node.status.contexts[0].state
                        : "ERROR"}
                    </CIButton>
                  </a>
                </li>
              ))}
            </StyledCommits>
          </ContentWrapper>
        );
      }}
    </Query>
  );
};

const StyledCommits = styled("ul")`
  /* height: 100%; */

  padding: 0;

  .commit-wrap {
    max-width: 75%;
  }

  .commit-status {
    display: flex;
    align-items: center;
  }
  a.link {
    margin: 0;
    font-size: 1.4rem;
    cursor: pointer;
    /* white-space: nowrap; */
    /* flex: 1; */

    @media (max-width: 490px) {
      font-size: 1.2rem;
    }

    span {
      color: ${({ theme }) => theme.accent};
      font-weight: 700;
      font-size: 1.6rem;
    }
  }

  /* ul {
    list-style-type: none;
  } */

  li {
    display: flex;
    justify-content: space-between;
    align-content: center;

    /* &:nth-child(even) {
      background-color: ${({ theme }) => theme.lightgrey};
    } */
  }
`;

const CIButton = styled("div")`
  /* background-color: red; */
  color: red;
  font-size: 1.4rem;
`;

const ContentWrapper = styled("div")`
  /* width: 100%;
  height: 100%; */
  /* min-height: 100%; */
  /* box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2); */
  /* height: 100%; */
`;
