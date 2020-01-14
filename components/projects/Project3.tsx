import { ProjectWrap } from "./ProjectWrap";
import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { CommitList } from "../../components/CommitList";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Button } from "../Button";
import { settings } from "../../util/slick-config";

// bestattorney.com-admin
export const Project3: React.FC<any> = () => {
  return (
    <ProjectWrap>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.bestattorney.com/admin"
        className="link project-title"
      >
        Bisnar | Chase - Admin Login System
      </a>

      <div className="project split-grid-left">
        {/*
        //@ts-ignore */}
        <Slider className="inner-slider" {...settings}>
          <img
            src="/static/projects/bestattorney-admin/screenshot-1.webp"
            alt="screenshot 1"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-admin/screenshot-1.png";
            }}
          />
          <img
            src="/static/projects/bestattorney-admin/screenshot-2.webp"
            alt="screenshot 2"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-admin/screenshot-2.png";
            }}
          />
          <img
            src="/static/projects/bestattorney-admin/screenshot-3.webp"
            alt="screenshot 3"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-admin/screenshot-3.png";
            }}
          />
          <img
            src="/static/projects/bestattorney-admin/screenshot-4.webp"
            alt="screenshot 4"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-admin/screenshot-4.png";
            }}
          />
        </Slider>
        <div className="commits">
          <LazyLoad once height={344}>
            <CommitList
              owner="bestattorney"
              name="bestattorney.com"
              path="SPAs"
              source="gitlab"
            />
          </LazyLoad>
        </div>

        <div className="accomplishments">
          <h3>Accomplishments:</h3>
          <ul>
            <li>
              Created live production ready user authentication / user login
              system for company and team documentation. Users are able to
              sign-up, sign-in, logout, and update their credentials.
            </li>
            <li>
              Utilized Angular Framework with TypeScript and bootstrap to build
              client-side dashboard application.
            </li>
            <li>
              Used NodeJS and Express to handle back-end logic and custom API
              routing while correctly hashing and salting sensitive password
              information with bcrypt library.
            </li>
            <li>
              Stored user account information into MySQL database using
              Sequelize ORM and Nodejs.
            </li>
            <li>
              Used JSON Web Tokens to pass authentication data to client side
              local storage for user sessions.
            </li>
            <li>
              Created authentication guard and interceptor to validate user
              authentication based on if the user has a valid JWT token.
            </li>
            <li>
              Wrote easy to understand technical documentation for
              non-developers to help them understand certain technologies and
              basic common tasks relative to the company.
            </li>
            <li>
              Used apache server ProxyPass and ProxyPassReverse to get NodeJS /
              Express application running under existing Linux server.
            </li>
          </ul>
        </div>
      </div>
      <LazyLoad once height={101.28}>
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
          rel="noopener noreferrer"
          href="https://gitlab.com/ArthurHwang/bestattorney-com/tree/master/SPAs"
        >
          <Button color="blue">
            Source <FaGithub />
          </Button>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
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
