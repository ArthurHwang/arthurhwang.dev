import styled from "styled-components";
import { ReactElement } from "react";
import { FaGithub, FaLinkedin, FaClipboardList } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { ActiveLink } from "../ActiveLink";
import Link from "next/link";

export const Intro: React.FC = (): ReactElement => {
  return (
    <ContentWrap>
      <StyledIntro>
        <InnerLeft>
          <h2>
            WHOAMI<span>_</span>
          </h2>
          <p>
            Hi there! I'm Arthur, a fullstack web developer born and raised in
            Southern California where I currently reside. I'm a passionate and
            professional web developer that likes to visualize, plan and deliver
            technically perfect, responsive and user friendly software
            solutions.
          </p>
          <p>
            I have always had an interest in anything technology related.
            However, ever since I found coding I have felt blessed to find
            something in my life that interests me every day. From creating user
            interfaces to more computer science topics like data structures and
            algorithms, I constantly put the work and the time in to learn more
            and more. It is my life long ambition to become the best software
            developer I can possibly be.
          </p>
          <p>
            I have recently gotten into blogging to try to give back to the
            community by trying teach and explain to readers that may come
            across my website about code and technology topics. The main focus
            for my blog is to explain topics that I have learned in a way that
            readers can comprehend easily. I hope to give readers an "ah-ha"
            moment about the topic that maybe they previously had trouble
            understanding.{" "}
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
            >
              <FaGithub className="icon" /> <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/arthur-hwang"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <FaLinkedin className="icon" /> <span>LinkedIn</span>
            </a>
            <a
              href="mailto:mail@arthurhwang.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <IoMdMail className="icon" /> <span>Email</span>
            </a>
            <a
              href="/static/arthurhwang-resume.pdf"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaClipboardList className="icon" /> <span>CV</span>
            </a>

            <ActiveLink
              activeClassName="active"
              href="/projects"
              as="/projects"
            >
              <a className="link" href="/projects">
                <AiFillProject className="icon" />
                Projects
              </a>
            </ActiveLink>
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
`;

const InnerLeft = styled("div")``;

const InnerRight = styled("div")`
  .badges-2 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: calc(100% - 63px - 19.92px);

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
