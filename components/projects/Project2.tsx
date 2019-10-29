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
            <li>Used NextJS to write server rendered isomorphic application</li>
            <li>
              Used Formik and express to handle backend logic handling form
              submissions
            </li>
            <li>
              Use Apollo and GraphQL to programatically load data fetched from
              Github API
            </li>
            <li>
              Implemented and Used Contentful Delivery API to source data from
              CMS.{" "}
            </li>
            {/* <li>Parse markdown data into blog template</li>
                <li>
                  Setup custom hosting solution with cloudflare and zeit NOW
                </li>

                <li>Fully responsive application</li>
                <li>Implemented custom form validation using Formik and Yup</li>
                <li>Used styled components to create reusable components</li>
                <li>Use Particlejs to render custom header background</li>
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
                  Integrated custom Google AMP (Accelerated Mobile Pages) for
                  blog
                </li>
                <li>
                  Integrated E2E (cypress) / Unit Tests (jest) into project
                </li>
                <li>
                  Created a design and typography system to easily empower
                  non-developers to be able to change application look
                </li> */}
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
