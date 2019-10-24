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
                  author {
                    avatarUrl
                    name
                    date
                  }
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

const StatusButton: any = (status: string | null) => {
  switch (status) {
    case "SUCCESS":
      return (
        <div className="ci-btn success">
          <div className="status-icon">
            <img src="/static/check.svg" />
          </div>
          <div className="badge-label success">passed</div>
        </div>
      );
    case "FAILURE":
      return (
        <div className="ci-btn failed">
          <div className="status-icon ">
            <img src="/static/error.svg" />
          </div>
          <div className="badge-label failed">failed</div>
        </div>
      );
    case "PENDING":
      return (
        <div className="ci-btn pending">
          <div className="status-icon ">
            <img src="/static/pending.svg" />
          </div>
          <div className="badge-label pending">pending</div>
        </div>
      );
    default:
      return (
        <div className="ci-btn null">
          <div className="status-icon pending">
            <img src="/static/null.svg" />
          </div>
          <div className="badge-label null">NO DATA</div>
        </div>
      );
  }
};

export const CommitList: React.FC<Props> = ({ owner, name, path = null }) => {
  const fixUsername = (username: string) => {
    if (username === "Arthur Hwang") {
      return username.split(" ").join("");
    } else {
      return username;
    }
  };
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
            <h3>Real-Time Project Commits || CI/CD Status Links</h3>
            <StyledCommits>
              {commitHistory.map((commit: any) => (
                <li key={commit.node.oid}>
                  <div className="commit-wrap">
                    <div className="author-wrap">
                      <img src={commit.node.author.avatarUrl} /> {/* </div> */}
                    </div>
                    <div>
                      <div> {fixUsername(commit.node.author.name)}</div>
                      <div className="commit-message">
                        <a
                          target="_blank"
                          rel="noopener"
                          className="link"
                          href={commit.node.commitUrl}
                        >
                          <span>-</span> {commit.node.messageHeadline}
                        </a>
                      </div>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener"
                    className={`commit-status ${
                      commit.node.status ? "" : "disabled"
                    }`}
                    href={
                      commit.node.status
                        ? commit.node.status.contexts[0].targetUrl
                        : null
                    }
                  >
                    <StyledStatus>
                      {StatusButton(
                        commit.node.status
                          ? commit.node.status.contexts[0].state
                          : null
                      )}
                    </StyledStatus>
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

const StyledStatus = styled("div")`
  color: red;
  font-size: 1.4rem;

  .status-icon {
    height: 20px;
  }

  .ci-btn {
    padding: 0.2rem 0.7rem 0.2rem 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 13px;
    width: 100px;
    transition: transform 0.1s linear;

    &:hover {
      transform: scale(1.1);
    }

    &.success {
      background-color: #42c88a;
    }
    &.failed {
      background-color: #ed5c5c;
    }
    &.pending {
      background-color: #66d3e4;
    }
    &.null {
      background-color: #898989;
    }

    .badge-label {
      color: ${({ theme }) => theme.primary};
      text-align: left;

      &.success {
        /* width: 55px; */
        width: 100%;
        text-align: right;
      }
      &.failed {
        width: 100%;
        text-align: right;
        /* width: 55px; */
      }
      &.null {
        width: 100%;
        text-align: right;
        /* width: 55px; */
      }
    }

    img {
      width: 20px;
    }

    @media (max-width: 490px) {
      width: 95px;
    }
  }
`;

const StyledCommits = styled("ul")`
  padding: 0;

  a.link {
    margin: 0;
    font-size: 1.4rem;
      /* text-indent: -16px; */
      /* line-height: 1; */
      /* text-indent: 100%; */
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

  /* ul {
    padding-left: 1.5rem;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 91%;

    li {
      font-size: 1.4rem;
      text-indent: -16px;

      &:before {
        content: "-";
        text-indent: -10px;
        font-weight: 800;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.secondaryAccent};
        margin-right: 1rem;
      }
    }
  } */

  /* ul {
    padding-left: 1.5rem;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 91%;
  } */

  li {
    display: flex;
    justify-content: space-between;
    align-content: center;
    /* box-shadow: 0px -4px 6px -6px #222; */

    border-top: 1px solid #ebeaeb;

    &:first-child {
      /* box-shadow: none; */
      border-top: none;
    }
  }

  .author-wrap {
    img {
      height: 100%;
      width: 100%;
      margin-right: 1rem;
      object-fit: cover;

      @media (max-width: 730px) {
        object-fit: contain;
      }
    }
  }

  .commit-wrap {
    max-width: calc(100% - 100px - 3%);
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 50px 1fr;
    overflow: hidden;

    .commit-message {
   

      @media(max-width:490px) {
        margin-bottom: 1rem;
        line-height: 20px;
        text-indent: -0.5em;
        padding-left: 0.5em;
      }
   
    }
  }

  .commit-status {
    display: flex;
    align-items: center;

    &.disabled {
      cursor: not-allowed;
    }
  }
`;

const ContentWrapper = styled("div")`
  /* min-height: 344px; */
`;
