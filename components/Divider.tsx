import styled from "styled-components";

interface Props {
  invert: boolean;
}

export const Divider: React.FC<Props> = ({ invert = false }) => {
  return (
    <ContentWrap invert={invert}>
      <div className="divider div-transparent div-dot" />
    </ContentWrap>
  );
};

const ContentWrap = styled("div")<{ invert: boolean }>`
  padding: 4rem;
  /* height: 100px; */

  @media (max-width: 650px) {
    padding: 6rem;
  }

  @media (max-width: 490px) {
    padding: 1.5rem;
  }
  width: 100%;
  .divider {
    position: relative;
    /* margin-top: 90px; */
    height: 1px;
    display: block;
    width: 100%;
  }

  .div-transparent:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    width: 620px;
    height: 1px;
    background-image: linear-gradient(
      to right,
      transparent,
      rgb(255, 255, 255),
      transparent
    );

    @media (max-width: 490px) {
      width: 325px;
    }
  }
  .div-dot:after {
    content: "";
    position: absolute;
    /* z-index: 1; */
    top: -9px;
    left: calc(50% - 9px);
    width: 18px;
    height: 18px;
    background-color: ${({ theme }) => theme.yellow};
    border: 1px solid rgb(48, 49, 51);
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.secondary},
      0 0 0 4px ${({ theme }) => theme.secondary};
  }
`;
