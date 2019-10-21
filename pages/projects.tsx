import { Fragment } from "react";
import { NextPage } from "next";
import { CommitList } from "../components/CommitList";
import Head from "next/head";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Projects: NextPage<any> = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: "ondemand",
    // fade: true,
    speed: 800
  };
  return (
    <Fragment>
      <Head>
        <title>Arthur Hwang | Projects</title>
        <meta name="description" content="Arthur Hwang's Blog" />
        {/* 
        //@ts-ignore */}
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      {/***************************************************************************************************/}
      {/******************************* PROJECT 1 - Bestattorney.com-gatsby *******************************/}
      {/***************************************************************************************************/}
      <ProjectWrap>
        <ContentWrap>
          <a href="https://www.bestattorney.netlify.com" className="link">
            Bisnar | Chase - GatsbyJS
          </a>
          <div className="project split-grid-left">
            {/* 
            //@ts-ignore */}
            <Slider className="inner-slider" {...settings}>
              <img src="/static/projects/bestattorney-gatsby/screenshot-1.png" />
              <img src="/static/projects/bestattorney-gatsby/screenshot-2.png" />
              <img src="/static/projects/bestattorney-gatsby/screenshot-3.png" />
              <img src="/static/projects/bestattorney-gatsby/screenshot-4.png" />
              <img src="/static/projects/bestattorney-gatsby/screenshot-5.png" />
            </Slider>

            <LazyLoad height={221}>
              <CommitList owner="bestattorney" name="bestattorney.com-gatsby" />
            </LazyLoad>

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
          <div className="badges">
            <img src="/static/projects/logos/Gatsby-Logo.svg" />
            <img src="/static/projects/logos/netlify.png" />
            <img src="/static/projects/logos/React.png" />
            <img src="/static/projects/logos/netlify.png" />
            <img src="/static/projects/logos/Gatsby-Logo.svg" />
            <img src="/static/projects/logos/netlify.png" />

            {/* <img src="/static/projects/logos/gatsby.png" />
            <img src="/static/projects/logos/gatsby.png" />
            <img src="/static/projects/logos/gatsby.png" />
            <img src="/static/projects/logos/gatsby.png" />
            <img src="/static/projects/logos/gatsby.png" />
            <img src="/static/projects/logos/gatsby.png" />
            <img src="/static/projects/logos/gatsby.png" />
            <img src="/static/projects/logos/gatsby.png" /> */}
          </div>
          <div className="buttons">
            <button>Source</button>
            <button>Launch</button>
          </div>
        </ContentWrap>
      </ProjectWrap>

      {/***************************************************************************************************/}
      {/*********************************** PROJECT 2 - arthurhwang.dev ***********************************/}
      {/***************************************************************************************************/}
      <ProjectWrap className="bg-grey">
        <ContentWrap>
          <a href="/" className="link">
            arthurhwang.dev
          </a>

          <div className="project split-grid-right">
            {/* 
            //@ts-ignore */}
            <Slider className="inner-slider" {...settings}>
              <img src="/static/projects/arthurhwang.dev.png" />
              <img src="/static/projects/arthurhwang.dev.png" />
              <img src="/static/projects/arthurhwang.dev.png" />
              <img src="/static/projects/arthurhwang.dev.png" />
              <img src="/static/projects/arthurhwang.dev.png" />
            </Slider>

            <LazyLoad height={221}>
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
            <img src="/static/projects/logos/gatsby.png" />
            <img src="/static/projects/logos/gatsby.png" />
            <img src="/static/projects/logos/gatsby.png" />
            <img src="/static/projects/logos/gatsby.png" />
            <img src="/static/projects/logos/gatsby.png" />
            <img src="/static/projects/logos/gatsby.png" />
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

      {/***************************************************************************************************/}
      {/******************************* PROJECT 3 - Bestattorney.com-admin* *******************************/}
      {/***************************************************************************************************/}
      <ProjectWrap>
        <ContentWrap>
          <a href="https://www.bestattorney.com/admin" className="link">
            Bisnar | Chase - Admin
          </a>

          <div className="project split-grid-left">
            {/* 
            //@ts-ignore */}
            <Slider className="inner-slider" {...settings}>
              <img src="/static/projects/bestattorney.com-admin.png" />
              <img src="/static/projects/bestattorney.com-admin.png" />
              <img src="/static/projects/bestattorney.com-admin.png" />
              <img src="/static/projects/bestattorney.com-admin.png" />
            </Slider>
            <LazyLoad height={221}>
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

      {/***************************************************************************************************/}
      {/******************************* PROJECT 4 - Bestattorney.com **************************************/}
      {/***************************************************************************************************/}
      <ProjectWrap className="bg-grey">
        <ContentWrap>
          <a href="https://www.bestattorney.com" className="link">
            Bisnar | Chase - LAMP
          </a>

          <div className="project split-grid-right">
            {/* 
            //@ts-ignore */}
            <Slider className="inner-slider" {...settings}>
              <img src="/static/projects/bestattorney.com-admin.png" />
              <img src="/static/projects/bestattorney.com-admin.png" />
              <img src="/static/projects/bestattorney.com-admin.png" />
              <img src="/static/projects/bestattorney.com-admin.png" />
            </Slider>
            <LazyLoad height={207}>
              <CommitList owner="bestattorney" name="bestattorney.com" />
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
      {/***************************************************************************************************/}
      {/**************************************** PROJECT 5 - Toneify **************************************/}
      {/***************************************************************************************************/}
      <ProjectWrap>
        <ContentWrap>
          <a href="https://www.bestattorney.com" className="link">
            Toneify
          </a>

          <div className="project split-grid-left">
            {/* 
            //@ts-ignore */}
            <Slider className="inner-slider" {...settings}>
              <img src="/static/projects/bestattorney.com-admin.png" />
              <img src="/static/projects/bestattorney.com-admin.png" />
              <img src="/static/projects/bestattorney.com-admin.png" />
              <img src="/static/projects/bestattorney.com-admin.png" />
            </Slider>

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
            <button>Source</button>
            <button>Launch</button>
          </div>
        </ContentWrap>
      </ProjectWrap>
    </Fragment>
  );
};

export default Projects;

const ContentWrap = styled("div")`
  max-width: 1300px;
  margin: 0 auto;

  border: 2px solid grey;
  padding: 2rem;
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
    display: flex;
    padding: 2rem 4rem;
    /* text-align: center; */
    justify-content: space-around;

    img {
      width: 80px;
    }
  }

  .link {
    display: block;
    margin-bottom: 2rem;
    font-size: 3rem;
  }

  /* FIX FOR CAROUSEL */
  * {
    min-height: 0;
    min-width: 0;
  }

  .inner-slider {
    grid-area: carousel;
    /* border: 1px solid black; */

    .slick-dots {
      bottom: -10px;
      .slick-active button:before {
        color: ${({ theme }) => theme.accent};
      }
    }

    .slick-prev {
      z-index: 10;
      left: 2%;
    }

    .slick-next {
      z-index: 10;
      right: 2%;
    }

    .slick-prev,
    .slick-next {
    }

    .slick-prev:before,
    .slick-next:before {
      color: ${({ theme }) => theme.accent};
    }
  }

  .commits {
    grid-area: commits;
  }

  .accomplishments {
    grid-area: accomplishments;
    /* background-color: grey; */

    li {
      font-size: 1.4rem;

      /* &:nth-child(odd) {
        background-color: ${({ theme }) => theme.lightgrey};
      } */
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
      grid-template-columns: initial;
      grid-template-rows: repeat(3, auto);
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
      grid-template-columns: initial;
      grid-template-rows: repeat(3, auto);
      grid-template-areas:
        "carousel"
        "accomplishments"
        "commits";
    }
  }
`;
