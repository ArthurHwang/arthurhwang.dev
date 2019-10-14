import styled from "styled-components";
import { ActiveLink as Link } from "./ActiveLink";

export const Nav: React.FC<any> = () => {
  return (
    <StyledNav>
      <Link activeClassName="active" href="/about">
        <div className="link-box">
          <a>About</a>
        </div>
      </Link>
      <Link activeClassName="active" href="/projects">
        <div className="link-box">
          <a>Projects</a>
        </div>
      </Link>
      <Link activeClassName="active" partiallyActive={true} href="/blog">
        <div className="link-box">
          <a>Blog</a>
        </div>
      </Link>
      <Link activeClassName="active" href="/contact">
        <div className="link-box">
          <a>Contact</a>
        </div>
      </Link>
    </StyledNav>
  );
};

const StyledNav = styled("nav")`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 1.6rem;

  .active {
    a:after {
      height: 2px;
      background: ${({ theme }) => theme.yellow};
      content: "";
      width: 65px;
    }
  }

  .link-box {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s linear;

    &:hover {
      background: ${({ theme }) => theme.accent};

      a {
        transition: color 0.2s linear;
        color: ${({ theme }) => theme.primary};
      }
    }
  }

  a,
  button {
    padding: 1rem 3rem;
    /* height: 50px; */
    height: 10px;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.4rem;
    background: none;
    border: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.darkgrey};

    &:after {
      height: 2px;
      background: ${({ theme }) => theme.yellow};
      content: "";
      width: 0;
      position: absolute;
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
        width: calc(100% - 65px);
        @media (max-width: 833px) {
          width: calc(100% - 45px);
        }
      }
    }

    @media (max-width: 833px) {
      font-size: 1.6rem;
      padding: 0 20px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
