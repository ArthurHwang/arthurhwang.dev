import styled from "styled-components";
import Link from "next/link";
import useTyped from "use-typed";
import { ReactElement, useRef } from "react";
import { getWelcomeMessage } from "../lib/welcomeMessage";
import { Button } from "./Button";
import { Link as ScrollLink } from "react-scroll";

export const SubheaderHome: React.FC = (): ReactElement => {
  const typedRef = useRef(null);

  useTyped(typedRef, {
    strings: [
      "I'm a Full Stack Developer",
      "A few of my skills are React, TypeScript, Node.js, AWS, Express, and MySQL",
      "Lover of technology, Lover of code",
      "I pass my free time with mahjong, guitar, and learning",
      "Wow, thanks for staying til the end!",
      "Feel free to scroll down at any time!",
      "Or, just keep playing with the particles! No judgement here!",
      "Reloading sequence...^4000"
    ],
    loop: true,
    typeSpeed: 60,
    backSpeed: 40
  });

  return (
    <ContentWrap>
      <div className="flex-wrap">
        <img src="/static/me.jpg" />
        <h2>{getWelcomeMessage()}</h2>
        <h1>I'm Arthur Hwang</h1>
        <div className="typed">
          <span ref={typedRef}></span>
        </div>
        <div className="buttons">
          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button color="green">Contact Me</Button>
          </ScrollLink>
          <Link href="/projects">
            <a>
              <Button color="black">View My Work</Button>
            </a>
          </Link>
        </div>
      </div>
    </ContentWrap>
  );
};

const ContentWrap = styled("div")`
  height: 100%;

  img {
    width: 130px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.accent};
    margin: 0 auto;
    position: relative;
    bottom: 30px;

    @media (max-width: 519px) {
      width: 100px;
    }
  }

  .buttons {
    z-index: 1;
    text-align: center;

    button {
      display: inline-block;
      width: 120px;
      padding: 1rem 0;

      &:first-child {
        margin-right: 8px;
      }

      &:last-child {
        margin-left: 8px;
      }
    }
  }

  .flex-wrap {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    animation: cssAnimation 0s 0.4s forwards;
    visibility: hidden;
  }

  @keyframes cssAnimation {
    to {
      visibility: visible;
    }
  }

  h1,
  h2 {
    margin: 0;
    text-align: center;
    font-weight: 300;
    color: ${({ theme }) => theme.font.white};
    z-index: 1;
    text-shadow: 1px 1px 2px black;
  }

  h1 {
    line-height: 1.5;
    font-size: 8rem;
    letter-spacing: -1px;

    @media (max-width: 734px) {
      font-size: 6rem;
    }

    @media (max-width: 518px) {
      line-height: 2;
      font-size: 4.2rem;
    }
  }

  h2 {
    line-height: 0.1;
    font-size: 3.8rem;
    letter-spacing: -1px;

    @media (max-width: 734px) {
      font-size: 3rem;
    }

    @media (max-width: 518px) {
      font-size: 2.4rem;
    }
  }

  .typed {
    color: ${({ theme }) => theme.font.white};
    width: 100%;
    z-index: 1;
    position: relative;
    bottom: 15px;
    text-align: center;
    padding: 0 1rem;

    .typed-cursor {
      color: ${({ theme }) => theme.accent};
      position: relative;
      bottom: 3px;
    }

    @media (max-width: 518px) {
      bottom: 12px;
    }

    span {
      text-transform: uppercase;
      font-size: 2.8rem;
      letter-spacing: 0;
      font-weight: 300;
      text-shadow: 1px 1px 2px black;

      @media (max-width: 734px) {
        font-size: 2.2rem;
      }

      @media (max-width: 518px) {
        font-size: 2rem;
        line-height: 0;
      }
    }
  }
`;
