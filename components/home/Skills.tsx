import styled from "styled-components";

export const Skills: React.FC<any> = () => {
  return (
    <ContentWrap>
      <StyledSkills>
        <h2>
          Skills<span>_</span>
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
      </StyledSkills>
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
  .flex-wrap {
    display: flex;

    justify-content: space-evenly;

    img {
      width: 50px;
    }
  }
`;
