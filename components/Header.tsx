import { Nav } from "./Nav";
import styled from "styled-components";
import Link from "next/link";

export const Header: React.FC<any> = () => {
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link href="/">
            <a>Arthur Hwang</a>
          </Link>
        </Logo>
        <Nav />
      </div>
    </StyledHeader>
  );
};

const Logo = styled("h1")`
  font-size: 2.5rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;

  a {
    border-radius: 5px;
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.black};
    text-transform: uppercase;
    text-decoration: none;
  }

  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled("header")`
  /* font-family: "Montserrat"; */
  font-weight: 600;
  background-color: #eee;

  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;

    .me {
      padding: 1rem;
      width: 150px;
    }
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${({ theme }) => theme.lightgrey};
  }
`;
