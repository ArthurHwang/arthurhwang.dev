import styled from "styled-components";
import React, { ReactElement } from "react";
import useTyped from "use-typed";
import { getWelcomeMessage } from "../lib/welcomeMessage";

export const SubheaderHome: React.FC = (): ReactElement => {
  const demoRef = React.useRef(null);
  useTyped(demoRef, {
    strings: [
      "I'm a Fullstack web developer",
      "Lover of technology",
      "A few of my skills are React, TypeScript, NodeJS, HTML, CSS",
      "I'm currently learning React, Node, and PostCSS",
      "I pass my free time with mahjong, guitar, and learning",
      "Wow, thanks for staying til the end!",
      "Feel free to scroll down at any time!",
      "Or, just keep playing with the particles! No judgement here!",
      "Reloading sequence...^4000"
    ],
    typeSpeed: 70,
    backSpeed: 40
  });
  return (
    <ContentWrap>
      <div className="flex-wrap">
        <h1>{getWelcomeMessage()}</h1>
        <h2>I'm Arthur Hwang</h2>
        <div className="typed">
          <span ref={demoRef}></span>
        </div>
      </div>
    </ContentWrap>
  );
};

const ContentWrap = styled("div")`
  height: 100%;
  /* display: flex; */
  /* justify-content: center; */
  /* align-content: middle; */

  .flex-wrap {
    height: 100%;
    display: flex;
    /* justify-content: middle; */
    justify-content: center;
    flex-direction: column;
  }
  h1,
  h2 {
    margin: 0;
    text-align: center;
    font-weight: 300;
    color: ${({ theme }) => theme.font.white};
    z-index: 20;
  }

  h1 {
    line-height: 0.1;
    font-size: 4rem;
    position: relative;
    letter-spacing: -1px;
  }

  h2 {
    line-height: 1.5;
    font-size: 8rem;
    letter-spacing: -3px;
  }

  .typed {
    color: ${({ theme }) => theme.font.white};
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 50;

    span {
      text-transform: uppercase;
      font-size: 2.8rem;
      letter-spacing: 0;
      font-weight: 300;
    }
  }
`;
