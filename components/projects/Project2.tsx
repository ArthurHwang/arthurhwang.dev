import { ProjectWrap } from "./ProjectWrap";
import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { CommitList } from "../../components/CommitList";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Button } from "../Button";
import { settings } from "../../util/slick-config";

// arthurhwang.dev
export const Project2: React.FC<any> = () => {
  return (
    <ProjectWrap>
      <a href="/" className="link project-title" target="_blank" rel="noopener">
        arthurhwang.dev
      </a>

      <div className="project split-grid-right">
        {/* 
            //@ts-ignore */}
        <Slider className="inner-slider" {...settings}>
          <img
            src="/static/projects/arthurhwang.dev/screenshot-1.webp"
            alt="screenshot 1"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-gatsby/screenshot-1.png";
            }}
          />
          <img
            src="/static/projects/arthurhwang.dev/screenshot-2.webp"
            alt="screenshot 2"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-gatsby/screenshot-2.png";
            }}
          />
          <img
            src="/static/projects/arthurhwang.dev/screenshot-3.webp"
            alt="screenshot 3"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-gatsby/screenshot-3.png";
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
              application.
            </li>
            <li>
              Implemented Apollo and GraphQL to programmatically load data
              fetched from Github API. Used loading states from Apollo to show
              loading animations.
            </li>
            <li>
              Create custom real-time github commit list component with relevant
              continuous integration / continuous development status links.
            </li>
            <li>
              Used Formik, Yup and express to handle form validation and backend
              form submission logic.
            </li>
            <li>
              Custom serverless hosting with Cloudflare DNS and Zeit Now. Setup
              DNS records and nameservers.
            </li>
            <li>
              Setup custom email forwarding with mailgun by proxying requests
              through Cloudflare into personal gmail account.
            </li>
            <li>
              Built personal blog with Contentful CMS. Sourced data with
              Contentful Delivery API.
            </li>
            <li>
              Parsed Contentful markdown data into blog template using
              react-markdown and implemented Disqus comment component.
            </li>
            <li>
              Created fully responsive front-end application using modern
              CSS-in-JS solution styled-components to build reusable React
              components.
            </li>
            <li>
              Created dynamic sitemap that automatically pulls data from
              Contentful and create new sitemap entries.
            </li>
            <li>
              Implemented Prism for code block syntax highlighting in markdown
              files.
            </li>
            <li>
              Used ParticleJS to implement custom animated heading background
              and animated error page.
            </li>
          </ul>
        </div>
      </div>
      <LazyLoad once height={101.28}>
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
      </LazyLoad>
      <div className="buttons">
        <a
          target="_blank"
          rel="noopener"
          href="https://github.com/ArthurHwang/arthurhwang.dev"
        >
          <Button color="blue">
            Source <FaGithub />
          </Button>
        </a>
        <a target="_blank" rel="noopener" href="/">
          <Button color="green">
            Launch <FaPlay />
          </Button>
        </a>
      </div>
    </ProjectWrap>
  );
};
