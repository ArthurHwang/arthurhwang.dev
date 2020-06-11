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
        href="https://keebkraze.com/"
        className="link project-title"
      >
        Keeb Kraze
      </a>

      <div className="project split-grid-left">
        {/* 
            //@ts-ignore */}
        <Slider className="inner-slider" {...settings}>
          <img
            src="/static/projects/keebkraze/screenshot-1.webp"
            alt="screenshot 1"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/static/projects/keebkraze/screenshot-1.png";
            }}
          />
          <img
            src="/static/projects/keebkraze/screenshot-3.webp"
            alt="screenshot 2"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/static/projects/keebkraze/screenshot-3.png";
            }}
          />
          <img
            src="/static/projects/keebkraze/screenshot-4.webp"
            alt="screenshot 4"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/static/projects/keebkraze/screenshot-4.png";
            }}
          />
          <img
            src="/static/projects/keebkraze/screenshot-2.webp"
            alt="screenshot 2"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/static/projects/keebkraze/screenshot-2.png";
            }}
          />
        </Slider>
        <div className="commits">
          <LazyLoad once height={344}>
            <CommitList owner="ArthurHwang" name="keeb-kraze" />
          </LazyLoad>
        </div>
        <div className="accomplishments">
          <div className="about-wrapper">
            <div>
              <h3>About</h3>
            </div>
            <p>
              As a die hard enthusiast of custom mechanical keyboards I built
              this application to learn about redux-saga. I implemented user
              authentication and authorization via Firebase Oauth.
            </p>
            <p>
              Users have access to their own shopping cart and can mock checkout
              with fake stripe credentials.
            </p>
          </div>

          <div className="accomplishment-wrapper">
            <h3>Accomplishments</h3>
            <ul>
              <li>
                Used React, TypeScript, Express, and Firebase to build
                full-stack e-commerce application with full user authentication,
                authorization and checkout
              </li>
              <li>
                Implemented Redux and Redux-Saga middleware to perform
                asynchronous logic and reduce overall dispatch calls to Redux
                reducers to boost performance of application
              </li>
              <li>
                Wrote custom Redux state selectors with Reselect library for
                memoization of Redux state to combat unnecessary component
                re-rendering
              </li>
              <li>
                Implemented modern CSS-in-JS solution styled-components to
                design and create fully responsive front-end application with
                custom reusable React components
              </li>
              <li>
                Code-split application into dynamic chunks by using React Lazy
                and Suspense to improve performance and lower bundle size over
                network requests
              </li>
              <li>
                Leveraged Firebase cloud database and authentication to perform
                user authentication and store application data
              </li>
              <li>
                Used Express and Node.js to handle back-end API payment requests
                from front-end application using Stripe API
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="badges">
        <img
          src="/static/projects/logos/React.png"
          title="ReactJS"
          alt="react"
        />
        <img
          src="/static/projects/logos/ts.png"
          title="TypeScript"
          alt="typescript"
        />
        <img src="/static/projects/logos/redux.png" title="Redux" alt="redux" />
        <img
          title="Styled Components"
          style={{ width: "60px" }}
          src="/static/projects/logos/styled-components.png"
          alt="styled components"
        />
        <img
          src="/static/projects/logos/firebase.svg"
          title="Firebase"
          alt="firebase"
        />
        <img
          src="/static/projects/logos/nodejs.png"
          title="Node.js"
          alt="nodejs"
        />
        <img
          src="/static/projects/logos/express.svg"
          title="Express"
          alt="express"
        />

        <img
          src="/static/projects/logos/stripe.png"
          title="Stripe"
          alt="stripe"
        />
      </div>
      <div className="buttons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ArthurHwang/keeb-kraze"
        >
          <Button color="blue">
            Source <FaGithub />
          </Button>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://keebkraze.com/"
        >
          <Button color="green">
            Launch <FaPlay />
          </Button>
        </a>
      </div>
    </ProjectWrap>
  );
};
