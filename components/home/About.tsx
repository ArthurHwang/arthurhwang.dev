import styled from "styled-components";
import MdHeart from "react-ionicons/lib/MdHeart";
import { ReactElement } from "react";

export const About: React.FC = (): ReactElement => {
  return (
    <ContentWrap className="circuit-bg">
      <StyledAbout>
        <h2>
          Brute Force Determination<span>_</span>
        </h2>
        <p>
          I like to <strong>get things done</strong>. Architecting and building
          highly performant, high quality, maintainable web applications is my
          passion. As a <strong>hyper-motivated</strong> self starter who is
          passionate about writing clean, efficient code - delivering features
          and pushing through to the finish line is what fuels me. In order to
          solve tough problems, I instill maximum effort and resilience in
          anything I touch. Having a never-give-up attitude is my ethos.
        </p>
        <p>
          I am hungry and driven to do more, build more and learn more. My
          thirst for knowledge could be classified as borderline obsessive.
          Ultimately, being able to take part and help businesses reach their
          goals and get to the next level by developing software brings me
          immense joy and satisfaction. I am currently studying for AWS
          certifications.
        </p>
        <h3>
          Random Facts About Me<span>_</span>
        </h3>
        <ul>
          <li>
            I{" "}
            <MdHeart
              style={{ position: "relative", top: "5px" }}
              fontSize="22px"
              color="red"
              beat={true}
            />{" "}
            <a className="link" href="https://www.syntax.fm">
              Syntax.fm
            </a>{" "}
          </li>
          <li>I am really into custom mechanical keyboards</li>
          <li>I have been playing the guitar for more than 15 years</li>
          <li>My favorite guitarist is Stevie Ray Vaughan</li>
          <li>
            I have a dog and a cat that depending on the hour either love or
            hate each other
          </li>
          <li>I have an unhealthy obsession with coffee and tea</li>
          <li>I meetup with a few close friends every week to play mahjong</li>
          <li>I enjoy playing golf</li>
          <li>I speak Mandarin Chinese</li>
        </ul>
      </StyledAbout>
    </ContentWrap>
  );
};

const ContentWrap = styled("div")`
  padding: 10rem 2rem 10rem;

  h2 {
    margin-top: 0;
  }

  span {
    color: ${({ theme }) => theme.accent};
    font-weight: 800;
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const StyledAbout = styled("div")`
  max-width: 1200px;
  margin: 0 auto;

  .flex-wrap {
    display: flex;
    justify-content: space-evenly;

    img {
      width: 50px;
    }
  }
`;
