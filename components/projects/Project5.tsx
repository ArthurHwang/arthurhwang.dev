import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { ProjectWrap } from "./ProjectWrap";
import { CommitList } from "../../components/CommitList";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Button } from "../Button";
import { settings } from "../../util/slick-config";
import { ReactElement } from "react";

// toneify
export const Project5: React.FC = (): ReactElement => {
  return (
    <ProjectWrap>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://toneify-arthurhwang.herokuapp.com/"
        className="link project-title"
      >
        Toneify
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
            <CommitList owner="ArthurHwang" name="toneify" />
          </LazyLoad>
        </div>
        <div className="accomplishments">
          <div>
            <h3>About</h3>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
            alias! Similique, laudantium molestiae harum quo nihil, ex odit
            assumenda quod rerum incidunt molestias, necessitatibus cumque
            itaque beatae veniam quisquam aliquam!
          </p>
          <h3>Accomplishments</h3>
          <ul>
            <li>
              Created interactive guitar pedalboard builder to help guitarists
              create unique pedalboard configurations. Users can create, read,
              update and delete their builds
            </li>
            <li>
              Used React and Semantic-UI component library to create front-end
              application
            </li>
            <li>
              Implemented Redux for centralized application state and
              persistence. Wrote actions and reducers to allow predictable state
              management
            </li>
            <li>Implemented React-Router for client-side routing</li>
            <li>
              Utilized Redux-Thunk middleware to perform asynchronous logic /
              AJAX requests with Redux
            </li>
            <li>
              Implemented MongoDB database to seed application and store user
              data and history
            </li>
            <li>
              Used Express and Node.js to handle back-end API requests such as
              fetching user builds and purchase history
            </li>
            <li>
              Used Stripe API to allow users to checkout and purchase cart items
            </li>
            <li>
              Used PassportJS to implement Google and Facebook Oauth login
              systems
            </li>
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
