import styled from "styled-components";
import { ActiveLink as Link } from "./ActiveLink";
import { ReactElement } from "react";

export const Nav: React.FC = (): ReactElement => {
  return (
    <StyledNav>
      <Link activeClassName="active" href="/" as="/">
        <div className="link-box">
          <a>Home</a>
        </div>
      </Link>
      <Link activeClassName="active" href="/projects" as="/projects">
        <div className="link-box">
          <a>Projects</a>
        </div>
      </Link>
      <Link
        activeClassName="active"
        partiallyActive={true}
        href="/blog"
        as="/blog"
      >
        <div className="link-box">
          <a>Blog</a>
        </div>
      </Link>
    </StyledNav>
  );
};

const StyledNav = styled("nav")`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  position: relative;
  /* z-index: 3000; */

  @media (max-width: 934px) {
    justify-self: end;
  }

  .link-box {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s linear;

    &:hover {
      /* background: ${({ theme }) => theme.bg.grey}; */
      background: ${({ theme }) => theme.grey};

      a {
        transition: color 0.2s linear;
        color: ${({ theme }) => theme.yellow};
      }
    }
  }

  .active {
    color: ${({ theme }) => theme.font.aqua};
    /* background: ${({ theme }) => theme.accent}; */
    a:after {
      height: 2px;
      position: absolute;
      bottom: 15px;
      background: ${({ theme }) => theme.font.aqua};
      content: '';
      width: calc(100% - 30px);
    }
  }

  a,
  button {
    padding: 1rem 1.5rem;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    letter-spacing: -0.2px;
    font-family: 'Titillium';
    /* font-weight: 700; */
    font-size: 1.3rem;
    background: none;
    border: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.font.white};

    &:after {
      height: 2px;
      background: ${({ theme }) => theme.aqua};
      content: '';
      width: 0;
      position: absolute;
      bottom: 15px;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 1.5rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 30px);
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
