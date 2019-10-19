import styled from "styled-components";

export const Skills: React.FC<any> = () => {
  return (
    <ContentWrap>
      <StyledSkills>
        <h2>
          Some of my skills<span>_</span>
        </h2>
        <div className="skills-wrap">
          <span className="skill-item">
            <img src="/static/home/js.png" /> JavaScript
          </span>
          <span className="skill-item">
            <img src="/static/home/typescript.svg" /> TypeScript
          </span>
          <span className="skill-item">
            <img src="/static/home/react.png" /> React
          </span>
          <span className="skill-item">
            <img src="/static/home/nodejs-icon.svg" /> NodeJS
          </span>
          <span className="skill-item">
            <img src="/static/home/graphql.png" /> GraphQL
          </span>
          <span className="skill-item">
            <img src="/static/home/gatsby.png" /> GatsbyJS
          </span>
          <span className="skill-item">
            <img src="/static/home/next-js.svg" /> NextJS
          </span>

          <span className="skill-item">
            <img src="/static/home/git.png" /> Git
          </span>
          <span className="skill-item">
            <img src="/static/home/redux.png" /> Redux
          </span>
          <span className="skill-item">
            <img src="/static/home/npmlogo.png" /> npm
          </span>
          <span className="skill-item">
            <img src="/static/home/mongodb.png" /> MongoDB
          </span>
          <span className="skill-item">
            <img src="/static/home/expressjslogo.png" /> ExpressJS
          </span>
          <span className="skill-item">
            <img src="/static/home/jest.png" /> Jest
          </span>
          <span className="skill-item">
            <img src="/static/home/cypress.png" /> Cypress
          </span>
          <span className="skill-item">
            <img src="/static/home/contentful.png" /> Contentful
          </span>
          <span className="skill-item">
            <img src="/static/home/wordpress.png" /> Wordpress
          </span>
          <span className="skill-item">
            <img src="/static/home/semantic.png" /> Semantic
          </span>
          <span className="skill-item">
            <img src="/static/home/bootstrap.png" /> Bootstrap
          </span>
          <span className="skill-item">
            <img src="/static/home/html5.png" /> HTML5
          </span>
          <span className="skill-item">
            <img src="/static/home/css.png" /> CSS3
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
  padding: 4rem;
  background-color: ${({ theme }) => theme.lightgrey};

  h2 {
    margin-top: 0;
  }
  span {
    color: ${({ theme }) => theme.accent};
    font-weight: 800;
  }
`;

const StyledSkills = styled("div")`
  max-width: 800px;
  margin: 0 auto;

  .other-wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .two {
      /* padding-left: calc(100% - 85%); */

      @media (max-width: 865px) {
        padding-left: 0;
      }
    }

    .three {
      /* padding-left: calc(100% - 60%); */
      padding-left: 2rem;

      /* @media (max-width: 865px) {
        padding-left: calc(100% - 90%);
      } */

      @media (max-width: 768px) {
        padding-left: 0;
      }
    }

    .other-item {
      padding: 0.3rem;
      text-shadow: black 0px 0px 0.1px;
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
    margin-bottom: 2rem;
    flex-wrap: wrap;
    position: relative;
    right: 10px;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(2, 1fr);

    img {
      margin: 0 auto;
      width: 45px;
      height: 45px;
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
