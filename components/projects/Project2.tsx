import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { ProjectWrap } from "./ProjectWrap";
import { CommitList } from "../../components/CommitList";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Button } from "../Button";
import { settings } from "../../util/slick-config";
import { ReactElement } from "react";
import Link from "next/link";

// arthurhwang.dev
export const Project2: React.FC = (): ReactElement => {
  return (
    <ProjectWrap>
      <a
        href="/"
        className="link project-title"
        target="_blank"
        rel="noopener noreferrer"
      >
        arthurhwang.dev
      </a>
      <div className="project split-grid-left">
        {/* 
            //@ts-ignore */}
        <Slider className="inner-slider" {...settings}>
          <img
            src="/static/projects/arthurhwang.dev/screenshot-7.webp"
            alt="screenshot 1"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/arthurhwang.dev/screenshot-7.png";
            }}
          />
          <div className="vertical-wrapper">
            <img
              className="vertical"
              src="/static/projects/arthurhwang.dev/screenshot-8.webp"
              alt="screenshot 2"
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src =
                  "/static/projects/arthurhwang.dev/screenshot-8.png";
              }}
            />
            <img
              className="vertical"
              src="/static/projects/arthurhwang.dev/screenshot-9.webp"
              alt="screenshot 3"
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src =
                  "/static/projects/arthurhwang.dev/screenshot-9.png";
              }}
            />
          </div>
          <img
            src="/static/projects/arthurhwang.dev/screenshot-10.webp"
            alt="screenshot 1"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/arthurhwang.dev/screenshot-10.png";
            }}
          />
          <img
            src="/static/projects/arthurhwang.dev/screenshot-11.webp"
            alt="screenshot 1"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/arthurhwang.dev/screenshot-11.png";
            }}
          />
          <img
            src="/static/projects/arthurhwang.dev/screenshot-12.webp"
            alt="screenshot 1"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/arthurhwang.dev/screenshot-12.png";
            }}
          />
          <img
            src="/static/projects/arthurhwang.dev/screenshot-13.webp"
            alt="screenshot 1"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/arthurhwang.dev/screenshot-13.png";
            }}
          />
        </Slider>
        <div className="commits">
          <LazyLoad once height={344}>
            <CommitList owner="ArthurHwang" name="arthurhwang.dev" />
          </LazyLoad>
        </div>

        <div className="accomplishments">
          <div className="about-wrapper">
            <div>
              <h3>About</h3>
            </div>
            <p>
              My personal portfolio was built not only to showcase my projects
              and skills, but also to learn about and build something with
              Apollo and GraphQL. I set out to design and develop a site to call
              my own - I am happy with how it turned out!
            </p>

            <p>
              I implemented my own{" "}
              <Link href="/blog">
                <a className="link">blog</a>
              </Link>{" "}
              using Contentful CMS, where I write articles to hopefully teach
              confusing topics in an easy to understand way.
            </p>
          </div>

          <div className="accomplishment-wrapper">
            <h3>Accomplishments</h3>
            <ul>
              <li>
                Used NextJS and TypeScript to build server-rendered isomorphic
                React portfolio application
              </li>
              <li>
                Implemented Apollo and GraphQL to programmatically load data
                fetched from Github API. Used loading states from Apollo to show
                loading animations
              </li>
              <li>
                Created custom real-time GitHub commit list component with
                relevant continuous integration / continuous development status
                links
              </li>
              <li>
                Developed fully responsive front-end application using modern
                CSS-in-JS solution styled-components to build reusable React
                components
              </li>
              <li>
                Used Formik, Yup and Express to handle form validation and
                backend form submission logic
              </li>
              <li>
                Built personal blog with headless Contentful CMS. Sourced data
                with Contentful Delivery API
              </li>
              <li>
                Created dynamic sitemap that automatically fetches new data from
                Contentful to generate new sitemap entries on-the-fly.
              </li>
              <li>
                Custom serverless deployment with Cloudflare DNS and Zeit Now.
                Implemented custom email forwarding with Mailgun by proxying
                requests through Cloudflare into personal Gmail account
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="badges">
        <img
          src="/static/projects/logos/nextjs.png"
          title="Next.js"
          alt="nextjs"
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
          src="/static/projects/logos/nodejs.png"
          title="Node.js"
          alt="nodejs"
        />
        <img
          src="/static/projects/logos/apollo.png"
          title="Apollo"
          alt="apollo"
        />
        <img
          src="/static/projects/logos/gql.png"
          title="GraphQL"
          alt="graphql"
        />
        <img
          style={{ width: "60px" }}
          src="/static/projects/logos/styled-components.png"
          alt="styled components"
          title="Styled Components"
        />
        <img
          src="/static/projects/logos/contentful.png"
          title="Contentful"
          alt="contentful"
        />
        <img
          src="/static/projects/logos/formik.png"
          style={{ width: "60px" }}
          alt="formik"
          title="Formik"
        />
      </div>
      <div className="buttons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ArthurHwang/arthurhwang.dev"
        >
          <Button color="blue">
            Source <FaGithub />
          </Button>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="/">
          <Button color="green">
            Launch <FaPlay />
          </Button>
        </a>
      </div>
    </ProjectWrap>
  );
};
