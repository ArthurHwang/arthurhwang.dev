import styled from "styled-components";
import { ActiveLink as Link } from "./ActiveLink";

export const Nav: React.FC<any> = () => {
  return (
    <StyledNav>
      <Link activeClassName="active" href="/">
        <div className="link-box">
          <a>Home</a>
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
        color: ${({ theme }) => theme.secondary};
      }
    }
  }

  .active {
    background: ${({ theme }) => theme.accent};
    a:after {
      height: 2px;
      background: ${({ theme }) => theme.yellow};
      content: "";
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
    font-weight: 700;
    font-size: 1.2rem;
    background: none;
    border: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.grey};

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
        width: calc(100% - 30px);
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
