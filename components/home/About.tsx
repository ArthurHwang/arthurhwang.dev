import styled from "styled-components";

export const About: React.FC<any> = () => {
  return (
    <ContentWrap>
      <StyledAbout>
        <h2>
          About me<span>_</span>
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          nam ducimus sit maiores a quo ea natus fugiat cupiditate porro neque
          iste, temporibus iusto nobis expedita iure officia reiciendis optio.
          why I’m excited to make a big impact at a high growth company.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          corrupti laborum impedit iste consequuntur eius odit odio adipisci
          omnis, cupiditate maiores culpa suscipit perferendis explicabo beatae
          eveniet! Asperiores, est sapiente.
        </p>
      </StyledAbout>
    </ContentWrap>
  );
};

const ContentWrap = styled("div")`
  padding: 4rem 2rem;

  h2 {
    margin-top: 0;
  }

  span {
    color: ${({ theme }) => theme.accent};
    font-weight: 800;
  }
`;

const StyledAbout = styled("div")`
  max-width: 800px;
  margin: 0 auto;

  /* p {
    font-size: 1.6rem;
    @media (max-width: 490px) {
      font-size: 14px;
    }
  } */

  .flex-wrap {
    display: flex;

    justify-content: space-evenly;

    img {
      width: 50px;
    }
  }
`;
