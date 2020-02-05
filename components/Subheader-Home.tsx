// import styled, { keyframes } from 'styled-components';
import styled from "styled-components";
// import { FaReact, FaNodeJs, FaCode, FaJs } from 'react-icons/fa';
// import { Divider } from './Divider';
import { ReactElement } from "react";

export const SubheaderHome: React.FC = (): ReactElement => {
  return (
    <ContentWrap>
      <h4>hi</h4>
      {/* <TextWrap>
        <h1>
          <div className="first-of-type">
            Hello<span className="yellow">,</span>
          </div>{' '}
          <div className="second-of-type">
            I'm <span className="red">Arthur Hwang</span>
            <span className="green">.</span>
          </div>
          <br />
          I'm a Fullstack Web Developer
          <span className="green">.</span>
        </h1>
      </TextWrap>
      <Divider invert={true} />
      <div className="content">
        <div className="content__container">
          <p className="content__container__text">I Specialize in</p>
          <ul className="content__container__list">
            <li className="content__container__list__item green">
              JavaScript{' '}
              <FaJs
                style={{ color: '#f7df1e', position: 'relative', top: '2.3px' }}
              />
            </li>
            <li className="content__container__list__item red">
              ReactJS{' '}
              <FaReact
                style={{ color: '#61dafb', position: 'relative', top: '2.3px' }}
              />
            </li>
            <li className="content__container__list__item yellow">
              NodeJS{' '}
              <FaNodeJs
                style={{ color: '#43853d', position: 'relative', top: '2.3px' }}
              />
            </li>
            <li className="content__container__list__item green">
              CODE <FaCode style={{ position: 'relative', top: '2.3px' }} />
            </li>
          </ul>
        </div>
      </div> */}
    </ContentWrap>
  );
};

// const showup = keyframes`
//   0% { opacity: 0; }
//   20% { opacity: 1; }
//   80% { margin-bottom: 1; }
//   100% { margin-bottom: 1; }
// `;
// const slidein = keyframes`
//   0% { margin-left: -800px; }
//   20% { margin-left: -800px; }
//   35% { margin-left: 0px; }
//   100% { margin-left: 0px; }
// `;
// const revealTablet = keyframes`
//   0% { opacity: 0; width: 0px; }
//   20% { opacity: 1; width: 0px; }
//   30% { width: 260px; }
//   80% { opacity: 1; }
//   100% { opacity: 1; width: 260px; }
// `;
// const revealMobile = keyframes`
//   0% { opacity: 0; width: 0px; }
//   20% { opacity: 1; width: 0px; }
//   30% { width: 210px; }
//   80% { opacity: 1; }
//   100% { opacity: 1; width: 210px; }
// `;
// const reveal = keyframes`
//   0% { opacity: 0; width: 0px; }
//   20% { opacity: 1; width: 0px; }
//   30% { width: 355px; }
//   80% { opacity: 1; }
//   100% { opacity: 1; width: 355px; }
// `;

// const TextWrap = styled('div')`
//   margin: 0 auto;

//   div {
//     display: inline-block;
//     overflow: hidden;
//     white-space: nowrap;
//     color: white;
//   }

//   .first-of-type {
//     animation: ${showup} 7s normal forwards;
//   }

//   .second-of-type {
//     width: 0px;
//     animation: ${reveal} 7s normal forwards;

//     @media (max-width: 650px) {
//       animation: ${revealTablet} 7s normal forwards;
//     }

//     @media (max-width: 490px) {
//       animation: ${revealMobile} 7s normal forwards;
//     }

//     span {
//       margin-left: -355px;
//       animation: ${slidein} 7s normal forwards;
//       color: white;
//     }
//   }

//   @media (max-width: 490px) {
//     margin-bottom: 1.5rem;
//   }
// `;

const ContentWrap = styled("div")`
  padding: 4rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  span.yellow,
  .yellow {
    color: ${({ theme }) => theme.yellow};
  }
  span.green,
  .green {
    color: ${({ theme }) => theme.accent};
  }
  span.red,
  .red {
    color: ${({ theme }) => theme.secondaryAccent};
  }

  @media (max-width: 490px) {
    min-height: 220px;
  }

  h1,
  h2,
  p,
  li {
    color: ${({ theme }) => theme.primary};
    margin: 0;
    text-align: center;
  }

  h1 {
    font-size: 4rem;
    line-height: 1.6;
    font-weight: 700;
    text-align: center;
    width: 100%;

    @media (max-width: 650px) {
      font-size: 3rem;
    }

    @media (max-width: 490px) {
      white-space: nowrap;
      font-size: 2.4rem;
    }
  }

  .content {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    font-size: 2rem;
    line-height: 40px;
    color: #ecf0f1;

    @media (max-width: 490px) {
      font-size: 1.6rem;
      bottom: 10px;
    }

    &__container {
      font-weight: 600;
      overflow: hidden;
      height: 40px;
      padding: 0 40px 0 50px;

      @media (max-width: 490px) {
        padding: 0 20px;
      }

      &:before {
        content: "[";
        left: 0;
        @media (max-width: 490px) {
          left: -3px;
        }
      }

      &:after {
        content: "]";
        position: absolute;
        right: 9px;

        @media (max-width: 490px) {
          right: 13px;
        }
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

        @media (max-width: 490px) {
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
        padding-left: 140px;
        text-align: left;
        list-style: none;
        -webkit-animation-name: change;
        -webkit-animation-duration: 10s;
        -webkit-animation-iteration-count: infinite;
        animation-name: change;
        animation-duration: 10s;
        animation-iteration-count: infinite;

        @media (max-width: 490px) {
          padding-left: 105px;
        }

        &__item {
          line-height: 40px;
          margin: 0;
          width: 140px;

          @media (max-width: 490px) {
            width: 120px;
          }
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
