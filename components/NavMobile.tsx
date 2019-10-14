import styled from "styled-components";
import LogoNodejs from "react-ionicons/lib/LogoNodejs";
import Link from "next/link";
import { IoIosKeypad } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";

export const NavMobile: React.FC<any> = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return window.addEventListener("scroll", handleScroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

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
            <LogoNodejs
              onClick={() => alert("Hi!")}
              fontSize="60px"
              beat={true}
              color="#43853d"
            />
            <Link href="/about">
              <a className="link-wrap link" onClick={handleLink}>
                About
              </a>
            </Link>
            <Link href="/projects">
              <a className="link-wrap link" onClick={handleLink}>
                Projects
              </a>
            </Link>
            <Link href="/blog">
              <a className="link-wrap link" onClick={handleLink}>
                Blog
              </a>
            </Link>
            <Link href="/contact">
              <a className="link-wrap link" onClick={handleLink}>
                Contact
              </a>
            </Link>
          </StyledNavMenu>
        )}
      </StyledNavMobile>
    </NavMobileWrapper>
  );
};

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
      props.rotate === "true" ? props.theme.yellow : props.theme.black};
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
  top: 61px;
  width: 100vw;
  background-color: ${({ theme }) => theme.grey};
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;

  .link-wrap {
    cursor: pointer;
    text-transform: uppercase;
  }
`;

const NavMobileWrapper = styled.div`
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
