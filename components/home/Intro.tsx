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
            inste
          </p>
          <p>
            I am drawn to creating performance driven websites that are fully
            responsiv my{" "}
            <Link href="/blog">
              <a className="link">Blog</a>
            </Link>
          </p>
        </InnerLeft>

        <InnerRight>
          <h2>
            Links<span>_</span>
          </h2>

          <div className="badges-2">
            <a
              href="https://github.com/ArthurHwang"
              target="_blank"
              rel="noopener"
              className="link"
            >
              <FaGithub className="icon" /> <span>Github</span>
            </a>

            <a
              href="https://www.linkedin.com/in/arthur-hwang"
              target="_blank"
              rel="noopener"
              className="link"
            >
              <FaLinkedin className="icon" /> <span>LinkedIn</span>
            </a>
            <a
              href="https://www.facebook.com/arthur.hwang.9"
              target="_blank"
              rel="noopener"
              className="link"
            >
              <FaFacebook className="icon" /> <span>Facebook</span>
            </a>
            <a
              title=""
              href="https://twitter.com/ArthurHwang"
              target="_blank"
              rel="noopener"
              className="link"
            >
              <FaTwitter className="icon" /> <span>Twitter</span>
            </a>
            <a
              href="mailto:mail@arthurhwang.dev"
              target="_blank"
              rel="noopener"
              className="link"
            >
              <IoMdMail className="icon" /> <span>Email</span>
            </a>
            <a
              href="mailto:mail@
              .dev"
              className="link"
              target="_blank"
              rel="noopener"
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
