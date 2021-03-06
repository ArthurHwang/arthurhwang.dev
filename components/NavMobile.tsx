import styled from "styled-components";
import Link from "next/link";
import { IoIosKeypad } from "react-icons/io";
import { ReactElement, useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaClipboardList } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const NavMobile: React.FC = (): ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setMenuOpen(false);
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLink = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    setMenuOpen(false);
  };

  return (
    <NavMobileWrapper>
      <StyledNavMobile>
        <IconWrapper onClick={handleClick} rotate={menuOpen ? "true" : "false"}>
          <IoIosKeypad />
        </IconWrapper>
        {menuOpen && (
          <StyledNavMenu
            onScroll={handleScroll}
            className={menuOpen ? "fade" : "fadeOut"}
          >
            <LinkWrapper>
              <h2>Navigation</h2>
              <div className="icon-wrap">
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
                  <a rel="noopener noreferrer" className="link invert">
                    <IoMdMail className="icon" />
                  </a>
                </Link>
                <a
                  href="/static/arthur-hwang-resume-2020.pdf"
                  className="link invert"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaClipboardList className="icon" />
                </a>
              </div>
              <Link href="/">
                <a className="link-wrap link invert" onClick={handleLink}>
                  Home<span className="underscore">_</span>
                </a>
              </Link>
              <Link href="/projects">
                <a className="link-wrap link invert" onClick={handleLink}>
                  Projects<span className="underscore">_</span>
                </a>
              </Link>
              <Link href="/blog">
                <a className="link-wrap link invert" onClick={handleLink}>
                  Blog<span className="underscore">_</span>
                </a>
              </Link>
              <Link href="/#contact">
                <a className="link-wrap link invert" onClick={handleLink}>
                  Contact<span className="underscore">_</span>
                </a>
              </Link>
            </LinkWrapper>
          </StyledNavMenu>
        )}
      </StyledNavMobile>
    </NavMobileWrapper>
  );
};

const LinkWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;

  h2 {
    color: ${({ theme }) => theme.font.white};
  }

  .icon-wrap {
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    .icon {
      font-size: 2.4rem;
      margin: 0 1rem;
      position: relative;
      top: 3px;
    }
  }

  .link-wrap {
    cursor: pointer;
    text-transform: uppercase;
    font-size: 2.4rem;
  }
  .underscore {
    color: ${({ theme }) => theme.accent};
    font-weight: 800;
    -webkit-text-fill-color: initial;
  }
`;

const IconWrapper = styled("div")<{ rotate: string; theme: any }>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  svg {
    position: relative;
    font-size: 3rem;
    right: 1.5rem;
    color: ${props =>
      props.rotate === "true" ? props.theme.yellow : props.theme.font.white};
    transform: ${props => (props.rotate === "true" ? `rotate(225deg)` : "")};
    transition: transform 0.5s;
  }
`;

const StyledNavMobile = styled("nav")`
  height: 100%;
  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledNavMenu = styled("div")`
  position: fixed;
  left: 0;
  top: 60px;
  width: 100vw;
  background-color: ${({ theme }: any) => theme.bg.black};
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavMobileWrapper = styled.div`
  z-index: 1000;
  .fade {
    animation: fadein 0.8s;
    -moz-animation: fadein 0.8s;
    -webkit-animation: fadein 0.8s;
    -o-animation: fadein 0.8s;
  }

  .fadeOut {
    animation: fadeout 2s;
    -moz-animation: fadeout 2s;
    -webkit-animation: fadeout 2s;
    -o-animation: fadeout 2s;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @-moz-keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @-o-keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    80% {
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;
