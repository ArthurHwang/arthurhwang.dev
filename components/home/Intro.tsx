// import { Fragment } from "react";
// import { Query } from "react-apollo";
// import LogoNodejs from "react-ionicons/lib/LogoNodejs";
// import { NextPage } from "next";
import styled from "styled-components";
// import Head from "next/head";
// import gql from "graphql-tag";
// import LogoNodejs from "react-ionicons/lib/LogoNodejs";
// import Fonts from "../util/Fonts";
// import { withApollo } from "../lib/apollo";
// import { useLayoutEffect } from "react";
// import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";
import Link from "next/link";

import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaClipboardList,
  FaTwitter
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Intro: React.FC<any> = () => {
  return (
    <ContentWrap>
      <StyledIntro>
        <InnerLeft>
          <h2>
            I like to build things with code<span>_</span>
          </h2>
          <p></p>
          <p>
            As a natural tinkerer, I love to dig out the "why" of things. Being
            a self taught developer has taught me to not fear what I don't know,
            instead tackle it with sheer determination and an unwavering will.
            Having the privilege everyday to produce elegant and performant
            software solutions makes me happy.
          </p>
          <p>
            I am drawn to creating performance driven websites that are fully
            responsive using best practices that work on a wide range of
            devices. I take tremendous care to ensure that the project I am
            working on is not only scalable but also maintainable. Please visit
            my{" "}
            <Link href="/blog">
              <a className="link">Blog</a>
            </Link>
          </p>
          <p>
            I am usually learning about new things such as data structures and
            algorithms to further improve my skills. Or testing out new hot
            frameworks such as apollo / graphql
          </p>
        </InnerLeft>

        <InnerRight>
          <h2>
            Links<span>_</span>
          </h2>

          <div className="badges">
            <a
              // title="Github"
              href="https://github.com/ArthurHwang"
              className="link"
            >
              <FaGithub className="icon" /> Github
            </a>

            <a
              title=""
              href="https://www.linkedin.com/in/arthur-hwang"
              className="link"
            >
              <FaLinkedin className="icon" /> LinkedIn
            </a>
            <a
              title=""
              href="https://www.facebook.com/arthur.hwang.9"
              className="link"
            >
              <FaFacebook className="icon" /> Facebook
            </a>
            <a title="" href="https://www.twitter.com/" className="link">
              <FaTwitter className="icon" /> Twitter
            </a>
            <a
              // title="Email"
              href="mailto:mail@arthurhwang.dev"
              className="link"
            >
              <IoMdMail
                // style={{ position: "relative", top: "6px" }}
                className="icon"
              />{" "}
              Email
            </a>
            <a
              // title="Resume"
              href="mailto:mail@arthurhwang.dev"
              className="link"
            >
              <FaClipboardList
                // style={{ position: "relative", top: "3px" }}
                className="icon"
              />{" "}
              CV
            </a>
          </div>
        </InnerRight>
        {/* <Query query={GET_REPOSITORIES_OF_CURRENT_USER}>
          {({ data, loading }: Query) => {
            if (loading || !data) {
              return <div>Loading ...</div>;
            }
            return <div>{JSON.stringify(data)}</div>;
          }}
        </Query> */}
      </StyledIntro>
    </ContentWrap>
  );
};

const ContentWrap = styled("div")`
  display: flex;
  justify-content: center;
  padding: 4rem;
  span {
    color: ${({ theme }) => theme.accent};
    font-weight: 800;
  }

  h2 {
    margin-top: 0;
  }
`;

const InnerLeft = styled("div")`
  /* padding-left: 12rem; */
`;

const InnerRight = styled("div")`
  .badges {
    display: flex;
    flex-direction: column;
    padding-top: 0.2rem;

    & a {
      /* vertical-align: middle; */
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      /* align-items: center; */
      /* height: 30px; */
      @media (max-width: 490px) {
        &:nth-child(even) {
          padding-left: calc(100% - 66%);
        }
      }
    }

    .icon {
      position: relative;
      /* top: 4px; */
      font-size: 3rem;
      margin-right: 1rem;
    }

    .icon-text {
      /* position: relative;
      bottom: 5px; */
      /* bottom: 5px; */
    }

    @media (max-width: 490px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const StyledIntro = styled("div")`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 6rem;
  max-width: 800px;
  /* padding: 0 40rem; */

  @media (max-width: 490px) {
    grid-template-columns: initial;
    grid-template-rows: 1fr auto;
    grid-gap: initial;
  }
`;
