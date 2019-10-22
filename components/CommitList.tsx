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

export const CommitList: React.FC<Props> = ({ owner, name, path = null }) => {
  return (
    <Query query={COMMIT_LIST_QUERY} variables={{ owner, name, path }}>
      {({ data, loading }: any) => {
        if (loading || !data) {
          return (
            <ContentWrapper>
              <StyledCommits>
                <LoadingDots />
              </StyledCommits>
            </ContentWrapper>
          );
        }

        const commitHistory = data.repository.ref.target.history.edges;

        return (
          <ContentWrapper>
            <h3>Recent Commits || CI/CD Status</h3>

            <StyledCommits>
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
  padding: 0;

  a.link {
    margin: 0;
    font-size: 1.4rem;
    cursor: pointer;

    @media (max-width: 490px) {
      font-size: 1.2rem;
    }

    span {
      color: ${({ theme }) => theme.accent};
      font-weight: 700;
      font-size: 1.6rem;
    }
  }

  li {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .commit-wrap {
    max-width: 75%;
  }

  .commit-status {
    display: flex;
    align-items: center;
  }
`;

const CIButton = styled("div")`
  color: red;
  font-size: 1.4rem;
`;

const ContentWrapper = styled("div")``;
