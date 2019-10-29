import { ProjectWrap } from "./ProjectWrap";
import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { CommitList } from "../../components/CommitList";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Button } from "../Button";
import { settings } from "../../util/slick-config";

export const Project5: React.FC<any> = () => {
  return (
    <ProjectWrap>
      <a
        target="_blank"
        rel="noopener"
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
              e.target.src =
                "/static/projects/bestattorney-gatsby/screenshot-1.png";
            }}
          />
          <img
            src="/static/projects/toneify/screenshot-2.webp"
            alt="screenshot 2"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-gatsby/screenshot-2.png";
            }}
          />
          <img
            src="/static/projects/toneify/screenshot-4.webp"
            alt="screenshot 4"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-gatsby/screenshot-4.png";
            }}
          />
          <img
            src="/static/projects/toneify/screenshot-7.webp"
            alt="screenshot 7"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-gatsby/screenshot-7.png";
            }}
          />
          <img
            src="/static/projects/toneify/screenshot-5.webp"
            alt="screenshot 5"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-gatsby/screenshot-5.png";
            }}
          />
          <img
            src="/static/projects/toneify/screenshot-6.webp"
            alt="screenshot 6"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-gatsby/screenshot-6.png";
            }}
          />
          <img
            src="/static/projects/toneify/screenshot-8.webp"
            alt="screenshot 8"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-gatsby/screenshot-8.png";
            }}
          />
        </Slider>
        <div className="commits">
          <LazyLoad once height={344}>
            <CommitList owner="ArthurHwang" name="toneify" />
          </LazyLoad>
        </div>
        <div className="accomplishments">
          <h3>Accomplishments:</h3>
          <ul>
            <li>
              server administration. Used web domain hosts to manage a fully
              fledged application website and managed a wordpress suite for the
              marketing team to easily create new content. Used apache / linux /
              ssh / to adminster server.
            </li>
            <li>
              performed SEO optimization to help reduce bounce rate of website
            </li>
            <li>
              Worked in tandem with graphic designer to bring new life to
              website. Worked and planned new site layouts / graphics and
              landing pages to improve site look , feel and content.
            </li>
            <li>
              Ensured cross browser compatibility both desktop and mobile. IOS /
              android / firefox.
            </li>
            <li>
              Implemented new security features that logged user information to
              intake teams.
            </li>
            <li>
              Increased site traffic and overall business. Directly impacted
              intake team recieving more customers through site performance and
              google analytics.
            </li>

            <li>Administered entire Github repo for 6 people.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              aliquid?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              aliquid?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              aliquid?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              aliquid?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              aliquid?
            </li>
          </ul>
        </div>
      </div>
      <LazyLoad once height={101.28}>
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
      </LazyLoad>
      <div className="buttons">
        <a
          target="_blank"
          rel="noopener"
          href="https://github.com/ArthurHwang/toneify"
        >
          <Button color="blue">
            Source <FaGithub />
          </Button>
        </a>
        <a
          target="_blank"
          rel="noopener"
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
