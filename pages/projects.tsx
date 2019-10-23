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
            Bisnar | Chase - GatsbyJS
          </a>
          <div className="project split-grid-left">
            <div>
              {/* 
            //@ts-ignore */}
              <Slider className="inner-slider" {...settings}>
                <img src="/static/projects/bestattorney-gatsby/screenshot-1.png" />

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
                  />
                  <img
                    className="vertical"
                    src="/static/projects/bestattorney-gatsby/screenshot-3.png"
                  />
                </div>
                <img src="/static/projects/bestattorney-gatsby/screenshot-9.png" />
                <img src="/static/projects/bestattorney-gatsby/screenshot-8.png" />

                <img src="/static/projects/bestattorney-gatsby/screenshot-4.png" />
                <img src="/static/projects/bestattorney-gatsby/screenshot-5.png" />
                <img src="/static/projects/bestattorney-gatsby/screenshot-6.png" />
                <img src="/static/projects/bestattorney-gatsby/screenshot-7.png" />
              </Slider>
            </div>
            <div className="commits">
              <LazyLoad height={221}>
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
              <img src="/static/projects/logos/Gatsby-Logo.svg" />
              <img src="/static/projects/logos/React.png" />
              <img src="/static/projects/logos/ts.png" />
              <img src="/static/projects/logos/gql.png" />
              <img src="/static/projects/logos/circleci.png" />
              <img src="/static/projects/logos/jest.png" />
              <img src="/static/projects/logos/cypress.png" />
              <img src="/static/projects/logos/nodejs.png" />
              <img
                style={{ width: "60px" }}
                src="/static/projects/logos/styled-components.png"
              />
              <img src="/static/projects/logos/netlify.png" />{" "}
              <img src="/static/projects/logos/ga.png" />
              <img src="/static/projects/logos/gmp.jpg" />
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
                <img src="/static/projects/arthurhwang.dev/screenshot-1.png" />
                <img src="/static/projects/arthurhwang.dev/screenshot-2.png" />
              </Slider>
            </div>
            <div className="commits">
              <LazyLoad height={221}>
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
              <img src="/static/projects/logos/gatsby.png" />
              <img src="/static/projects/logos/gatsby.png" />
              <img src="/static/projects/logos/gatsby.png" />
              <img src="/static/projects/logos/gatsby.png" />
              <img src="/static/projects/logos/gatsby.png" />
              <img src="/static/projects/logos/gatsby.png" />
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
            Bisnar | Chase - Admin
          </a>

          <div className="project split-grid-left">
            <div>
              {/* 
            //@ts-ignore */}
              <Slider className="inner-slider" {...settings}>
                <img src="/static/projects/bestattorney-admin/screenshot-1.png" />
                <img src="/static/projects/bestattorney-admin/screenshot-2.png" />
                <img src="/static/projects/bestattorney-admin/screenshot-3.png" />
                <img src="/static/projects/bestattorney-admin/screenshot-4.png" />
              </Slider>
            </div>
            <div className="commits">
              <LazyLoad height={221}>
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
          <LazyLoad height={91}>
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
                <img src="/static/projects/bestattorney.com/screenshot-1.png" />

                <div className="vertical-wrapper">
                  <img
                    className="vertical"
                    src="/static/projects/bestattorney.com/screenshot-3.png"
                  />
                  <img
                    className="vertical"
                    src="/static/projects/bestattorney.com/screenshot-2.png"
                  />
                </div>
                <img src="/static/projects/bestattorney.com/screenshot-4.png" />
                <img src="/static/projects/bestattorney.com/screenshot-5.png" />
                {/* <img src="/static/projects/bestattorney.com/screenshot-1.png" /> */}
              </Slider>
            </div>
            <div className="commits">
              <LazyLoad height={207}>
                <CommitList owner="bestattorney" name="bestattorney.com" />
              </LazyLoad>
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
          <LazyLoad height={91}>
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
                <img src="/static/projects/bestattorney.com-admin.png" />
                <img src="/static/projects/bestattorney.com-admin.png" />
                <img src="/static/projects/bestattorney.com-admin.png" />
                <img src="/static/projects/bestattorney.com-admin.png" />
              </Slider>
            </div>
            <div className="commits">
              <LazyLoad height={207}>
                <CommitList owner="ArthurHwang" name="toneify" />
              </LazyLoad>
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
          <LazyLoad height={91}>
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
