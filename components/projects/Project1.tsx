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
        href="https://bestatto-gatsby.netlify.app"
        className="link  project-title"
      >
        Bisnar | Chase - Gatsby
      </a>

      <div className="project split-grid-right">
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
          <div className="about-wrapper">
            <div>
              <h3>About</h3>
            </div>
            <p>
              I rewrote and migrated the law firms entire legacy web application
              to a new cloud based project. Multiple benefits were observed from
              pagespeed, SEO, and ease of day-to-day tasks for the marketing
              team.
            </p>
            <p>
              With no dedicated server to manage anymore, I got rid of
              additional overhead and costs for the firm. Which ultimately
              simplified how the business operates.
            </p>
            <p>
              In the project I developed an easy-to-use system for
              non-developers to be able to change items on the website simply by
              editing an options file.
            </p>
          </div>
          <div className="accomplishment-wrapper">
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
                smoke tests with Cypress in addition to unit / snapshot tests
                with Jest
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
                  href="https://bestatto-gatsby.netlify.app/blog"
                >
                  blog
                </a>{" "}
                with 16 years of WordPress data by leveraging headless WordPress
                CMS with custom decoupled hosting solution
              </li>
              <li>
                Used modern CSS-in-JS solution styled-components to design and
                create fully responsive front-end application with custom
                reusable React components
              </li>
              <li>
                Built custom{" "}
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://bestatto-gatsby.netlify.app/locations"
                >
                  Google Maps component
                </a>{" "}
                that shows all company service area locations with filtering
                based on geolocation
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="badges">
        <img
          src="/static/projects/logos/Gatsby-Logo.svg"
          title="GatsbyJS"
          alt="gatsbyjs"
        />
        <img
          src="/static/projects/logos/React.png"
          title="ReactJS"
          alt="reactjs"
        />
        <img
          src="/static/projects/logos/ts.png"
          title="TypeScript"
          alt="typescript"
        />
        <img
          src="/static/projects/logos/gql.png"
          title="GraphQL"
          alt="graphql"
        />
        <img
          src="/static/projects/logos/circleci.png"
          title=""
          alt="circleci"
        />
        <img src="/static/projects/logos/jest.png" title="Jest" alt="jest" />
        <img
          src="/static/projects/logos/cypress.png"
          title="Cypress"
          alt="cypress"
        />
        <img
          src="/static/projects/logos/nodejs.png"
          title="Node.js"
          alt="nodejs"
        />
        <img
          style={{ width: "60px" }}
          title="Styled Components"
          src="/static/projects/logos/styled-components.png"
          alt="styled components"
        />
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
          href="https://bestatto-gatsby.netlify.app"
        >
          <Button color="green">
            Launch <FaPlay />
          </Button>
        </a>
      </div>
    </ProjectWrap>
  );
};
