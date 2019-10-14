import styled from "styled-components";

export const SubheaderHome: React.FC<any> = () => {
  return (
    <ContentWrap>
      <TextWrap>
        <h1>
          Hello<span className="yellow">,</span> I'm{" "}
          <span className="red">Arthur Hwang</span>.
          <br />
          I'm a full<span className="yellow">-</span>stack web developer.
        </h1>
      </TextWrap>
      <div className="content">
        <div className="content__container">
          <p className="content__container__text">I Specialize in</p>
          <ul className="content__container__list">
            <li className="content__container__list__item green">Javascript</li>
            <li className="content__container__list__item red">ReactJS</li>
            <li className="content__container__list__item yellow">NodeJS</li>
            <li className="content__container__list__item green">CODE</li>
          </ul>
        </div>
      </div>
    </ContentWrap>
  );
};

const TextWrap = styled("div")`
  margin: 0 auto;
  width: 578px;
  position: relative;
  bottom: 30px;

  @media (max-width: 480px) {
    bottom: 25px;
  }
`;

const ContentWrap = styled("div")`
  padding: 0 2rem;
  width: 100%;
  min-height: 350px;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    min-height: 220px;
  }

  h1,
  h2,
  p,
  li {
    color: ${({ theme }) => theme.black};
    margin: 0;
    text-align: center;
  }

  h1 {
    font-size: 4rem;
    line-height: 1.6;
    font-weight: 700;
    text-align: center;

    @media (max-width: 650px) {
      font-size: 3rem;
    }

    @media (max-width: 480px) {
      font-size: 2.4rem;
    }
  }

  .yellow {
    color: ${({ theme }) => theme.yellow};
  }
  .green {
    color: ${({ theme }) => theme.accent};
  }
  .red {
    color: ${({ theme }) => theme.secondaryAccent};
  }

  .content {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    font-size: 2rem;
    line-height: 40px;
    color: #ecf0f1;

    @media (max-width: 480px) {
      font-size: 1.6rem;
      bottom: 15px;
    }

    &__container {
      font-weight: 600;
      overflow: hidden;
      height: 40px;
      padding: 0 40px;

      @media (max-width: 480px) {
        padding: 0 20px;
      }

      &:before {
        content: "[";
        left: 0;
      }

      &:after {
        content: "]";
        position: absolute;
        right: 0;
      }

      &:after,
      &:before {
        position: absolute;
        top: -2px;
        color: ${({ theme }) => theme.accent};
        font-size: 32px;
        line-height: 40px;
        -webkit-animation-name: opacity;
        -webkit-animation-duration: 2s;
        -webkit-animation-iteration-count: infinite;
        animation-name: opacity;
        animation-duration: 2s;
        animation-iteration-count: infinite;

        @media (max-width: 480px) {
          top: -1px;
        }
      }

      &__text {
        display: inline;
        float: left;
        margin: 0;
      }

      &__list {
        margin-top: 0;
        padding-left: 129px;
        text-align: left;
        list-style: none;
        -webkit-animation-name: change;
        -webkit-animation-duration: 10s;
        -webkit-animation-iteration-count: infinite;
        animation-name: change;
        animation-duration: 10s;
        animation-iteration-count: infinite;

        @media (max-width: 480px) {
          padding-left: 105px;
        }

        &__item {
          line-height: 40px;
          margin: 0;
        }
      }
    }
  }

  @-webkit-keyframes opacity {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  @-webkit-keyframes change {
    0%,
    12.66%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    16.66%,
    29.32% {
      transform: translate3d(0, -25%, 0);
    }
    33.32%,
    45.98% {
      transform: translate3d(0, -50%, 0);
    }
    49.98%,
    62.64% {
      transform: translate3d(0, -75%, 0);
    }
    66.64%,
    79.3% {
      transform: translate3d(0, -50%, 0);
    }
    83.3%,
    95.96% {
      transform: translate3d(0, -25%, 0);
    }
  }

  @-o-keyframes opacity {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  @-o-keyframes change {
    0%,
    12.66%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    16.66%,
    29.32% {
      transform: translate3d(0, -25%, 0);
    }
    33.32%,
    45.98% {
      transform: translate3d(0, -50%, 0);
    }
    49.98%,
    62.64% {
      transform: translate3d(0, -75%, 0);
    }
    66.64%,
    79.3% {
      transform: translate3d(0, -50%, 0);
    }
    83.3%,
    95.96% {
      transform: translate3d(0, -25%, 0);
    }
  }

  @-moz-keyframes opacity {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  @-moz-keyframes change {
    0%,
    12.66%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    16.66%,
    29.32% {
      transform: translate3d(0, -25%, 0);
    }
    33.32%,
    45.98% {
      transform: translate3d(0, -50%, 0);
    }
    49.98%,
    62.64% {
      transform: translate3d(0, -75%, 0);
    }
    66.64%,
    79.3% {
      transform: translate3d(0, -50%, 0);
    }
    83.3%,
    95.96% {
      transform: translate3d(0, -25%, 0);
    }
  }

  @keyframes opacity {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes change {
    0%,
    12.66%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    16.66%,
    29.32% {
      transform: translate3d(0, -25%, 0);
    }
    33.32%,
    45.98% {
      transform: translate3d(0, -50%, 0);
    }
    49.98%,
    62.64% {
      transform: translate3d(0, -75%, 0);
    }
    66.64%,
    79.3% {
      transform: translate3d(0, -50%, 0);
    }
    83.3%,
    95.96% {
      transform: translate3d(0, -25%, 0);
    }
  }
`;

// const Content = styled("div")``;
