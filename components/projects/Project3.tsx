import { ProjectWrap } from "./ProjectWrap";
import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { CommitList } from "../../components/CommitList";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Button } from "../Button";
import { settings } from "../../util/slick-config";

export const Project3: React.FC<any> = () => {
  return (
    <ProjectWrap>
      <a
        target="_blank"
        rel="noopener"
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
                "/static/projects/bestattorney-gatsby/screenshot-1.png";
            }}
          />
          <img
            src="/static/projects/bestattorney-admin/screenshot-2.webp"
            alt="screenshot 2"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-gatsby/screenshot-2.png";
            }}
          />
          <img
            src="/static/projects/bestattorney-admin/screenshot-3.webp"
            alt="screenshot 3"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-gatsby/screenshot-3.png";
            }}
          />
          <img
            src="/static/projects/bestattorney-admin/screenshot-4.webp"
            alt="screenshot 4"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-gatsby/screenshot-4.png";
            }}
          />
        </Slider>
        <div className="commits">
          <LazyLoad once height={344}>
            <CommitList
              owner="bestattorney"
              name="bestattorney.com"
              path="SPAs"
            />
          </LazyLoad>
        </div>

        <div className="accomplishments">
          <h3>Accomplishments:</h3>
          <ul>
            <li>
              Created live production ready user authentication / user login
              system for people in the company to log in and see documentation
            </li>
            <li>Used Angular for front end application development</li>
            <li>Used Express to handle back end logic</li>
            <li>Ensured data privacy using bCrypt to hash passwords</li>
            <li>Stored sessions with JWT tokens</li>
            <li>
              Used Sequelize ORM in conjunction with mysql node driver as
              backend database
            </li>

            <li>
              Complete authentication flow implemented with signup, signin,
              logout and account credential editing
            </li>
            <li>
              Used reverse proxy to get application running under existing
              apache server.
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
