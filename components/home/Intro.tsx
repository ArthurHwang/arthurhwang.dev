import styled from "styled-components";
import Link from "next/link";
import { ReactElement } from "react";
import { FaGithub, FaLinkedin, FaClipboardList } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { ActiveLink } from "../ActiveLink";

export const Intro: React.FC = (): ReactElement => {
  return (
    <ContentWrap>
      <StyledIntro>
        <InnerLeft>
          <h2>
            WHOAMI<span>_</span>
          </h2>
          <p>
            Hey there, nice to meet you! My name is Arthur Hwang, I'm an AWS
            Certified Full-Stack Developer currently residing in Southern
            California. I'm a driven, passionate, family-oriented individual who
            looks at obstacles and difficulties as opportunities to learn and
            grow. Ever since I was a kid I have had a love for puzzles and
            building. I'd even take things apart to see how they were put
            together, though, more often than not they didn't go back the way
            they came. Ultimately, this led me to development where I get to
            enjoy the best of both worlds. When I'm not coding you'll likely
            find me spending time with family, reading documentation, watching
            tutorials, playing mahjong, or learning about the latest and
            greatest in technology.
          </p>
          <p>
            I have recently gotten into blogging to try to give back to the
            development community by trying teach and explain to readers that
            may come across my website about code and technology topics. The
            main focus for my blog is to explain topics that I have learned in a
            way that readers can comprehend easily. I hope to give readers an
            "ah-ha" moment about the topic that maybe they previously had
            trouble understanding.{" "}
            <Link href="/blog">
              <a className="link">Visit my blog!</a>
            </Link>
          </p>
        </InnerLeft>

        <InnerRight>
          <h2>
            Links<span>_</span>
          </h2>
          <div className="badges-2">
            <a
              href="https://github.com/ArthurHwang"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              title="GitHub"
            >
              <FaGithub className="icon" /> <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/arthur-hwang"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              title="LinkedIn"
            >
              <FaLinkedin className="icon" /> <span>LinkedIn</span>
            </a>
            <Link href="/#contact">
              <a className="link" title="Mail">
                <IoMdMail className="icon" /> <span>Contact</span>
              </a>
            </Link>
            <ActiveLink
              activeClassName="active"
              href="/projects"
              as="/projects"
            >
              <a className="link" href="/projects" title="Projects">
                <AiFillProject className="icon" />
                Projects
              </a>
            </ActiveLink>
            <a
              href="/static/ahwang-resume.pdf"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              title="CV"
            >
              <FaClipboardList className="icon" /> <span>CV</span>
            </a>
          </div>
        </InnerRight>
      </StyledIntro>
    </ContentWrap>
  );
};

const ContentWrap = styled("div")`
  background-color: ${({ theme }) => theme.bg.grey};
  display: flex;
  justify-content: center;
  padding: 10rem 2rem 1rem;

  span {
    color: ${({ theme }) => theme.accent};
  }

  h2 {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    padding-top: 4rem;
  }
`;

const InnerLeft = styled("div")``;

const InnerRight = styled("div")`
  .badges-2 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: calc(100% - 63px - 19.92px);
    position: relative;
    bottom: 10px;

    a.link {
      position: relative;
      bottom: 9px;

      @media (max-width: 490px) {
        &:nth-child(even) {
          padding-left: calc(100% - 68%);
        }
      }
    }

    .icon {
      position: relative;
      top: 8px;
      font-size: 3rem;
      margin-right: 0.9rem;
    }

    @media (max-width: 768px) {
      position: initial;
    }

    @media (max-width: 490px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const StyledIntro = styled("div")`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 6rem;
  max-width: 1200px;

  @media (max-width: 490px) {
    grid-template-columns: initial;
    grid-template-rows: 1fr auto;
    grid-gap: initial;
  }
`;
