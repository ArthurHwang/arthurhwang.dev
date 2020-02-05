import styled from "styled-components";
import MdHeart from "react-ionicons/lib/MdHeart";
import { FaGithub, FaLinkedin, FaClipboardList } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { ReactElement } from "react";

export const Footer: React.FC = (): ReactElement => {
  return (
    <StyledFooter>
      <div className="love">
        <span>
          Made with{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: "29.94px" }}
            href="https://nextjs.org/"
          >
            <img src="/static/Nextjs-logo.svg" alt="nextjs" />
          </a>{" "}
          and a whole lotta{" "}
          <MdHeart
            style={{ marginLeft: "0rem", cursor: "pointer" }}
            fontSize="35px"
            color="red"
            onClick={() =>
              alert("Thank you for visiting my website.  I love you <3.")
            }
            beat={true}
          />
        </span>
      </div>

      <div className="badges">
        <a
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          title=""
          href="https://github.com/ArthurHwang"
          className="link invert"
        >
          <FaGithub className="icon" />
        </a>
        <a
          aria-label="LinkedIn"
          title=""
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/arthur-hwang"
          className="link invert"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
          href="mailto:mail@arthurhwang.dev"
          className="link invert"
        >
          <IoMdMail className="icon" />
        </a>
        <a
          aria-label="Resume"
          target="_blank"
          rel="noopener noreferrer"
          title="CV"
          href="/static/arthurhwang-resume.pdf"
          className="link invert"
        >
          <FaClipboardList className="icon" />{" "}
        </a>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled("footer")`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.bg.black};
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid rgba(0, 0, 0, 0.125);

  @media (max-width: 910px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }

  span {
    display: inline-flex;
    align-items: center;
    font-size: 1.4rem;
  }

  .love {
    position: relative;
    top: 2px;

    @media (max-width: 910px) {
      text-align: center;
      position: initial;
    }

    img {
      width: 65px;
      margin: 0 0.3rem;
      position: relative;
      bottom: 4px;
    }
  }

  .copyright {
    justify-self: flex-end;
    align-self: center;
    position: relative;
    top: 2px;

    @media (max-width: 910px) {
      justify-self: center;
    }
  }

  a {
    margin: 0 0.5rem;
  }

  .badges {
    position: relative;
    top: 6px;
    justify-self: flex-end;

    @media (max-width: 910px) {
      top: 2px;
      padding: 0.5rem 0;
      justify-self: center;
    }
  }

  .icon {
    font-size: 2.5rem;
  }
`;
