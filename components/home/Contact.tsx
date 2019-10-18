import styled from "styled-components";

export const Contact: React.FC<any> = () => {
  return (
    <ContentWrap>
      <StyledContact>
        <h2>
          Lets Chat!<span>_</span>
        </h2>
        <p>
          I currently work as a web developer for a regionally well known law
          firm
        </p>
      </StyledContact>
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

const StyledContact = styled("div")`
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