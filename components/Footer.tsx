import styled from "styled-components";
// import LogoNodejs from "react-ionicons/lib/LogoNodejs";
// import LogoGithub from "react-ionicons/lib/LogoGithub";
// import IosRefresh from "react-ionicons/lib/IosRefresh";
// import MdInfinite from "react-ionicons/lib/MdInfinite";
// import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";
import LogoJavascript from "react-ionicons/lib/LogoJavascript";
import MdHeart from "react-ionicons/lib/MdHeart";
import { FaGithubSquare, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdMail } from "react-icons/md";
MdMail;

// import Link from "next/link";

export const Footer: React.FC<any> = () => {
  return (
    <StyledFooter>
      <div className="love">
        <span className="copyright">
          Made With{" "}
          <MdHeart
            style={{ position: "relative", top: "5px" }}
            fontSize="25px"
            color="red"
            beat={true}
          />
          and alot of
          <LogoJavascript
            style={{ position: "relative", top: "5px" }}
            fontSize="25px"
            color="#f7df1e"
            beat={true}
          />
        </span>
      </div>

      <div className="copyright">
        <span>
          &copy; 2019 <strong>Arthur Hwang</strong>. All Rights Reserved
        </span>
      </div>
      <div className="badges">
        <a
          title="Github"
          href="https://github.com/ArthurHwang"
          className="link"
        >
          <FaGithubSquare className="icon" />
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/arthur-hwang/"
          className="link"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/arthur-hwang/"
          className="link"
        >
          <IoMdMail className="icon" />
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/arthur-hwang/"
          className="link"
        >
          <FaMailBulk className="icon" />
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/arthur-hwang/"
          className="link"
        >
          <MdMail className="icon" />
        </a>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled("footer")`
  /* height: 400px; */
  /* padding: 1rem; */
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.primary};
  margin: 0;
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: center; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-top: 1px solid rgba(0, 0, 0, 0.125);

  .love {
    /* align-self: center; */
  }

  .copyright {
    font-size: 1.4rem;
    word-spacing: -1px;
    text-align: center;
    align-self: center;
  }

  a {
    margin: 0 0.5rem;
    /* height: auto; */
  }

  .badges {
    /* display: flex;
    justify-content: space-evenly;
    align-items: center; */
    position: relative;
    top: 4px;
    /* display: flex; */
    /* align-items: center; */
    /* align-self: center; */
    justify-self: flex-end;
  }

  .icon {
    font-size: 3rem;
  }
`;
