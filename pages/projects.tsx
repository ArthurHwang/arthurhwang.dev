import { Fragment } from "react";
import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Query } from "react-apollo";
import gql from "graphql-tag";

interface Query {
  data: any;
  loading: any;
}

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
const Projects: NextPage<any> = () => {
  return (
    <Fragment>
      <Head>
        <title>Arthur Hwang | Projects</title>
        <meta name="description" content="Arthur Hwang's Blog" />
      </Head>
      <ProjectWrap>
        <ContentWrap>
          <a href="https://www.bestattorney.com" className="link">
            Bisnar | Chase - GatsbyJS
          </a>

          <div className="project split-grid-left">
            {/* <Link href="https://www.bestattorney.com"> */}

            {/* </Link> */}

            <div className="img">
              <img src="/static/projects/bestattorney-gatsby.png" />
            </div>
            <div className="commits">
              <h3>Recent Commits</h3>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus, impedit?
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus, impedit?
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus, impedit?
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus, impedit?
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus, impedit?
                </li>
              </ul>
            </div>

            <div className="accomplishments">
              <h3>Accomplishments:</h3>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>

                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
              </ul>
            </div>
          </div>
          <div className="badges">
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              neque.
            </p>
            <button>Source</button>
            <button>Launch</button>
          </div>
        </ContentWrap>
      </ProjectWrap>

      <ProjectWrap className="bg-grey">
        <ContentWrap>
          <a href="https://www.bestattorney.com" className="link">
            arthurhwang.dev
          </a>

          <div className="project split-grid-right">
            {/* <Link href="https://www.bestattorney.com"> */}

            {/* </Link> */}

            <div className="img">
              <img src="/static/projects/arthurhwang.dev.png" />
            </div>
            <div className="commits">
              <h3>Recent Commits</h3>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus, impedit?
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus, impedit?
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus, impedit?
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus, impedit?
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus, impedit?
                </li>
              </ul>
            </div>

            <div className="accomplishments">
              <h3>Accomplishments:</h3>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>

                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
              </ul>
            </div>
          </div>
          <div className="badges">
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              neque.
            </p>
            <button>Source</button>
            <button>Launch</button>
          </div>
        </ContentWrap>
      </ProjectWrap>

      <ProjectWrap>
        <ContentWrap>
          <a href="https://www.bestattorney.com" className="link">
            Bisnar | Chase administration login
          </a>

          <div className="project split-grid-left">
            {/* <Link href="https://www.bestattorney.com"> */}

            {/* </Link> */}

            <div className="img">
              <img src="/static/projects/bestattorney.com-admin.png" />
            </div>
            <div className="commits">
              <h3>Recent Commits</h3>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus, impedit?
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus, impedit?
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus, impedit?
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus, impedit?
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus, impedit?
                </li>
              </ul>
            </div>

            <div className="accomplishments">
              <h3>Accomplishments:</h3>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>

                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, aliquid?
                </li>
              </ul>
            </div>
          </div>
          <div className="badges">
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span>
          </div>
          <div>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              neque.
            </p> */}
            <button>Source</button>
            <button>Launch</button>
          </div>
        </ContentWrap>
      </ProjectWrap>

      <ProjectWrap className="bg-grey">
        <div className="project">
          {/* <Link href="https://www.bestattorney.com"> */}
          <a href="https://www.bestattorney.com" className="link">
            bestattorney.com LAMP rewrite
          </a>
          {/* </Link> */}
        </div>
      </ProjectWrap>

      <ProjectWrap>
        <div className="project">
          {/* <Link href="https://www.bestattorney.com"> */}
          <a href="https://www.bestattorney.com" className="link">
            toneify
          </a>
          {/* </Link> */}
        </div>
      </ProjectWrap>

      <ProjectWrap className="bg-grey">
        <div className="project">
          {/* <Link href="https://www.bestattorney.com"> */}
          <a href="https://www.bestattorney.com" className="link">
            Bestattorney.com
          </a>
          {/* </Link> */}
        </div>
      </ProjectWrap>

      <Query query={GET_REPOSITORIES_OF_CURRENT_USER}>
        {({ data, loading }: Query) => {
          if (loading || !data) {
            return <div>Loading ...</div>;
          }
          return <div>{JSON.stringify(data)}</div>;
        }}
      </Query>
    </Fragment>
  );
};

export default Projects;

const ContentWrap = styled("div")`
  max-width: 1300px;
  margin: 0 auto;
  /* border: 2px solid grey; */
  padding: 0 2rem;
`;

const ProjectWrap = styled("div")`
  height: auto;
  padding: 4rem;

  &.bg-grey {
    background: ${({ theme }) => theme.lightgrey};
  }

  h3,
  h4 {
    margin: 0;
    border-bottom: 2px solid black;
  }

  .badges {
    text-align: center;
  }

  .link {
    display: block;
    margin-bottom: 2rem;
    font-size: 3rem;
  }

  /* .link .right {
    display: block;
    margin-bottom: 2rem;
    text-align: right;
    font-size: 3rem;
  } */

  .img {
    grid-area: img;

    img {
      width: 100%;
    }
  }

  .commits {
    grid-area: commits;
  }

  .accomplishments {
    grid-area: accomplishments;
  }

  .split-grid-left {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "img accomplishments"
      "commits accomplishments";

    @media (max-width: 1400px) {
      grid-template-columns: initial;
      grid-template-rows: repeat(3, auto);
      grid-template-areas:
        "img"
        "accomplishments"
        "commits";
    }
  }

  .split-grid-right {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "accomplishments img"
      "accomplishments commits";

    @media (max-width: 1400px) {
      grid-template-columns: initial;
      grid-template-rows: repeat(3, auto);
      grid-template-areas:
        "img"
        "accomplishments"
        "commits";
    }
  }
`;
