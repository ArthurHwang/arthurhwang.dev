import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { ProjectWrap } from "./ProjectWrap";
import { CommitList } from "../../components/CommitList";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Button } from "../Button";
import { settings } from "../../util/slick-config";
import { ReactElement } from "react";

// bestattorney.com-gatsby
export const Project1: React.FC = (): ReactElement => {
  return (
    <ProjectWrap>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://bisnarchaselaw.com"
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
            <CommitList
              idx={1}
              owner="bestattorney"
              name="bestattorney.com-gatsby"
              source="gitlab"
            />
          </LazyLoad>
        </div>

        <div className="accomplishments">
          <div>
            <h3>About</h3>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
            alias! Similique, laudantium molestiae harum quo nihil, ex odit
            assumenda quod rerum incidunt molestias, necessitatibus cumque
            itaque beatae veniam quisquam aliquam!
          </p>
          <div>
            <h3>Accomplishments</h3>
          </div>
          <ul>
            <li>
              Built live production ready statically generated{" "}
              <strong>7000+</strong> page application with GatsbyJS and
              TypeScript for performance benefits, SEO benefits, and future
              proofing tech stack for the company
            </li>
            <li>
              Created custom CI / CD automated build pipeline workflow using
              CircleCI, Jest, Cypress, and Netlify. Wrote E2E (End-to-End) /
              smoke tests with Cypress in addition to unit / snapshot tests with
              Jest
            </li>
            <li>
              Architected custom proprietary options system to empower
              non-developers to be able to easily add, remove and update items
              on the website
            </li>
            <li>
              Implemented paginated{" "}
              <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://bisnarchaselaw.com/blog"
              >
                blog
              </a>{" "}
              with 16 years of WordPress data by leveraging headless WordPress
              CMS with custom decoupled hosting solution
            </li>
            <li>
              Used modern CSS-in-JS solution styled-components to design and
              create fully responsive front-end application with custom reusable
              React components
            </li>
            <li>
              Built custom{" "}
              <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://bisnarchaselaw.com/locations"
              >
                Google Maps component
              </a>{" "}
              that shows all company service area locations with filtering based
              on geolocation
            </li>
            <li>
              Created custom validated Google AMP (Accelerated Mobile Pages) for
              blog according to Google specifications
            </li>
            {/* <li>
              Developed custom SEO component to dynamically generate full SEO
              meta requirements including facebook, twitter, AMP, canonical
              URL's and JSON-LD structured data
            </li>
            <li>
              Integrated Google Analytics and Google Marketing Suite for user
              insights and metric tracking
            </li> */}
          </ul>
        </div>
      </div>
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
        {/* <img src="/static/projects/logos/netlify.png" alt="netlify" /> */}
        {/* <img src="/static/projects/logos/ga.png" alt="google analytics" />
        <img
          src="/static/projects/logos/gmp.png"
          alt="google marketing platform"
        /> */}
      </div>
      <div className="buttons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://gitlab.com/ArthurHwang/bestattorney-com-gatsby"
        >
          <Button color="blue">
            Source <FaGithub />
          </Button>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://bisnarchaselaw.com"
        >
          <Button color="green">
            Launch <FaPlay />
          </Button>
        </a>
      </div>
    </ProjectWrap>
  );
};
