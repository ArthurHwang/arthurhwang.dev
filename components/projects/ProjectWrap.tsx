import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactElement } from "react";

interface Props {
  children: any;
}

export const ProjectWrap: React.FC<Props> = ({ children }): ReactElement => {
  return (
    <ProjectWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled("div")`
  height: auto;
  padding: 4rem 2rem;
  position: relative;

  &.bg-grey {
    background: ${({ theme }) => theme.lightgrey};
  }

  h3,
  h4 {
    margin: 0;
    border-bottom: 1px solid #ebeaeb;
    text-transform: uppercase;
  }

  .buttons {
    padding: 2rem 4rem 0;
    display: flex;
    width: auto;
    flex-wrap: wrap;
    justify-content: space-evenly;

    button {
      margin: 1rem;
    }
  }

  .badges {
    display: flex;
    padding: 2rem 2rem;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ebeaeb;
    border-bottom: 1px solid #ebeaeb;
    flex-wrap: wrap;

    img {
      width: 85px;
    }

    @media (max-width: 768px) {
      padding: 1rem 0;

      img {
        margin: 1rem;
      }
    }
  }

  .project-title {
    display: inline-block;
    font-size: 3rem;
    text-transform: uppercase;
    padding: 1rem 0;

    @media (max-width: 490px) {
      font-size: 2.4rem;
    }
  }

  /* FIX FOR CAROUSEL */
  * {
    min-height: 0;
    min-width: 0;
  }

  .inner-slider {
    grid-area: carousel;

    @media (max-width: 490px) {
      margin-right: -2rem;
      margin-left: -2rem;
    }

    img {
      min-height: 399px;

      @media (max-width: 1000px) {
        min-height: initial;
      }
      @media (max-width: 490px) {
        min-height: 176px;
        max-height: 399px;
      }
    }

    .slick-slide {
      @media (max-width: 1000px) {
        min-height: initial;
      }
    }

    .vertical-wrapper {
      display: flex !important;
      justify-content: space-evenly;
      width: 100%;

      .vertical {
        width: 27%;
        height: 100%;

        @media (max-width: 490px) {
          width: 50%;
        }
      }

      @media (max-width: 490px) {
        padding: 0 1rem;
      }
    }

    .slick-dots {
      bottom: -39px;

      &:after {
        content: "-swipe or drag images to scroll-";
        display: block;
        position: relative;
        bottom: 5px;
        font-size: 1rem;
        color: ${({ theme }) => theme.secondaryAccent};
      }

      .slick-active button:before {
        color: ${({ theme }) => theme.accent};
      }

      li button:before {
        font-size: 20px;
      }

      @media (max-width: 768px) {
        bottom: -45px;
      }

      @media (max-width: 490px) {
        bottom: -40px;
      }
    }

    .slick-prev {
      z-index: 0;
      left: 2%;
      top: initial;
      bottom: -30px;
    }

    .slick-next {
      z-index: 0;
      right: 2%;
      top: initial;
      bottom: -30px;
    }

    .slick-prev:before,
    .slick-next:before {
      color: ${({ theme }) => theme.accent};
    }
  }

  .commits {
    margin-top: 2rem;
    grid-area: commits;

    @media (max-width: 1400px) {
      margin-top: 0;
    }
  }

  .accomplishments {
    grid-area: accomplishments;

    ul {
      padding-left: 1.5rem;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 92%;
      margin-top: 1rem;
      margin-bottom: 1rem;

      li {
        font-size: 1.4rem;
        text-indent: -17px;
        text-align: left;
        line-height: 1.6;

        @media (max-width: 490px) {
          text-align: justify;
          text-indent: -17px;
        }

        &:before {
          content: "-";
          text-indent: -10px;
          font-weight: 800;
          font-size: 1.8rem;
          color: ${({ theme }) => theme.secondaryAccent};
          margin-right: 1rem;
        }
      }
    }

    @media (max-width: 1400px) {
      margin-top: 4rem;
    }
  }

  .split-grid-left {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr 380px;
    grid-template-areas:
      "carousel accomplishments"
      "commits accomplishments";

    @media (max-width: 1400px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, auto);
      grid-gap: 0;
      grid-template-areas:
        "carousel"
        "accomplishments"
        "commits";
    }
  }

  .split-grid-right {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: 1fr 380px;
    grid-template-areas:
      "accomplishments carousel"
      "accomplishments commits";

    @media (max-width: 1400px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, auto);
      grid-gap: 0;
      grid-template-areas:
        "carousel"
        "accomplishments"
        "commits";
    }
  }
`;

const ContentWrapper = styled("div")`
  max-width: 1300px;
  max-height: 1090.28px;
  min-height: 1090.28px;
  height: 1090.28px;
  margin: 0 auto;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.25);
  padding: 1rem 2rem 2rem;

  @media (max-width: 1400px) {
    max-height: initial;
    min-height: initial;
    height: initial;
  }
`;
