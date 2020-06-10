import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { ProjectWrap } from "./ProjectWrap";
import { CommitList } from "../../components/CommitList";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Button } from "../Button";
import { settings } from "../../util/slick-config";
import { ReactElement } from "react";

// carolandarthur.com
export const Project7: React.FC = (): ReactElement => {
  return (
    <ProjectWrap>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://carolandarthur.com"
        className="link project-title"
      >
        CarolandArthur.com
      </a>

      <div className="project split-grid-right">
        {/* 
            //@ts-ignore */}
        <Slider className="inner-slider" {...settings}>
          <img
            src="/static/projects/carolandarthur.com/screenshot-1.webp"
            alt="screenshot 1"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/carolandarthur.com/screenshot-1.png";
            }}
          />

          <div className="vertical-wrapper">
            <img
              className="vertical"
              src="/static/projects/carolandarthur.com/screenshot-6.webp"
              alt="screenshot 5"
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src =
                  "/static/projects/carolandarthur.com/screenshot-6.png";
              }}
            />
            <img
              className="vertical"
              src="/static/projects/carolandarthur.com/screenshot-5.webp"
              alt="screenshot 6"
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src =
                  "/static/projects/carolandarthur.com/screenshot-5.png";
              }}
            />
          </div>
          <img
            src="/static/projects/carolandarthur.com/screenshot-2.webp"
            alt="screenshot 1"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/static/projects/keebkraze/screenshot-2.png";
            }}
          />
          <img
            src="/static/projects/carolandarthur.com/screenshot-3.webp"
            alt="screenshot 2"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/carolandarthur.com/screenshot-3.png";
            }}
          />
          <img
            src="/static/projects/carolandarthur.com/screenshot-4.webp"
            alt="screenshot 4"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src =
                "/static/projects/carolandarthur.com/screenshot-4.png";
            }}
          />
        </Slider>
        <div className="commits">
          <LazyLoad once height={344}>
            <CommitList owner="ArthurHwang" name="rsvp-serverless-aws" />
          </LazyLoad>
        </div>
        <div className="accomplishments">
          <div className="about-wrapper">
            <div>
              <h3>About</h3>
            </div>
            <p>
              My wife and I started sending out wedding invitations by mail but
              quickly realized it would be very difficult to keep track of 150+
              people all over the world that would be attending our wedding.
            </p>
            <p>
              So instead, I built a globally distributed serverless full-stack
              application using AWS Lambda@Edge and AWS API Gateway so that our
              family members all over the world could have millisecond access to
              our wedding RSVP site. The RSVP's are stored in DynamoDB where I
              can query and scan data so we can more easily organize our
              wedding.
            </p>
          </div>

          <div className="accomplishment-wrapper">
            <h3>Accomplishments</h3>
            <ul>
              <li>
                Leveraged serverless IaaS framework to define, build, provision
                and deploy multiple AWS microservices with the added benefit of
                handling cloudformation stacks easily.
              </li>
              <li>
                Used AWS API Gateway to build RESTful API with AWS Lambda
                functions to handle DynamoDB CRUD operations
              </li>
              <li>
                Implemented DynamoDB streams to automate response emails when
                users triggered the stream with an RSVP submission
              </li>
              <li>
                Created full CI / CD pipeline with AWS CodeBuild and
                CodePipeline. Wrote custom lambda handler let GitHub be aware of
                CodePipeline status changes
              </li>
              <li>
                Setup AWS Route53 DNS records and SLS/TLS certificates with AWS
                Certificate Manager
              </li>
              <li>
                Used Next.js, TypeScript and styled-components to build
                front-end React application
              </li>
              <li>
                Deployed highly available front-end application globally using
                lambda@edge
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="badges">
        <img src="/static/projects/logos/aws.png" alt="aws" title="AWS" />
        <img
          src="/static/projects/logos/serverless-logo.png"
          style={{ width: "110px" }}
          alt="serverless"
          title="Serverless"
        />
        <img
          src="/static/projects/logos/nextjs.png"
          alt="next.js"
          title="Next.js"
        />
        <img
          src="/static/projects/logos/React.png"
          alt="react"
          title="React.js"
        />
        <img
          src="/static/projects/logos/ts.png"
          alt="TypeScript"
          title="TypeScript"
        />
        <img
          style={{ width: "60px" }}
          src="/static/projects/logos/styled-components.png"
          alt="styled components"
          title="Styled Components"
        />

        <img
          src="/static/projects/logos/nodejs.png"
          title="node.js"
          alt="nodejs"
          title="Node.js"
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
          href="https://carolandarthur.com"
        >
          <Button color="green">
            Launch <FaPlay />
          </Button>
        </a>
      </div>
    </ProjectWrap>
  );
};
