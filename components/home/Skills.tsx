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
            <img
              //   style={{ width: "42px", height: "auto" }}
              src="/static/home/expressjslogo.png"
            />{" "}
            ExpressJS
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
            <span>Responsive Web</span>
            <span>Performance optimization</span>
            <span>Cross-browser optimization</span>
            <span>Agile Workflows</span>
          </div>
          <div className="col">
            <span>User Interface / User Experience</span>
            <span>Google Marketing Platform</span>
            <span>Search Engine Optimization</span>
            <span>Google Analytics</span>
          </div>
          <div className="col">
            <span>UNIX Server Administration</span>
            <span>Cpanel / WHM</span>
            <span>Problem Solving</span>
            <span>Communication</span>
          </div>
        </div>
        {/* <div className="flex-wrap"> */}

        {/* </div> */}
      </StyledSkills>
      {/* <StyledTools>
        <h2>
          Tools<span>_</span>
        </h2>
        <div className="flex-wrap">
          <img src="/static/home/js.png" />
          <img src="/static/home/typescript.svg" />
          <img src="/static/home/react.png" />
          <img src="/static/home/nodejs-icon.svg" />
          <img src="/static/home/graphql.png" />
          <img src="/static/home/gatsby.png" />
          <img src="/static/home/next-js.svg" />
          <img src="/static/home/html5.png" />
          <img src="/static/home/css.png" />
          <img src="/static/home/git.png" />
        </div>
      </StyledTools> */}
    </ContentWrap>
  );
};

const ContentWrap = styled("div")`
  padding: 4rem;
  background-color: ${({ theme }) => theme.lightgrey};

  h2 {
    margin-top: 0;

    /* text-align: center; */
  }
  span {
    color: ${({ theme }) => theme.accent};
    font-weight: 800;
  }
`;

const StyledSkills = styled("div")`
  max-width: 800px;
  margin: 0 auto;
  /* margin-bottom: 1rem; */

  .other-wrap {
    .col {
      display: flex;
      flex-direction: column;
    }
    span {
      text-align: left;
      font-weight: 600;
      font-size: 1.4rem;
    }
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .skills-wrap {
    margin-bottom: 2rem;
    flex-wrap: wrap;

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
    /* display: grid; */
    /* justify-content: space-evenly; */
    /* grid-auto-rows: 1fr; */
    /* grid-auto-columns: 1fr; */
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(2, 1fr);
    img {
      margin: 0 auto;
      width: 45px;
      height: 45px;
    }
  }
`;

// const StyledTools = styled("div")`
//   max-width: 800px;
//   margin: 0 auto;
//   .flex-wrap {
//     display: flex;

//     justify-content: space-evenly;

//     img {
//       width: 50px;
//     }
//   }
// `;
