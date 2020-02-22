import styled from "styled-components";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { LoadingDots } from "./LoadingDots";
import { GoGitCommit } from "react-icons/go";
import { StatusButton } from "./StatusButton";
import { ReactElement } from "react";

interface Props {
  owner: string;
  name: string;
  source?: string;
  path?: string;
  idx?: number;
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

const fixUsername = (username: string): string => {
  if (username === "Arthur Hwang") {
    return username.split(" ").join("");
  } else {
    return username;
  }
};

export const CommitList: React.FC<Props> = ({
  owner,
  name,
  source,
  path = null,
  idx
}): ReactElement => {
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
            <h3>
              Real-Time Project Commits{" "}
              <span style={{ color: "black", fontWeight: 800 }}>||</span> CI/CD
              Status{" "}
            </h3>
            <StyledCommits>
              {commitHistory.map((commit: any) => {
                let commitUrl = commit.node.commitUrl;
                if (source === "gitlab") {
                  const gitlabUrl = `https://www.gitlab.com/ArthurHwang${
                    commitUrl.split("https://github.com/bestattorney")[1]
                  }`
                    .replace(
                      /bestattorney.com-gatsby/gi,
                      "bestattorney-com-gatsby"
                    )
                    .replace(/bestattorney.com/gi, "bestattorney-com");

                  commitUrl = gitlabUrl;
                }
                return (
                  <li key={commit.node.oid}>
                    <div className="commit-wrap">
                      <div className="author-wrap">
                        <img src={commit.node.author.avatarUrl} />{" "}
                      </div>
                      <div>
                        <div>
                          <span>{fixUsername(commit.node.author.name)} </span>
                          <span>
                            <strong style={{ color: "grey" }}>
                              <GoGitCommit
                                style={{
                                  position: "relative",
                                  top: "2px",
                                  color: "grey",
                                  transform: "rotate(90deg)"
                                }}
                              />
                              <span style={{ color: "grey" }}>
                                {commit.node.oid.substring(0, 6)}
                              </span>
                            </strong>
                          </span>
                        </div>
                        <div className="commit-message">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link"
                            href={commitUrl}
                          >
                            <GoGitCommit
                              style={{
                                position: "relative",
                                top: "2px",
                                color: "#37BC9B"
                              }}
                            />{" "}
                            {commit.node.messageHeadline}
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`commit-status ${
                        commit.node.status ? "" : "disabled"
                      }`}
                      // href={
                      //   commit.node.status
                      //     ? idx === 1
                      //       ? commit.node.status.contexts[1].targetUrl
                      //       : commit.node.status.contexts[0].targetUrl
                      //     : null
                      // }
                    >
                      <StyledStatus>
                        {StatusButton(
                          commit.node.status
                            ? idx === 1
                              ? commit.node.status.contexts[1].state
                              : commit.node.status.contexts[0].state
                            : null
                        )}
                      </StyledStatus>
                    </a>
                  </li>
                );
              })}
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
        width: 100%;
        text-align: right;
      }
      &.failed {
        width: 100%;
        text-align: right;
      }
      &.null {
        width: 100%;
        text-align: right;
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
  min-height: 314px;

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

    border-top: 1px solid #ebeaeb;

    &:first-child {
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
      @media (max-width: 490px) {
        margin-bottom: 1rem;
        line-height: 20px;
        text-indent: -1.1em;
        padding-left: 1em;
        margin-left: 2px;
      }
    }
  }

  .commit-status {
    display: flex;
    align-items: center;
    /* cursor: not-allowed; */

    &.disabled {
      cursor: not-allowed;
    }
  }
`;

const ContentWrapper = styled("div")``;
