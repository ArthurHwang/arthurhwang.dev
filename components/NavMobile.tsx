import styled from "styled-components";
import Link from "next/link";
import { useEffect } from "react";
import { IoIosKeypad } from "react-icons/io";
import { useState } from "react";
import { ReactElement } from "react";
import { FaGithub, FaLinkedin, FaClipboardList } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const NavMobile: React.FC = (): ReactElement => {
  const windowGlobal: any = typeof window !== "undefined" && window;
  const [menuOpen, setMenuOpen] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(windowGlobal.innerHeight - 60);

    window.addEventListener("resize", () => {
      setHeight(windowGlobal.innerHeight - 60);
    });
    return () => window.removeEventListener("resize", () => {});
  }, [height]);

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
            viewportHeight={height}
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
                <a
                  href="mailto:mail@arthurhwang.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link invert"
                >
                  <IoMdMail className="icon" />
                </a>
                <a
                  href="/static/arthurhwang-resume.pdf"
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
              <Link href="/contact">
                <a className="link-wrap link invert" onClick={handleLink}>
                  Contact<span className="underscore">_</span>
                </a>
              </Link>
            </LinkWrapper>
            {/* <MiscWrapper>
              <a
                href="mailto:mail@arthurhwang.dev"
                className="link-wrap link"
                onClick={handleLink}
              >
                mail@arthurhwang.dev
              </a>
              <p className="copyright">&copy; - 2019 Arthur Hwang </p>
            </MiscWrapper> */}
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

// const MiscWrapper = styled('div')`
//   border-top: 1px solid #ebeaeb;
//   padding-top: 1rem;

//   .link-wrap {
//     font-size: 1.4rem;
//   }

//   .copyright {
//     margin: 0;
//     font-size: 1.4rem;
//   }
// `;

const IconWrapper = styled("div")<{ rotate: string; theme: any }>`
  height: 100%;
  width: 100%;
  z-index: 20;
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

const StyledNavMenu = styled("div")<{ viewportHeight: number }>`
  position: fixed;
  z-index: 20;
  left: 0;
  top: 61px;
  width: 100vw;
  /* padding: 2rem 2rem 1rem; */
  background-color: ${({ theme }) => theme.bg.black};
  /* height: calc(100% - 60px); */
  height: ${props => props.viewportHeight + "px"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavMobileWrapper = styled.div`
  z-index: 1000;
  .fade {
    animation: fadein 0.8s;
    -moz-animation: fadein 0.8s; /* Firefox */
    -webkit-animation: fadein 0.8s; /* Safari and Chrome */
    -o-animation: fadein 0.8s; /* Opera */
  }
  .fadeOut {
    animation: fadeout 2s;
    -moz-animation: fadeout 2s; /* Firefox */
    -webkit-animation: fadeout 2s; /* Safari and Chrome */
    -o-animation: fadeout 2s; /* Opera */
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
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
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
    /* Firefox */
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @-webkit-keyframes fadeout {
    /* Safari and Chrome */
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @-o-keyframes fadeout {
    /* Opera */
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
