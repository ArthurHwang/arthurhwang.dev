import { Fragment } from "react";
import { NextPage } from "next";
import { CommitList } from "../components/CommitList";
import Head from "next/head";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

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
              <img src="/static/projects/bestattorney-gatsby-min.webp" />
            </div>
            {/* <div className="commits"> */}
            {/* <h3>Recent Commits & CI Status</h3> */}
            <LazyLoad height={207}>
              <CommitList owner="bestattorney" name="bestattorney.com-gatsby" />
            </LazyLoad>

            {/* </div> */}

            <div className="accomplishments">
              <h3>Accomplishments:</h3>
              <ul>
                <li>
                  Single handedly rewrote entire old application to use modern
                  technolgies with React using GatsbyJS for code splitting,
                  performance, SEO benefits.
                </li>
                <li>Integrated Blog powered by custom headless wordpress</li>
                <li>
                  Integrated custom Google AMP (Accelerated Mobile Pages) for
                  blog
                </li>
                <li>
                  Integrated E2E (cypress) / Unit Tests (jest) into project
                </li>
                <li>
                  Created a design and typography system to easily empower
                  non-developers to be able to change application look
                </li>
                <li>
                  Created proprietary folder structure to empower non-developers
                  to be able to change things on the application
                </li>
                <li>Implemented custom CI / CD workflows with CircleCI</li>

                <li>Entire application is responsive web ready</li>
                <li>Integrated project with Google marketing suite</li>
                <li>Integrated SEO for entire site complete with JSON-LD</li>
                <li>Cross Browser Compatibility</li>
                <li>
                  Used styled components library to create reuseable components
                  and scoped CSS to avoid global conflicts
                </li>
                <li>
                  Written with typescript for reduced bugs and better
                  development tools
                </li>
                <li>
                  Implemented automation webhooks to alert company of contact
                  form submissions and scholarship submission
                </li>
                <li>
                  Correctly server rendered lazy loaded images for maximum SEO
                  benefit
                </li>
                <li>
                  Created Custom google maps component to display all of
                  companies locations
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
            <LazyLoad height={207}>
              <CommitList owner="ArthurHwang" name="arthurhwang.dev" />
            </LazyLoad>
            <div className="accomplishments">
              <h3>Accomplishments:</h3>
              <ul>
                <li>
                  Used NextJS to write server rendered isomorphic application
                </li>
                <li>
                  Used Formik and express to handle backend logic handling form
                  submissions
                </li>
                <li>
                  Use Apollo and GraphQL to programatically load data fetched
                  from Github API
                </li>
                <li>
                  Implemented and Used Contentful Delivery API to source data
                  from CMS.{" "}
                </li>
                <li>Parse markdown data into blog template</li>
                <li>
                  Setup custom hosting solution with cloudflare and zeit NOW
                </li>

                <li>Fully responsive application</li>
                <li>Implemented custom form validation using Formik and Yup</li>
                <li>Used styled components to create reusable components</li>
                <li>Use Particlejs to render custom header background</li>
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
            <LazyLoad height={207}>
              <CommitList
                owner="bestattorney"
                name="bestattorney.com"
                path="SPAs"
              />
            </LazyLoad>

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
    </Fragment>
  );
};

export default Projects;

const ContentWrap = styled("div")`
  max-width: 1300px;
  margin: 0 auto;
  /* border: 2px solid grey; */
  /* padding: 0 2rem; */
`;

const ProjectWrap = styled("div")`
  height: auto;
  padding: 4rem 2rem;

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

    li {
      font-size: 1.4rem;
    }
  }

  .split-grid-left {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1.5fr 1fr;
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
    grid-template-columns: 1fr 1.5fr;
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
