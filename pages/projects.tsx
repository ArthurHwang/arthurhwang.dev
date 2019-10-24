import { NextPage } from "next";
import { CommitList } from "../components/CommitList";
import Head from "next/head";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub, FaPlay } from "react-icons/fa";

const Projects: NextPage<any> = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: "progressive",
    pauseOnHover: false,
    fade: true,
    speed: 1200,
    adaptiveHeight: true
  };
  return (
    <Fragment>
      <Head>
        <title>Arthur Hwang | Projects</title>
        <meta name="description" content="Arthur Hwang's Projects" />
      </Head>
      {/***************************************************************************************************/}
      {/******************************* PROJECT 1 - Bestattorney.com-gatsby *******************************/}
      {/***************************************************************************************************/}
      <ProjectWrap>
        <ContentWrap>
          <a
            target="_blank"
            rel="noopener"
            href="https://bestattorney.netlify.com"
            className="link  project-title"
          >
            Bisnar | Chase - Gatsby
          </a>
          <div className="project split-grid-left">
            <div>
              {/* 
            //@ts-ignore */}
              <Slider className="inner-slider" {...settings}>
                <img
                  src="/static/projects/bestattorney-gatsby/screenshot-1.png"
                  alt="screenshot 1"
                />

                {/* <picture>
                  <source
                    srcSet="/static/projects/bestattorney-gatsby/screenshot-1.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="/static/projects/bestattorney-gatsby/screenshot-1.png"
                    type="image/png"
                  />
                  <img src="/static/projects/bestattorney-gatsby/screenshot-1.webp" />
                </picture> */}
                <div className="vertical-wrapper">
                  <img
                    className="vertical"
                    src="/static/projects/bestattorney-gatsby/screenshot-2.png"
                    alt="screenshot 2"
                  />
                  <img
                    className="vertical"
                    src="/static/projects/bestattorney-gatsby/screenshot-3.png"
                    alt="screenshot 3"
                  />
                </div>
                <img
                  src="/static/projects/bestattorney-gatsby/screenshot-9.png"
                  alt="screenshot 9"
                />
                <img
                  src="/static/projects/bestattorney-gatsby/screenshot-8.png"
                  alt="screenshot 8"
                />

                <img
                  src="/static/projects/bestattorney-gatsby/screenshot-4.png"
                  alt="screenshot 4"
                />
                <img
                  src="/static/projects/bestattorney-gatsby/screenshot-5.png"
                  alt="screenshot 5"
                />
                <img
                  src="/static/projects/bestattorney-gatsby/screenshot-6.png"
                  alt="screenshot 6"
                />
                <img
                  src="/static/projects/bestattorney-gatsby/screenshot-7.png"
                  alt="screenshot 7"
                />
              </Slider>
            </div>
            <div className="commits">
              <LazyLoad height={344}>
                <CommitList
                  owner="bestattorney"
                  name="bestattorney.com-gatsby"
                />
              </LazyLoad>
            </div>

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
                <li>Created entire spanish equivalent of website</li>
                <li>7000 page statically generated website</li>
              </ul>
            </div>
          </div>
          <LazyLoad height={91}>
            <div className="badges">
              <img
                src="/static/projects/logos/Gatsby-Logo.svg"
                alt="gatsbyjs"
              />
              <img src="/static/projects/logos/React.png" alt="reactjs" />
              <img src="/static/projects/logos/ts.png" alt="typescript" />
              <img src="/static/projects/logos/gql.png" alt="graphql" />
              <img src="/static/projects/logos/circleci.png" alt="circleci" />
              <img src="/static/projects/logos/jest.png" alt="jest" />
              <img src="/static/projects/logos/cypress.png" alt="cypress" />
              <img src="/static/projects/logos/nodejs.png" alt="nodejs" />
              <img
                style={{ width: "60px" }}
                src="/static/projects/logos/styled-components.png"
                alt="styled components"
              />
              <img src="/static/projects/logos/netlify.png" alt="netlify" />
              <img src="/static/projects/logos/ga.png" alt="google analytics" />
              <img
                src="/static/projects/logos/gmp.png"
                alt="google marketing platform"
              />
            </div>
          </LazyLoad>
          <div className="buttons">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.github.com/ArthurHwang"
            >
              <ProjectButton color="blue">
                Source <FaGithub />
              </ProjectButton>
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://bestattorney.netlify.com"
            >
              <ProjectButton color="green">
                Launch <FaPlay />
              </ProjectButton>
            </a>
          </div>
        </ContentWrap>
      </ProjectWrap>

      {/***************************************************************************************************/}
      {/*********************************** PROJECT 2 - arthurhwang.dev ***********************************/}
      {/***************************************************************************************************/}
      <ProjectWrap className="bg-grey">
        <ContentWrap>
          <a
            // target="_blank"
            // rel="noopener"
            href="/"
            className="link project-title"
          >
            arthurhwang.dev
          </a>

          <div className="project split-grid-right">
            <div>
              {/* 
            //@ts-ignore */}
              <Slider className="inner-slider" {...settings}>
                <img
                  src="/static/projects/arthurhwang.dev/screenshot-1.png"
                  alt="screenshot 1"
                />
                <img
                  src="/static/projects/arthurhwang.dev/screenshot-2.png"
                  alt="screenshot 2"
                />
              </Slider>
            </div>
            <div className="commits">
              <LazyLoad height={344}>
                <CommitList
                  // className="commits"
                  owner="ArthurHwang"
                  name="arthurhwang.dev"
                />
              </LazyLoad>
            </div>

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
              </ul>
            </div>
          </div>
          <LazyLoad height={91}>
            <div className="badges">
              <img src="/static/projects/logos/nextjs.png" alt="nextjs" />
              <img src="/static/projects/logos/React.png" alt="reactjs" />
              <img src="/static/projects/logos/ts.png" alt="typescript" />
              <img src="/static/projects/logos/nodejs.png" alt="nodejs" />
              <img src="/static/projects/logos/apollo.png" alt="apollo" />
              <img src="/static/projects/logos/gql.png" alt="graphql" />
              <img
                style={{ width: "60px" }}
                src="/static/projects/logos/styled-components.png"
                alt="styled components"
              />
              <img
                src="/static/projects/logos/contentful.png"
                alt="contentful"
              />
              <img
                src="/static/projects/logos/formik.png"
                style={{ width: "60px" }}
                alt="formik"
              />
              <img
                src="/static/projects/logos/cloudflare.png"
                alt="cloudflare"
              />
              <img src="/static/projects/logos/mailgun.png" alt="mailgun" />
              <img src="/static/projects/logos/now.png" alt="now" />
            </div>
          </LazyLoad>
          <div className="buttons">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.github.com/ArthurHwang"
            >
              <ProjectButton color="blue">
                Source <FaGithub />
              </ProjectButton>
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://bestattorney.netlify.com"
            >
              <ProjectButton color="green">
                Launch <FaPlay />
              </ProjectButton>
            </a>
          </div>
        </ContentWrap>
      </ProjectWrap>

      {/***************************************************************************************************/}
      {/******************************* PROJECT 3 - Bestattorney.com-admin* *******************************/}
      {/***************************************************************************************************/}
      <ProjectWrap>
        <ContentWrap>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.bestattorney.com/admin"
            className="link project-title"
          >
            Bisnar | Chase - Admin Login System
          </a>

          <div className="project split-grid-left">
            <div>
              {/* 
            //@ts-ignore */}
              <Slider className="inner-slider" {...settings}>
                <img
                  src="/static/projects/bestattorney-admin/screenshot-1.png"
                  alt="screenshot 1"
                />
                <img
                  src="/static/projects/bestattorney-admin/screenshot-2.png"
                  alt="screenshot 2"
                />
                <img
                  src="/static/projects/bestattorney-admin/screenshot-3.png"
                  alt="screenshot 3"
                />
                <img
                  src="/static/projects/bestattorney-admin/screenshot-4.png"
                  alt="screenshot 4"
                />
              </Slider>
            </div>
            <div className="commits">
              <LazyLoad height={344}>
                <CommitList
                  owner="bestattorney"
                  name="bestattorney.com"
                  path="SPAs"
                />
              </LazyLoad>
            </div>

            <div className="accomplishments">
              <h3>Accomplishments:</h3>
              <ul>
                <li>
                  Created live production ready user authentication / user login
                  system for people in the company to log in and see
                  documentation
                </li>
                <li>Used Angular for front end application development</li>
                <li>Used Express to handle back end logic</li>
                <li>Ensured data privacy using bCrypt to hash passwords</li>
                <li>Stored sessions with JWT tokens</li>
                <li>
                  Used Sequelize ORM in conjunction with mysql node driver as
                  backend database
                </li>

                <li>
                  Complete authentication flow implemented with signup, signin,
                  logout and account credential editing
                </li>
                <li>
                  Used reverse proxy to get application running under existing
                  apache server.
                </li>
              </ul>
            </div>
          </div>
          <LazyLoad height={91}>
            <div className="badges">
              <img src="/static/projects/logos/angular.svg" alt="angular" />
              <img src="/static/projects/logos/express.svg" alt="express" />
              <img src="/static/projects/logos/ts.png" alt="typescript" />
              <img src="/static/projects/logos/nodejs.png" alt="nodejs" />
              <img src="/static/projects/logos/jwt.png" alt="json web token" />
              <img src="/static/projects/logos/sequelize.png" alt="sequelize" />
              <img src="/static/projects/logos/bootstrap.png" alt="bootstrap" />
            </div>
          </LazyLoad>
          <div className="buttons">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.github.com/ArthurHwang"
            >
              <ProjectButton color="blue">
                Source <FaGithub />
              </ProjectButton>
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://bestattorney.netlify.com"
            >
              <ProjectButton color="green">
                Launch <FaPlay />
              </ProjectButton>
            </a>
          </div>
        </ContentWrap>
      </ProjectWrap>

      {/***************************************************************************************************/}
      {/******************************* PROJECT 4 - Bestattorney.com **************************************/}
      {/***************************************************************************************************/}
      <ProjectWrap className="bg-grey">
        <ContentWrap>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.bestattorney.com"
            className="link project-title"
          >
            Bisnar | Chase - LAMP
          </a>

          <div className="project split-grid-right">
            <div>
              {/* 
            //@ts-ignore */}
              <Slider className="inner-slider" {...settings}>
                <img
                  src="/static/projects/bestattorney.com/screenshot-1.png"
                  alt="screenshot 1"
                />

                <div className="vertical-wrapper">
                  <img
                    className="vertical"
                    src="/static/projects/bestattorney.com/screenshot-3.png"
                    alt="screenshot 3"
                  />
                  <img
                    className="vertical"
                    src="/static/projects/bestattorney.com/screenshot-2.png"
                    alt="screenshot 2"
                  />
                </div>
                <img
                  src="/static/projects/bestattorney.com/screenshot-4.png"
                  alt="screenshot 4"
                />
                <img
                  src="/static/projects/bestattorney.com/screenshot-5.png"
                  alt="screenshot 5"
                />
                {/* <img src="/static/projects/bestattorney.com/screenshot-1.png" /> */}
              </Slider>
            </div>
            <div className="commits">
              <LazyLoad height={344}>
                <CommitList owner="bestattorney" name="bestattorney.com" />
              </LazyLoad>
            </div>

            <div className="accomplishments">
              <h3>Accomplishments:</h3>
              <ul>
                <li>
                  server administration. Used web domain hosts to manage a fully
                  fledged application website and managed a wordpress suite for
                  the marketing team to easily create new content. Used apache /
                  linux / ssh / to adminster server.
                </li>
                <li>
                  performed SEO optimization to help reduce bounce rate of
                  website
                </li>
                <li>
                  Worked in tandem with graphic designer to bring new life to
                  website. Worked and planned new site layouts / graphics and
                  landing pages to improve site look , feel and content.
                </li>
                <li>
                  Ensured cross browser compatibility both desktop and mobile.
                  IOS / android / firefox.
                </li>
                <li>
                  Implemented new security features that logged user information
                  to intake teams.
                </li>
                <li>
                  Increased site traffic and overall business. Directly impacted
                  intake team recieving more customers through site performance
                  and google analytics.
                </li>

                <li>Administered entire Github repo for 6 people.</li>
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
          <LazyLoad height={91}>
            <div className="badges">
              <img src="/static/projects/logos/ga.png" alt="google analytics" />
              <img
                src="/static/projects/logos/gmp.png"
                alt="google marketing platform"
              />
              <img
                src="/static/projects/logos/gsc.png"
                alt="google search console"
              />
              <img src="/static/projects/logos/lamp.png" alt="lamp" />
              <img src="/static/projects/logos/circleci.png" alt="circleci" />
              <img src="/static/projects/logos/wordpress.png" alt="wordpress" />
              <img src="/static/projects/logos/whm.png" alt="whm" />
              <img src="/static/projects/logos/cpanel.png" alt="cpanel" />
              <img src="/static/projects/logos/semrush.png" alt="semrush" />
            </div>
          </LazyLoad>
          <div className="buttons">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.github.com/ArthurHwang"
            >
              <ProjectButton color="blue">
                Source <FaGithub />
              </ProjectButton>
            </a>
            <a target="_blank" rel="noopener" href="https://bestattorney.com">
              <ProjectButton color="green">
                Launch <FaPlay />
              </ProjectButton>
            </a>
          </div>
        </ContentWrap>
      </ProjectWrap>
      {/***************************************************************************************************/}
      {/**************************************** PROJECT 5 - Toneify **************************************/}
      {/***************************************************************************************************/}
      <ProjectWrap>
        <ContentWrap>
          <a
            target="_blank"
            rel="noopener"
            href="https://toneify-arthurhwang.herokuapp.com/"
            className="link project-title"
          >
            Toneify
          </a>

          <div className="project split-grid-left">
            <div>
              {/* 
            //@ts-ignore */}
              <Slider className="inner-slider" {...settings}>
                <img
                  src="/static/projects/toneify/screenshot-1.png"
                  alt="screenshot 1"
                />
                <img
                  src="/static/projects/toneify/screenshot-2.png"
                  alt="screenshot 2"
                />
                <img
                  src="/static/projects/toneify/screenshot-4.png"
                  alt="screenshot 4"
                />
                <img
                  src="/static/projects/toneify/screenshot-7.png"
                  alt="screenshot 7"
                />
                <img
                  src="/static/projects/toneify/screenshot-5.png"
                  alt="screenshot 5"
                />
                <img
                  src="/static/projects/toneify/screenshot-6.png"
                  alt="screenshot 6"
                />
                <img
                  src="/static/projects/toneify/screenshot-8.png"
                  alt="screenshot 8"
                />
              </Slider>
            </div>
            <div className="commits">
              <LazyLoad height={344}>
                <CommitList owner="ArthurHwang" name="toneify" />
              </LazyLoad>
            </div>

            <div className="accomplishments">
              <h3>Accomplishments:</h3>
              <ul>
                <li>
                  server administration. Used web domain hosts to manage a fully
                  fledged application website and managed a wordpress suite for
                  the marketing team to easily create new content. Used apache /
                  linux / ssh / to adminster server.
                </li>
                <li>
                  performed SEO optimization to help reduce bounce rate of
                  website
                </li>
                <li>
                  Worked in tandem with graphic designer to bring new life to
                  website. Worked and planned new site layouts / graphics and
                  landing pages to improve site look , feel and content.
                </li>
                <li>
                  Ensured cross browser compatibility both desktop and mobile.
                  IOS / android / firefox.
                </li>
                <li>
                  Implemented new security features that logged user information
                  to intake teams.
                </li>
                <li>
                  Increased site traffic and overall business. Directly impacted
                  intake team recieving more customers through site performance
                  and google analytics.
                </li>

                <li>Administered entire Github repo for 6 people.</li>
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
          <LazyLoad height={91}>
            <div className="badges">
              <img src="/static/projects/logos/react.png" alt="react" />
              <img src="/static/projects/logos/redux.png" alt="redux" />
              <img src="/static/projects/logos/nodejs.png" alt="nodejs" />
              <img src="/static/projects/logos/express.svg" alt="express" />
              <img src="/static/projects/logos/mongodb.svg" alt="mongodb" />
              <img
                style={{ width: "60px" }}
                src="/static/projects/logos/semantic.png"
                alt="semantic UI"
              />
              <img src="/static/projects/logos/stripe.png" alt="stripe" />
            </div>
          </LazyLoad>
          <div className="buttons">
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/ArthurHwang/toneify"
            >
              <ProjectButton color="blue">
                Source <FaGithub />
              </ProjectButton>
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://toneify-arthurhwang.herokuapp.com/"
            >
              <ProjectButton color="green">
                Launch <FaPlay />
              </ProjectButton>
            </a>
          </div>
        </ContentWrap>
      </ProjectWrap>
    </Fragment>
  );
};

export default Projects;

const ProjectButton = styled("button")<{ color: string }>`
  background-color: ${props =>
    props.color === "blue" ? props.theme.secondary : props.theme.accent};
  color: ${({ theme }) => theme.primary};
  text-shadow: black 0px 0px 3px;
  font-weight: 600;
  padding: 1rem 5rem;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  transition: transform 0.1s linear;
  display: flex;
  align-items: center;

  svg {
    margin-left: 1rem;
  }

  &:disabled {
    opacity: 0.6;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const ContentWrap = styled("div")`
  max-width: 1300px;
  margin: 0 auto;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.25);
  padding: 1rem 2rem 2rem;
`;

const ProjectWrap = styled("div")`
  height: auto;
  padding: 4rem 2rem;

  .buttons {
    padding: 2rem 4rem 0;
    /* width: 100%; */
    display: flex;
    /* text-align: center; */
    /* flex: 1 0 10px; */
    width: auto;
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* margin: 0 auto; */

    button {
      margin: 1rem;
    }
  }

  &.bg-grey {
    background: ${({ theme }) => theme.lightgrey};
  }

  h3,
  h4 {
    margin: 0;
    border-bottom: 1px solid #ebeaeb;
    text-transform: uppercase;
  }

  .badges {
    display: flex;
    padding: 2rem 2rem;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ebeaeb;
    border-bottom: 1px solid #ebeaeb;
    flex-wrap: wrap;

    img {
      width: 85px;
    }

    @media (max-width: 768px) {
      padding: 0;
      margin-left: -2rem;
      margin-right: -2rem;

      img {
        margin: 1rem;
      }
    }
  }

  .project-title {
    display: inline-block;
    /* margin-bottom: 1rem; */
    font-size: 2.6rem;
    /* -webkit-box-shadow: 0 4px 6px -6px #222; */
    /* -moz-box-shadow: 0 4px 6px -6px #222; */
    /* box-shadow: 0 4px 6px -6px #222; */
    text-transform: uppercase;
    padding: 1rem 0;

    @media (max-width: 490px) {
      font-size: 2.2rem;
    }
  }

  /* FIX FOR CAROUSEL */
  * {
    min-height: 0;
    min-width: 0;
  }

  .inner-slider {
    grid-area: carousel;

    /* max-height: 399px; */

    .vertical-wrapper {
      display: flex !important;
      justify-content: space-evenly;
      max-height: 398.84px;

      .vertical {
        width: 196.5px;
        /* max-width: 196.5px ; */
        /* flex-shrink: 1; */
      }

      @media (max-width: 490px) {
        padding: 0 1rem;
      }
    }

    @media (max-width: 490px) {
      margin-right: -2rem;
      margin-left: -2rem;
      /* border-bottom: 1px solid #ebeaeb; */
      /* border-top: 1px solid #ebeaeb; */
    }

    .slick-dots {
      bottom: -39px;

      &:after {
        content: "<swipe or drag images to scroll>";
        display: block;
        position: relative;
        bottom: 5px;
        font-size: 1rem;
        color: ${({ theme }) => theme.secondaryAccent};
      }

      @media (max-width: 768px) {
        bottom: -45px;
      }

      @media (max-width: 490px) {
        bottom: -40px;
      }

      .slick-active button:before {
        color: ${({ theme }) => theme.accent};
      }
    }

    .slick-prev {
      z-index: 0;
      left: 2%;
      top: initial;
      bottom: -30px;
    }

    .slick-next {
      z-index: 0;
      right: 2%;
      top: initial;
      bottom: -30px;
    }

    .slick-prev:before,
    .slick-next:before {
      color: ${({ theme }) => theme.accent};
    }
  }

  .commits {
    margin-top: 2rem;
    grid-area: commits;

    @media (max-width: 1400px) {
      margin-top: 0;
    }
  }

  .accomplishments {
    grid-area: accomplishments;

    @media (max-width: 1400px) {
      margin-top: 4rem;
    }

    /* @media (max-width: 768px) {
      margin-top: 4rem;
    } */

    ul {
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
    }
  }

  .split-grid-left {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1.5fr 1fr;
    grid-template-areas:
      "carousel accomplishments"
      "commits accomplishments";

    @media (max-width: 1400px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, auto);
      grid-gap: 0;
      grid-template-areas:
        "carousel"
        "accomplishments"
        "commits";
    }
  }

  .split-grid-right {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1.5fr;
    grid-template-areas:
      "accomplishments carousel"
      "accomplishments commits";

    @media (max-width: 1400px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, auto);
      grid-gap: 0;
      grid-template-areas:
        "carousel"
        "accomplishments"
        "commits";
    }
  }
`;
