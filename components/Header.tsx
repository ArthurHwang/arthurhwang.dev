import { Nav } from "./Nav";
import styled from "styled-components";
import Link from "next/link";
import { NavMobile } from "./NavMobile";

export const Header: React.FC<any> = () => {
  return (
    <StyledHeader>
      <div className="bar">
        <Link href="/">
          <div className="hover-box">
            <StyledLogo>
              <div className="logo-img" />
              <div className="text-wrapper">
                <p className="name">Arthur Hwang</p>
                <p className="title">FullStack Web Developer</p>
              </div>
            </StyledLogo>
          </div>
        </Link>
        <Nav />
        <NavMobile />
      </div>
    </StyledHeader>
  );
};

const StyledLogo = styled("div")`
  font-size: 2.5rem;
  position: relative;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 50px;
  margin: 0.5rem 0.5rem 0.5rem 2rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
  }

  .logo-img {
    width: 100%;
    height: 100%;
    background-image: url("/static/me.jpg");
    background-position: 1px 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.accent};
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
    bottom: 5px;
    color: ${({ theme }) => theme.black};

    @media (max-width: 413px) {
      font-size: 1.8rem;
      bottom: initial;
      top: 2px;
    }
  }

  p.title {
    font-size: 1.4rem;
    color: #fe4a49;
    position: relative;
    bottom: 20px;
    font-style: italic;
    font-weight: 600;

    @media (max-width: 413px) {
      font-size: 1.2rem;
      bottom: initial;
      bottom: 7px;
    }
  }
`;

const StyledHeader = styled("header")`
  font-weight: 600;
  z-index: 1;
  background: ${({ theme }) => theme.primary};
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);

  .hover-box {
    cursor: pointer;
    padding-right: 2rem;
    transition: background 0.2s linear;
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
  }

  @media (max-width: 768px) {
    position: fixed;
    width: 100%;
    top: 0;
  }
`;
