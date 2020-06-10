import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { ProjectWrap } from "./ProjectWrap";
import { CommitList } from "../../components/CommitList";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Button } from "../Button";
import { settings } from "../../util/slick-config";
import { ReactElement } from "react";

// bestattorney.com-LAMP
export const Project4: React.FC = (): ReactElement => {
  return (
    <ProjectWrap>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.bestattorney.com"
        className="link project-title"
      >
        Bisnar | Chase - LAMP
      </a>

      <div className="project split-grid-left">
        {/* 
        //@ts-ignore */}
        <Slider className="inner-slider" {...settings}>
          <img
            src="/static/projects/bestattorney.com/screenshot-1.webp"
            alt="screenshot 1"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney.com/screenshot-1.png";
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
                  "/static/projects/bestattorney.com/screenshot-3.png";
              }}
            />
            <img
              className="vertical"
              src="/static/projects/bestattorney.com/screenshot-2.webp"
              alt="screenshot 2"
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src =
                  "/static/projects/bestattorney.com/screenshot-2.png";
              }}
            />
          </div>
          <img
            src="/static/projects/bestattorney.com/screenshot-4.webp"
            alt="screenshot 4"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney.com/screenshot-4.png";
            }}
          />
          <img
            src="/static/projects/bestattorney.com/screenshot-5.webp"
            alt="screenshot 5"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/bestattorney.com/screenshot-5.png";
            }}
          />
        </Slider>
        <div className="commits">
          <LazyLoad once height={344}>
            <CommitList
              owner="bestattorney"
              name="bestattorney.com"
              source="gitlab"
            />
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
              Administered, managed, and optimized LAMP (Linux-Apache-MySQL-PHP)
              stack web application, GitHub repository and WordPress blog for
              law firm
            </li>
            <li>
              Managed dedicated server with Linux / cPanel / WHM. Configured
              redirects and firewall settings for server. Managed GoDaddy DNS
              and inMotion server hosting solutions
            </li>
            <li>
              Prototyped, redesigned, developed and deployed new desktop, tablet
              and mobile hero components in addition to new site-wide theme to
              inject new life into application
            </li>
            <li>
              Ensured application is mobile and tablet ready. Ensured cross
              browser compatibility for both desktop and mobile platforms
            </li>
            <li>
              Increased firm revenue and overall business and by constantly
              optimizing site performance and SEO data to decrease bounce rates
              and increase site traffic.
            </li>
            <li>
              Analyzed Google Analytics reports and implemented custom Google
              Tag Manager events to let marketing team be knowledgeable what to
              focus their efforts on in order to improve conversion rates
            </li>
            <li>
              Used tools like Semrush and Screaming Frog to diagnose and fix
              problems within application and server
            </li>
            {/* <li>
              Created new PHP contact forms to track and log IP addresses of
              malicious users that contacted the law firm
            </li>
            <li>
              Developed a solution for users to text message the business
              through the website by using SMS links from the website and Google
              Voice
            </li> */}
          </ul>
        </div>
      </div>
      <div className="badges">
        <img src="/static/projects/logos/ga.png" alt="google analytics" />
        <img
          src="/static/projects/logos/gmp.png"
          alt="google marketing platform"
        />
        <img src="/static/projects/logos/gsc.png" alt="google search console" />
        <img src="/static/projects/logos/lamp.png" alt="lamp" />
        <img src="/static/projects/logos/circleci.png" alt="circleci" />
        <img src="/static/projects/logos/wordpress.png" alt="wordpress" />
        <img src="/static/projects/logos/whm.png" alt="whm" />
        <img src="/static/projects/logos/cpanel.png" alt="cpanel" />
        <img src="/static/projects/logos/semrush.png" alt="semrush" />
      </div>
      <div className="buttons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://gitlab.com/ArthurHwang/bestattorney-com"
        >
          <Button color="blue">
            Source <FaGithub />
          </Button>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://bestattorney.com"
        >
          <Button color="green">
            Launch <FaPlay />
          </Button>
        </a>
      </div>
    </ProjectWrap>
  );
};
