import styled from "styled-components";
import { ReactElement } from "react";
import { FaGithub, FaLinkedin, FaClipboardList } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

export const NavLinks: React.FC = ({}): ReactElement => (
  <StyledNavLinks>
    <a
      href="https://github.com/ArthurHwang"
      target="_blank"
      rel="noopener noreferrer"
      className="link invert"
    >
      <FaGithub className="icon" />
    </a>
    <a
      href="https://www.linkedin.com/in/arthur-hwang"
      target="_blank"
      rel="noopener noreferrer"
      className="link invert"
    >
      <FaLinkedin className="icon" />
    </a>
    <Link href="/#contact">
      <a
        // href="mailto:mail@arthurhwang.dev"
        // target="_blank"
        // rel="noopener noreferrer"
        className="link invert"
      >
        <IoMdMail className="icon" />
      </a>
    </Link>

    <a
      href="/static/arthurhwang-resume.pdf"
      className="link invert"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaClipboardList className="icon" />
    </a>
  </StyledNavLinks>
);

const StyledNavLinks = styled("div")`
  justify-self: flex-end;
  display: flex;
  align-items: center;
  padding-right: 1rem;
  /* border: 1px solid red; */
  @media (max-width: 934px) {
    display: none;
  }

  .icon {
    font-size: 2rem;
    margin: 0 1rem;
    position: relative;
    top: 3px;
  }
`;
