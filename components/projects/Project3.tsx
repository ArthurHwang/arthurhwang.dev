import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { ProjectWrap } from "./ProjectWrap";
import { CommitList } from "../../components/CommitList";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Button } from "../Button";
import { settings } from "../../util/slick-config";
import { ReactElement } from "react";

// bestattorney.com-admin
export const Project3: React.FC = (): ReactElement => {
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
          <div className="about-wrapper">
            <div>
              <h3>About</h3>
            </div>
            <p>
              I created this Angular application for the law firm as an internal
              team dashboard. Created a full user sign-up / sign-in
              authentication flow REST API with Express and Node.js.
            </p>
            <p>
              User authorization and authentication is handled on the client
              side with JWT tokens. Team members can access documentation and
              find answers to frequently asked questions about the web stack.
            </p>
            <p></p>
          </div>
          <div className="accomplishment-wrapper">
            <h3>Accomplishments</h3>
            <ul>
              <li>
                Created live production ready company documentation dashboard
                with user authentication and user login system for company.
                Users are able to sign-up, sign-in, logout, and update their
                credentials
              </li>
              <li>
                Utilized Angular Framework with TypeScript and bootstrap to
                build client-side dashboard application
              </li>
              <li>
                Used Node.js and Express to handle back-end logic and custom API
                endpoints while correctly hashing and salting sensitive password
                information with bcrypt library
              </li>
              <li>
                Stored user account information into MySQL database using
                Sequelize ORM and Node.js
              </li>
              <li>
                Used JSON Web Tokens to pass authentication data to client side
                local storage to authenticate and validate user sessions
              </li>
              <li>
                Created authentication guard and interceptor to validate user
                authentication based on if the user has a valid JWT token
              </li>
              <li>
                **If you would like to login and peek around, please use the
                following credentials. Otherwise feel free to create your own
                account:
                <br />
                <code style={{ padding: "0" }}>
                  Username: testing@testing.com
                </code>
                <br />
                <code style={{ padding: "0" }}>Password: 123456</code>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="badges">
        <img
          src="/static/projects/logos/angular.svg"
          title="Angular"
          alt="angular"
        />
        <img
          src="/static/projects/logos/express.svg"
          title="Express"
          alt="express"
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
          src="/static/projects/logos/jwt.png"
          title="JSON Web Token"
          alt="json web token"
        />
        <img
          src="/static/projects/logos/sequelize.png"
          title="Sequelize"
          alt="sequelize"
        />
        <img
          src="/static/projects/logos/bootstrap.png"
          title="Bootstrap"
          alt="bootstrap"
        />
      </div>
      <div className="buttons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://gitlab.com/ArthurHwang/bestattorney-com/-/tree/master/SPAs"
        >
          <Button color="blue">
            Source <FaGithub />
          </Button>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.bestattorney.com/admin"
        >
          <Button color="green">
            Launch <FaPlay />
          </Button>
        </a>
      </div>
    </ProjectWrap>
  );
};
