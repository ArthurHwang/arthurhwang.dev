import styled, { keyframes } from "styled-components";
import { ReactElement } from "react";

export const LoadingDots: React.FC = (): ReactElement => {
  return (
    <DotWrapper>
      <Dot delay="0s" />
      <Dot delay=".1s" />
      <Dot delay=".2s" />
    </DotWrapper>
  );
};

const DotWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px; }
  100% { margin-bottom: 0; }
`;

const Dot = styled("div")<{ delay: string }>`
  background-color: ${({ theme }) => theme.accent};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;
