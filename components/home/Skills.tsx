import styled from "styled-components";
import { ReactElement } from "react";

export const Skills: React.FC = (): ReactElement => {
  return (
    <ContentWrap>
      <StyledSkills>
        <h3>
          Some of my skills<span>_</span>
        </h3>
        <div className="skills-wrap">
          <span className="skill-item">
            <img
              src="/static/home/js.png"
              title="javascript"
              alt="javascript"
            />{" "}
            JavaScript
          </span>
          <span className="skill-item">
            <img
              src="/static/home/typescript.svg"
              title="typescript"
              alt="typescript"
            />{" "}
            TypeScript
          </span>
          <span className="skill-item">
            <img src="/static/home/react.png" title="react" alt="react" /> React
          </span>
          <span className="skill-item">
            <img src="/static/home/redux.png" title="redux" alt="redux" /> Redux
          </span>
          <span className="skill-item">
            <img
              src="/static/home/nodejs-icon.svg"
              title="nodejs"
              alt="nodejs"
            />{" "}
            Node.js
          </span>
          <span className="skill-item">
            <img
              src="/static/home/expressjslogo.png"
              title="express"
              alt="express"
            />{" "}
            Express
          </span>
          <span className="skill-item">
            <img src="/static/home/graphql.png" title="graphql" alt="graphql" />{" "}
            GraphQL
          </span>
          <span className="skill-item">
            <img
              src="/static/home/gatsby.png"
              title="gatsbyjs"
              alt="gatsbyjs"
            />{" "}
            GatsbyJS
          </span>
          <span className="skill-item">
            <img src="/static/home/next-js.svg" title="nextjs" alt="nextjs" />{" "}
            Next.js
          </span>
          <span className="skill-item">
            <img
              src="/static/home/styled-components.png"
              title="styled components"
              alt="styled components"
            />{" "}
            CSS-in-JS
          </span>
          <span className="skill-item">
            <img src="/static/home/mongodb.png" title="mongodb" alt="mongodb" />{" "}
            MongoDB
          </span>
          <span className="skill-item">
            <img
              style={{ width: "55px" }}
              src="/static/projects/logos/mysql.png"
              title="mysql"
              alt="mysql"
            />{" "}
            MySQL
          </span>
          <span className="skill-item">
            <img src="/static/home/git.png" title="git" alt="git" /> Git
          </span>
          <span className="skill-item">
            <img src="/static/home/npmlogo.png" title="npm" alt="npm" /> npm
          </span>

          <span className="skill-item">
            <img src="/static/home/jest.png" title="jest" alt="jest" /> Jest
          </span>
          <span className="skill-item">
            <img src="/static/home/cypress.png" title="cypress" alt="cypress" />{" "}
            Cypress
          </span>
          <span className="skill-item">
            <img
              src="/static/home/contentful.png"
              title="contentful"
              alt="contentful"
            />{" "}
            Contentful
          </span>
          <span className="skill-item">
            <img
              src="/static/home/wordpress.png"
              title="wordpress"
              alt="wordpress"
            />{" "}
            Wordpress
          </span>

          <span className="skill-item">
            <img
              src="/static/home/bootstrap.png"
              title="bootstrap"
              alt="bootstrap"
            />{" "}
            Bootstrap
          </span>
          <span className="skill-item">
            <img src="/static/home/semantic.png" alt="semantic ui" /> Semantic
            UI
          </span>
          <span id="last-prev" className="skill-item">
            <img src="/static/home/html5.png" title="html" alt="html5" /> HTML5
          </span>
          <span id="last" className="skill-item">
            <img src="/static/home/css.png" title="css" alt="css3" /> CSS3
          </span>
        </div>

        <h3>
          Certifications<span>_</span>
        </h3>

        <div className="certifications-wrap">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youracclaim.com/badges/87b364f2-423c-4d64-b336-fdd821ab0824/public_url"
          >
            <img
              src="/static/certifications/aws-certified-developer-associate.png"
              alt="aws certified developer"
            />
          </a>

          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youracclaim.com/badges/086f5107-e9f9-460f-8d70-13fd2ef5f6b1/public_url"
          >
            <img
              src="/static/certifications/aws-certified-solutions-architect-associate.png"
              alt="aws certified solutions architect"
            />
          </a>

          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youracclaim.com/badges/fa915a75-8112-432b-bf95-8337a0ef4fdc/public_url"
          >
            <img
              src="/static/certifications/aws-certified-cloud-practitioner.png"
              alt="aws certified cloud practitioner"
            />
          </a>
        </div>

        <h3>
          Other<span>_</span>
        </h3>
        <div className="other-wrap">
          <div className="col">
            <span className="other-item">
              <span className="hyphen">-</span> Responsive Web
            </span>
            <span className="other-item">
              <span className="hyphen">-</span> Performance optimization
            </span>
            <span className="other-item">
              <span className="hyphen">-</span> Cross-browser optimization
            </span>
            <span className="other-item">
              <span className="hyphen">-</span> Agile Workflows
            </span>
          </div>
          <div className="col two">
            <span className="other-item">
              <span className="hyphen">-</span> UNIX Server Administration
            </span>
            <span className="other-item">
              <span className="hyphen">-</span> Google Marketing Platform
            </span>
            <span className="other-item">
              <span className="hyphen">-</span> Search Engine Optimization
            </span>
            <span className="other-item">
              <span className="hyphen">-</span> Google Analytics
            </span>
          </div>
          <div className="col three">
            <span className="other-item">
              <span className="hyphen">-</span> cPanel / WHM
            </span>
            <span className="other-item">
              <span className="hyphen">-</span> RESTful Web Services
            </span>

            <span className="other-item">
              <span className="hyphen">-</span> Continuous Integration
            </span>
            <span className="other-item">
              <span className="hyphen">-</span> Continuous Deployment
            </span>
          </div>
        </div>
      </StyledSkills>
    </ContentWrap>
  );
};

const ContentWrap = styled("div")`
  padding: 1rem 2rem 10rem;
  background-color: ${({ theme }) => theme.bg.grey};

  @media (max-width: 768px) {
    padding-bottom: 4rem;
  }

  h2,
  h3 {
    margin-top: 0;
  }

  span {
    color: ${({ theme }) => theme.accent};
    font-weight: 800;
  }
`;

const StyledSkills = styled("div")`
  max-width: 1200px;
  margin: 0 auto;

  .certifications-wrap {
    display: flex;
    justify-content: space-evenly;

    a {
      text-align: center;
      &:hover {
        img {
          transition: transform 0.1s linear;
          transform: scale(1.05);
        }
      }
    }

    img {
      width: 80%;
      position: relative;
      right: 21px;
    }

    @media (max-width: 940px) {
      img {
        right: 0;
      }
    }

    @media (max-width: 580px) {
      img {
        width: 100%;
      }
    }
  }

  .other-wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 85%;
    margin: 0 auto;
    position: relative;
    right: 20px;

    .two {
      .other-item {
        text-align: center;

        &:nth-child(4) {
          position: relative;
          right: 37px;
        }

        @media (max-width: 865px) {
          text-align: left;
          &:nth-child(4) {
            position: initial;
          }
        }
      }
    }

    @media (max-width: 865px) {
      padding-left: 0;
      grid-template-columns: initial;
      grid-template-rows: repeat(3, 1fr);
    }
  }

  .three {
    padding-left: 2rem;
    justify-self: self-end;

    @media (max-width: 865px) {
      padding-left: 0;
      justify-self: initial;
    }
  }

  .other-item {
    padding: 0.3rem;
  }

  .hyphen {
    color: ${({ theme }) => theme.black};
    font-weight: 800;
  }

  .col {
    display: flex;
    flex-direction: column;
  }

  span {
    text-align: left;
    font-weight: 600;
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }

  .skills-wrap {
    margin: 0 0 2rem;
    flex-wrap: wrap;
    position: relative;
    width: 98%;
    right: 10px;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(2, 1fr);

    .skill-item {
      color: ${({ theme }) => theme.black};
      font-weight: 700;
      font-size: 1.2rem;
      text-align: center;
      display: flex;
      flex-direction: column;

      &:last-child,
      &:nth-last-child(2) {
        @media (max-width: 705px) {
          display: none;
        }
      }
    }

    img {
      margin: 0 auto;
      width: 45px;
      height: 45px;
    }

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 940px) {
      grid-template-columns: repeat(5, 1fr);
      margin-left: auto;
    }

    @media (max-width: 490px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
