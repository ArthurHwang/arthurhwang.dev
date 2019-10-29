import { ProjectWrap } from "./ProjectWrap";
import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { CommitList } from "../../components/CommitList";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Button } from "../Button";
import { settings } from "../../util/slick-config";

// bestattorney.com-LAMP
export const Project4: React.FC<any> = () => {
  return (
    <ProjectWrap>
      <a
        target="_blank"
        rel="noopener"
        href="https://www.bestattorney.com"
        className="link project-title"
      >
        Bisnar | Chase - LAMP
      </a>

      <div className="project split-grid-right">
        {/* 
        //@ts-ignore */}
        <Slider className="inner-slider" {...settings}>
          <img
            src="/static/projects/bestattorney.com/screenshot-1.webp"
            alt="screenshot 1"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-gatsby/screenshot-1.png";
            }}
          />

          <div className="vertical-wrapper">
            <img
              className="vertical"
              src="/static/projects/bestattorney.com/screenshot-3.webp"
              alt="screenshot 3"
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src =
                  "/static/projects/bestattorney-gatsby/screenshot-3.png";
              }}
            />
            <img
              className="vertical"
              src="/static/projects/bestattorney.com/screenshot-2.webp"
              alt="screenshot 2"
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src =
                  "/static/projects/bestattorney-gatsby/screenshot-2.png";
              }}
            />
          </div>
          <img
            src="/static/projects/bestattorney.com/screenshot-4.webp"
            alt="screenshot 4"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-gatsby/screenshot-4.png";
            }}
          />
          <img
            src="/static/projects/bestattorney.com/screenshot-5.webp"
            alt="screenshot 5"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney-gatsby/screenshot-5.png";
            }}
          />
        </Slider>
        <div className="commits">
          <LazyLoad once height={344}>
            <CommitList owner="bestattorney" name="bestattorney.com" />
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
          <img src="/static/projects/logos/ga.png" alt="google analytics" />
          <img
            src="/static/projects/logos/gmp.png"
            alt="google marketing platform"
          />
          <img
            src="/static/projects/logos/gsc.png"
            alt="google search console"
          />
          <img src="/static/projects/logos/lamp.png" alt="lamp" />
          <img src="/static/projects/logos/circleci.png" alt="circleci" />
          <img src="/static/projects/logos/wordpress.png" alt="wordpress" />
          <img src="/static/projects/logos/whm.png" alt="whm" />
          <img src="/static/projects/logos/cpanel.png" alt="cpanel" />
          <img src="/static/projects/logos/semrush.png" alt="semrush" />
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
        <a target="_blank" rel="noopener" href="https://bestattorney.com">
          <Button color="green">
            Launch <FaPlay />
          </Button>
        </a>
      </div>
    </ProjectWrap>
  );
};
