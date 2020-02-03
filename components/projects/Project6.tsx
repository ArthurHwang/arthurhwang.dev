import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { ProjectWrap } from "./ProjectWrap";
import { CommitList } from "../../components/CommitList";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Button } from "../Button";
import { settings } from "../../util/slick-config";
import { ReactElement } from "react";

// keeb kraze
export const Project6: React.FC = (): ReactElement => {
  return (
    <ProjectWrap>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://keeb-kraze.herokuapp.com/"
        className="link project-title"
      >
        Keeb Kraze
      </a>

      <div className="project split-grid-left">
        {/* 
            //@ts-ignore */}
        <Slider className="inner-slider" {...settings}>
          <img
            src="/static/projects/toneify/screenshot-1.webp"
            alt="screenshot 1"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/static/projects/toneify/screenshot-1.png";
            }}
          />
          <img
            src="/static/projects/toneify/screenshot-2.webp"
            alt="screenshot 2"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/static/projects/toneify/screenshot-2.png";
            }}
          />
          <img
            src="/static/projects/toneify/screenshot-4.webp"
            alt="screenshot 4"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/static/projects/toneify/screenshot-4.png";
            }}
          />
          <img
            src="/static/projects/toneify/screenshot-7.webp"
            alt="screenshot 7"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/static/projects/toneify/screenshot-7.png";
            }}
          />
          <img
            src="/static/projects/toneify/screenshot-5.webp"
            alt="screenshot 5"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/static/projects/toneify/screenshot-5.png";
            }}
          />
          <img
            src="/static/projects/toneify/screenshot-6.webp"
            alt="screenshot 6"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/static/projects/toneify/screenshot-6.png";
            }}
          />
        </Slider>
        <div className="commits">
          <LazyLoad once height={344}>
            <CommitList owner="ArthurHwang" name="keeb-kraze" />
          </LazyLoad>
        </div>
        <div className="accomplishments">
          <h3>Accomplishments:</h3>
          <ul>
            <li>Used ReactJS and TypeScript to create SPA</li>
            <li>Used React Router for client side routing</li>
            <li>Implemented Redux for global state</li>
            <li>Implemented Redux Saga middleware for asynchronous actions</li>
            <li>Implemented Reselect for memoized redux state selectors</li>
            <li>Implemented CSS-in-JS solution styled components</li>
            <li>Implemented firebase user authentication and database</li>
            <li>Used Express server</li>
            <li>Used StripeAPI to handle payments</li>
          </ul>
        </div>
      </div>
      <div className="badges">
        <img src="/static/projects/logos/React.png" alt="react" />
        <img src="/static/projects/logos/redux.png" alt="redux" />
        <img src="/static/projects/logos/nodejs.png" alt="nodejs" />
        <img src="/static/projects/logos/express.svg" alt="express" />
        <img src="/static/projects/logos/mongodb.svg" alt="mongodb" />
        <img
          style={{ width: "60px" }}
          src="/static/projects/logos/semantic.png"
          alt="semantic UI"
        />
        <img src="/static/projects/logos/stripe.png" alt="stripe" />
      </div>
      <div className="buttons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ArthurHwang/toneify"
        >
          <Button color="blue">
            Source <FaGithub />
          </Button>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://toneify-arthurhwang.herokuapp.com/"
        >
          <Button color="green">
            Launch <FaPlay />
          </Button>
        </a>
      </div>
    </ProjectWrap>
  );
};
