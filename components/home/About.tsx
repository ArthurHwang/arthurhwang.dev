import styled from "styled-components";
import Link from "next/link";

export const About: React.FC<any> = () => {
  return (
    <ContentWrap>
      <StyledAbout>
        <h2>
          WHOAMI<span>_</span>
        </h2>
        <p>
          I'm Arthur, a fullstack web developer born and raised in Southern
          California where I currently reside. I'm a passionate and professional
          web developer that likes to visualize, plan and deliver technically
          perfect, responsive and user friendly software solutions.
        </p>
        <p>
          I have always had an interest in anything technology related. However,
          ever since I found coding I have felt blessed to find something in my
          life that interests me every day. From creating user interfaces to
          more computer science topics like data structures and algorithms, I
          constantly put the work and the time in to learn more and more. It is
          my life long ambition to become the best software developer I can
          possibly be.
        </p>
        <p>
          I have recently gotten into blogging to try to give back to the
          community by trying teach and explain to readers that may come across
          me about code and technology topics. My main focus for my blog is to
          explain topics that I have learned in a way that readers can
          comprehend easily. I hope to give readers an "ah-ha" moment about the
          topic.{" "}
          <Link href="/blog">
            <a className="link">Visit my blog!</a>
          </Link>
        </p>
        <h3>
          Random Facts About Me<span>_</span>
        </h3>
        <ul>
          <li>
            I listen to{" "}
            <a className="link" href="https://www.syntax.fm">
              Syntax.fm
            </a>{" "}
            everyday
          </li>
          <li>I have been playing the guitar for more than 15 years.</li>
          <li>My favorite guitarist is Stevie Ray Vaughan.</li>
          <li>
            I have a dog and a cat that depending on the hour either love or
            hate each other.
          </li>
          <li>I REALLY like coffee and tea.</li>
          <li>I meetup with a few close friends every week to play mahjong.</li>
          <li>I love playing golf.</li>
          <li>I speak Chinese.</li>
        </ul>
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

  .flex-wrap {
    display: flex;

    justify-content: space-evenly;

    img {
      width: 50px;
    }
  }
`;
