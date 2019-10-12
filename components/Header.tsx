import { Nav } from "./Nav";
import styled from "styled-components";
import Link from "next/link";

export const Header: React.FC<any> = () => {
  return (
    <StyledHeader>
      <div className="bar">
        <Link href="/">
          <div className="hover-box">
            <StyledLogo>
              <img src="/static/me.jpg" />
              <div className="text-wrapper">
                <p className="name">Arthur Hwang</p>
                <p className="title">Software Engineer</p>
              </div>
            </StyledLogo>
          </div>
        </Link>
        <Nav />
      </div>
    </StyledHeader>
  );
};

const StyledLogo = styled("div")`
  font-size: 2.5rem;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 65px 1fr;
  grid-template-rows: 65px;
  margin: 0.5rem 0.5rem 0.5rem 2rem;

  img {
    width: 100%;
    border-radius: 50%;
  }

  p {
    color: ${({ theme }) => theme.black};
    text-transform: uppercase;
    padding: 0 0 0 1.5rem;
    margin: 0;
  }

  p.name {
    font-size: 2.5rem;
    position: relative;
    bottom: 2px;
  }

  p.title {
    font-size: 1.6rem;
    color: #b3b3b3;
    position: relative;
    bottom: 10px;
    font-style: italic;
    font-weight: 600;
  }
`;

const StyledHeader = styled("header")`
  font-weight: 600;
  background-color: #eee;

  .hover-box {
    cursor: pointer;
    padding-right: 2rem;
    transition: background 0.2s linear;

    &:hover {
      background: ${({ theme }) => theme.linkBG};

      .text-wrapper p {
        transition: color 0.2s linear;
        color: ${({ theme }) => theme.link};
      }
    }
  }

  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;

    .me {
      padding: 1rem;
      width: 150px;
    }
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${({ theme }) => theme.lightgrey};
  }
`;
