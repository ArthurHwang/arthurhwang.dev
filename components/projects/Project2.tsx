import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { ProjectWrap } from "./ProjectWrap";
import { CommitList } from "../../components/CommitList";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Button } from "../Button";
import { settings } from "../../util/slick-config";
import { ReactElement } from "react";

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

      <div className="project split-grid-right">
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
          <h3>Accomplishments:</h3>
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
              Created fully responsive front-end application using modern
              CSS-in-JS solution styled-components to build reusable React
              components
            </li>
            <li>
              Used Formik, Yup and Express to handle form validation and backend
              form submission logic
            </li>
            <li>
              Custom serverless hosting with Cloudflare DNS and Zeit Now. Setup
              DNS records and nameservers
            </li>
            <li>
              Setup custom email forwarding with Mailgun by proxying requests
              through Cloudflare into personal Gmail account
            </li>
            <li>
              Built personal blog with headless Contentful CMS. Sourced data
              with Contentful Delivery API
            </li>
            <li>
              Parsed Contentful markdown data into blog template using
              react-markdown and implemented Disqus comment component
            </li>
            <li>
              Implemented Prism for code block syntax highlighting in markdown
              files
            </li>
            <li>
              Created dynamic sitemap that automatically pulls data from
              Contentful to create new sitemap entries
            </li>
            <li>
              Used ParticleJS to implement custom animated heading background
              and animated error page
            </li>
          </ul>
        </div>
      </div>
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
        <img src="/static/projects/logos/contentful.png" alt="contentful" />
        <img
          src="/static/projects/logos/formik.png"
          style={{ width: "60px" }}
          alt="formik"
        />
        <img src="/static/projects/logos/cloudflare.png" alt="cloudflare" />
        <img src="/static/projects/logos/mailgun.png" alt="mailgun" />
        <img src="/static/projects/logos/now.png" alt="now" />
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
