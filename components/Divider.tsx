import styled from "styled-components";

interface Props {
  invert: boolean;
  color?: string;
}

export const Divider: React.FC<Props> = ({
  invert = false,
  color = "yellow"
}) => {
  return (
    <ContentWrap invert={invert} color={color}>
      <div className="divider div-transparent div-dot" />
    </ContentWrap>
  );
};

const ContentWrap = styled("div")<{ invert: boolean; color: string }>`
  padding: 4rem;
  width: 100%;

  .divider {
    position: relative;
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
    top: -9px;
    left: calc(50% - 9px);
    width: 18px;
    height: 18px;
    background-color: ${props => {
      switch (props.color) {
        case "green":
          return props.theme.accent;
        case "red":
          return props.theme.secondaryAccent;
        case "yellow":
          return props.theme.yellow;
        case "blue":
          return props.theme.blue;
      }
    }};
    border: 1px solid rgb(48, 49, 51);
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.secondary},
      0 0 0 4px ${({ theme }) => theme.secondary};
  }

  @media (max-width: 650px) {
    padding: 6rem;
  }

  @media (max-width: 490px) {
    padding: 1.5rem;
  }
`;
