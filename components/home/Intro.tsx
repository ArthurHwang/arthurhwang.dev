import styled from "styled-components";
import { ReactElement } from "react";
import { FaGithub, FaLinkedin, FaClipboardList } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { ActiveLink as Link } from "../ActiveLink";

export const Intro: React.FC = (): ReactElement => {
  return (
    <ContentWrap>
      <StyledIntro>
        <InnerLeft>
          <h2>
            Brute Force Determination<span>_</span>
          </h2>
          <p>
            I like to <strong>get things done</strong>. Architecting and
            building highly performant, high quality, maintainable web
            applications is my passion. As a <strong>hyper-motivated</strong>{" "}
            self starter who is passionate about writing clean, efficient code -
            delivering features and pushing through to the finish line is what
            fuels me. In order to solve tough problems, I instill maximum effort
            and resilience in anything I touch. Having a never-give-up attitude
            is my ethos.
          </p>
          <p>
            I am hungry and driven to do more, build more and learn more. My
            thirst for knowledge could be classified as borderline obsessive.
            Ultimately, being able to take part and help businesses reach their
            goals and get to the next level by developing software brings me
            immense joy and satisfaction.
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
              href="/static/resume.pdf"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaClipboardList className="icon" /> <span>CV</span>
            </a>

            <Link activeClassName="active" href="/projects" as="/projects">
              <a className="link" href="/projects">
                <AiFillProject className="icon" />
                Projects
              </a>
            </Link>
          </div>
        </InnerRight>
      </StyledIntro>
    </ContentWrap>
  );
};

const ContentWrap = styled("div")`
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
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

  .badges {
    display: flex;
    flex-direction: column;
    padding-top: 0.2rem;

    & a {
      margin-bottom: 2rem;
      display: flex;

      @media (max-width: 490px) {
        &:nth-child(even) {
          padding-left: calc(100% - 66%);
        }
      }
    }

    .icon {
      position: relative;
      font-size: 3rem;
      margin-right: 1rem;
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
  max-width: 800px;

  @media (max-width: 490px) {
    grid-template-columns: initial;
    grid-template-rows: 1fr auto;
    grid-gap: initial;
  }
`;
