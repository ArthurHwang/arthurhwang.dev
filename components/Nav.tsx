import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default () => (
  <StyledNav data-test="nav">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/projects">
      <a>Projects</a>
    </Link>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
  </StyledNav>
);

const StyledNav = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 1.3rem;
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.black};
    /* font-weight: 5000; */
    @media (max-width: 700px) {
      font-size: 1.4rem;
      padding: 0 10px;
    }

    &:after {
      height: 1px;
      background: red;
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
      /* @media (max-width: 700px) {
        width: calc(100% - 10px);
      } */
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid ${({ theme }) => theme.lightgrey};
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

/* &:before {
      content: "";
      width: 2px;
      background: ${({theme}) => themelightgrey};
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    } */
