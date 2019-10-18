import styled from "styled-components";
import MdHeart from "react-ionicons/lib/MdHeart";
import {
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  // FaRegCopyright,
  FaFileCode,
  FaTwitterSquare
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Footer: React.FC<any> = () => {
  return (
    <StyledFooter>
      <div className="love">
        <span>
          Made with{" "}
          <a style={{ height: "29.94px" }} href="https://nextjs.org/">
            <img src="/static/Nextjs-logo.svg" />
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
          title="Github"
          href="https://github.com/ArthurHwang"
          className="link"
        >
          <FaGithubSquare className="icon" />
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/arthur-hwang"
          className="link"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          title="Facebook"
          href="https://www.facebook.com/arthur.hwang.9"
          className="link"
        >
          <FaFacebookSquare className="icon" />
        </a>
        <a title="Twitter" href="https://www.twitter.com/" className="link">
          <FaTwitterSquare className="icon" />
        </a>
        <a title="Resume" href="mailto:mail@arthurhwang.dev" className="link">
          <FaFileCode className="icon" />{" "}
        </a>
        <a title="Email" href="mailto:mail@arthurhwang.dev" className="link">
          <IoMdMail className="icon" />
        </a>
      </div>
      {/* <div className="copyright">
        <span>
          <FaRegCopyright style={{ color: "#FE4A49", marginRight: "0.5rem" }} />{" "}
          2019&nbsp;
          <span style={{ color: "#FE4A49" }}>-</span>&nbsp;
          <strong> Arthur Hwang</strong>
          .&nbsp; All Rights Reserved
        </span>
      </div> */}
    </StyledFooter>
  );
};

const StyledFooter = styled("footer")`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.primary};
  margin: 0;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  /* position: absolute; */
  /* left: 0; */
  /* bottom: 0; */
  /* width: 100%; */

  @media (max-width: 910px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);

    /* position: relative; */
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
