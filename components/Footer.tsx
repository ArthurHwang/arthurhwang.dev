import styled from "styled-components";
import MdHeart from "react-ionicons/lib/MdHeart";
import {
  FaGithub,
  // FaFacebook,
  FaLinkedin,
  FaClipboardList
  // FaTwitter
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Footer: React.FC<any> = () => {
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
          className="link"
        >
          <FaGithub className="icon" />
        </a>
        <a
          aria-label="LinkedIn"
          title=""
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/arthur-hwang"
          className="link"
        >
          <FaLinkedin className="icon" />
        </a>
        {/* <a
          aria-label="facebook"
          title=""
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/arthur.hwang.9"
          className="link"
        >
          <FaFacebook className="icon" />
        </a>
        <a
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          title=""
          href="https://twitter.com/ArthurHwang"
          className="link"
        >
          <FaTwitter className="icon" />
        </a> */}
        <a
          aria-label="Resume"
          target="_blank"
          rel="noopener noreferrer"
          title="CV"
          href="mailto:mail@arthurhwang.dev"
          className="link"
        >
          <FaClipboardList className="icon" />{" "}
        </a>
        <a
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
          href="mailto:mail@arthurhwang.dev"
          className="link"
        >
          <IoMdMail className="icon" />
        </a>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled("footer")`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.primary};
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
