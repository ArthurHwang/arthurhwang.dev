import styled from "styled-components";
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
            I like coding<span>_</span>
          </h2>
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

          <div className="badges-2">
            <a href="https://github.com/ArthurHwang" className="link">
              <FaGithub className="icon" /> <span>Github</span>
            </a>

            <a href="https://www.linkedin.com/in/arthur-hwang" className="link">
              <FaLinkedin className="icon" /> <span>LinkedIn</span>
            </a>
            <a href="https://www.facebook.com/arthur.hwang.9" className="link">
              <FaFacebook className="icon" /> <span>Facebook</span>
            </a>
            <a title="" href="https://www.twitter.com/" className="link">
              <FaTwitter className="icon" /> <span>Twitter</span>
            </a>
            <a href="mailto:mail@arthurhwang.dev" className="link">
              <IoMdMail className="icon" /> <span>Email</span>
            </a>
            <a
              href="mailto:mail@
              .dev"
              className="link"
            >
              <FaClipboardList className="icon" /> <span>CV</span>
            </a>
          </div>
        </InnerRight>
      </StyledIntro>
    </ContentWrap>
  );
};

const ContentWrap = styled("div")`
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
  span {
    color: ${({ theme }) => theme.accent};
  }

  h2 {
    margin-top: 0;
  }
`;

const InnerLeft = styled("div")``;

const InnerRight = styled("div")`
  .badges-2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 63px - 19.92px);

    a.link {
      position: relative;
      bottom: 9px;

      @media (max-width: 490px) {
        &:nth-child(even) {
          padding-left: calc(100% - 63%);
        }
      }
    }

    .icon {
      position: relative;
      top: 8px;
      font-size: 3rem;
      margin-right: 0.9rem;
    }

    @media (max-width: 490px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .badges {
    display: flex;
    flex-direction: column;
    padding-top: 0.2rem;

    & a {
      margin-bottom: 2rem;
      display: flex;

      @media (max-width: 490px) {
        &:nth-child(even) {
          padding-left: calc(100% - 66%);
        }
      }
    }

    .icon {
      position: relative;
      font-size: 3rem;
      margin-right: 1rem;
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

  @media (max-width: 490px) {
    grid-template-columns: initial;
    grid-template-rows: 1fr auto;
    grid-gap: initial;
  }
`;
