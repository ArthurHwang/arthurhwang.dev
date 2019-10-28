import styled from "styled-components";

export const About: React.FC<any> = () => {
  return (
    <ContentWrap>
      <StyledAbout>
        <h2>
          About me<span>_</span>
        </h2>
        <p>
          I’ve always sought out opportunities and challenges that are
          meaningful to me. Although my professional path has taken many twists
          and turns — from touring and recording artist, to employee of the year
          at a non-profit, to dean's scholar at UPenn, to small business owner
          and entrepreneur — I've never stopped engaging my passion to help
          others and solve problems. As a web developer, I enjoy using my
          obsessive attention to detail, my unequivocal love for making things,
          and my mission-driven work ethic to literally change the world. That's
          why I’m excited to make a big impact at a high growth company.
        </p>
        <p>
          My name is Kyle. I design and build digital products that are
          intuitive, accessible, beautiful, and fun. I’ve done this
          professionally since 2012, and I’ve been designing for the web since
          2007. This is a home for things I’ve made and how I’ve made them. My
          goal is for anyone (and anyone’s grandma) to understand what I’ve
          written. Although the focus is on my design and the process behind it,
          case studies occasionally detour to explore interesting, relevant
          topics.
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

  p {
    font-size: 1.6rem;
    @media (max-width: 490px) {
      font-size: 14px;
    }
  }

  .flex-wrap {
    display: flex;

    justify-content: space-evenly;

    img {
      width: 50px;
    }
  }
`;
