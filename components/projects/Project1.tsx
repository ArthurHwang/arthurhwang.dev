import { ProjectWrap } from "./ProjectWrap";
import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { CommitList } from "../../components/CommitList";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Button } from "../Button";
import { settings } from "../../util/slick-config";

export const Project1: React.FC<any> = () => {
  return (
    <ProjectWrap>
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
              src="/static/projects/bestattorney-gatsby/screenshot-1.webp"
              alt="screenshot 1"
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src =
                  "/static/projects/bestattorney-gatsby/screenshot-1.png";
              }}
            />
            <div className="vertical-wrapper">
              <img
                className="vertical"
                src="/static/projects/bestattorney-gatsby/screenshot-2.webp"
                alt="screenshot 2"
                onError={(e: any) => {
                  e.target.onerror = null;
                  e.target.src =
                    "/static/projects/bestattorney-gatsby/screenshot-2.png";
                }}
              />
              <img
                className="vertical"
                src="/static/projects/bestattorney-gatsby/screenshot-3.webp"
                alt="screenshot 3"
                onError={(e: any) => {
                  e.target.onerror = null;
                  e.target.src =
                    "/static/projects/bestattorney-gatsby/screenshot-3.png";
                }}
              />
            </div>
            <img
              src="/static/projects/bestattorney-gatsby/screenshot-9.webp"
              alt="screenshot 9"
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src =
                  "/static/projects/bestattorney-gatsby/screenshot-9.png";
              }}
            />
            <img
              src="/static/projects/bestattorney-gatsby/screenshot-8.webp"
              alt="screenshot 8"
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src =
                  "/static/projects/bestattorney-gatsby/screenshot-8.png";
              }}
            />

            <img
              src="/static/projects/bestattorney-gatsby/screenshot-4.webp"
              alt="screenshot 4"
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src =
                  "/static/projects/bestattorney-gatsby/screenshot-4.png";
              }}
            />
            <img
              src="/static/projects/bestattorney-gatsby/screenshot-5.webp"
              alt="screenshot 5"
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src =
                  "/static/projects/bestattorney-gatsby/screenshot-5.png";
              }}
            />
            <img
              src="/static/projects/bestattorney-gatsby/screenshot-6.webp"
              alt="screenshot 6"
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src =
                  "/static/projects/bestattorney-gatsby/screenshot-6.png";
              }}
            />
            <img
              src="/static/projects/bestattorney-gatsby/screenshot-7.webp"
              alt="screenshot 7"
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src =
                  "/static/projects/bestattorney-gatsby/screenshot-7.png";
              }}
            />
          </Slider>
        </div>
        <div className="commits">
          <LazyLoad once height={344}>
            <CommitList owner="bestattorney" name="bestattorney.com-gatsby" />
          </LazyLoad>
        </div>

        <div className="accomplishments">
          <h3>Accomplishments:</h3>
          <ul>
            <li>
              Rewrote and rebuilt a production ready 6000+ static page
              application with GatsbyJS for code splitting, performance, and SEO
              benefits. This project was initiated by myself and approved by my
              superiors in order to future proof their tech stack at the
              company.
            </li>
            <li>
              Created custom serverless build workflow pipeline using CircleCI,
              Cypress, Jest, Zapier, Netlify.
            </li>
            <li>
              Wrote E2E (End-to-End) tests / smoke test with Cypress testing
              framework.
            </li>
            <li>
              Wrote unit tests / snapshot tests with Jest testing framework.
            </li>
            <li>
              Architected a custom file / folder structure in which values are
              inherited from a single source in order to empower non-developers
              to be able to easily add, remove and update items on the website.
            </li>
            <li>
              Implemented 16 years of Wordpress blog data by leveraging a
              headless CMS with custom hosting solution.
            </li>

            <li>
              Integrated custom Google AMP (Accelerated Mobile Pages) for blog
            </li>
            {/* <li>
                  Integrated E2E (cypress) / Unit Tests (jest) into project
                </li>
                <li>
                  Created a design and typography system to easily empower
                  non-developers to be able to change application look
                </li>

                <li>Implemented custom CI / CD workflows with CircleCI</li>

                <li>Entire application is responsive web ready</li>
                <li>Integrated project with Google marketing suite</li>
                <li>Integrated SEO for entire site complete with JSON-LD</li>
                <li>Cross Browser Compatibility</li>
                <li>
                  Used styled components library to create reuseable components
                  and scoped CSS to avoid global conflicts
                </li> */}
            {/* <li>
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
                <li>7000 page statically generated website</li> */}
          </ul>
        </div>
      </div>
      <LazyLoad once height={101.28}>
        <div className="badges">
          <img src="/static/projects/logos/Gatsby-Logo.svg" alt="gatsbyjs" />
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
          <Button color="blue">
            Source <FaGithub />
          </Button>
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://bestattorney.netlify.com"
        >
          <Button color="green">
            Launch <FaPlay />
          </Button>
        </a>
      </div>
    </ProjectWrap>
  );
};
