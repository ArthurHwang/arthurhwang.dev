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
            <img
              src="/static/home/nodejs-icon.svg"
              title="nodejs"
              alt="nodejs"
            />{" "}
            NodeJS
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
            NextJS
          </span>
          <span className="skill-item">
            <img src="/static/home/git.png" title="git" alt="git" /> Git
          </span>
          <span className="skill-item">
            <img src="/static/home/redux.png" title="redux" alt="redux" /> Redux
          </span>
          <span className="skill-item">
            <img src="/static/home/npmlogo.png" title="npm" alt="npm" /> npm
          </span>
          <span className="skill-item">
            <img src="/static/home/mongodb.png" title="mongodb" alt="mongodb" />{" "}
            MongoDB
          </span>
          <span className="skill-item">
            <img
              src="/static/home/expressjslogo.png"
              title="express"
              alt="express"
            />{" "}
            ExpressJS
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
              style={{ width: "55px" }}
              src="/static/projects/logos/mysql.png"
              title="mysql"
              alt="mysql"
            />{" "}
            MySQL
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
            <img src="/static/home/html5.png" title="html" alt="html5" /> HTML5
          </span>
          <span className="skill-item">
            <img src="/static/home/css.png" title="css" alt="css3" /> CSS3
          </span>
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
              <span className="hyphen">-</span> UI/ UX
            </span>

            <span className="other-item">
              <span className="hyphen">-</span> CI / CD
            </span>
            <span className="other-item">
              <span className="hyphen">-</span> DevOps
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

  h2 {
    margin-top: 0;
  }

  h3 {
    text-align: center;
  }

  span {
    color: ${({ theme }) => theme.secondaryAccent};
    font-weight: 800;
  }
`;

const StyledSkills = styled("div")`
  max-width: 1200px;
  margin: 0 auto;

  .other-wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 75%;
    margin: 0 auto;

    .two {
      @media (max-width: 865px) {
        padding-left: 0;
      }
    }

    .three {
      padding-left: 2rem;

      @media (max-width: 768px) {
        padding-left: 0;
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
  }

  .skills-wrap {
    margin: 0 auto 2rem;
    flex-wrap: wrap;
    position: relative;
    width: 75%;

    right: 10px;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(2, 1fr);

    @media (max-width: 768px) {
      position: initial;
    }

    img {
      margin: 0 auto;
      width: 45px;
      height: 45px;
      /* -webkit-filter: grayscale(100%) */
      /* filter: grayscale(100%); */
    }

    &:last-child {
      margin-bottom: 0;
    }

    .skill-item {
      color: ${({ theme }) => theme.black};
      font-weight: 700;
      font-size: 1.2rem;
      text-align: center;
      display: flex;
      flex-direction: column;
    }

    @media (max-width: 940px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 490px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
