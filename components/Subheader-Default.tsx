import styled from "styled-components";
import { ReactElement } from "react";

interface Props {
  children: any;
}

export const SubheaderDefault: React.FC<Props> = ({
  children
}): ReactElement => {
  return (
    <ContentWrap>
      <TextWrap> {children}</TextWrap>
    </ContentWrap>
  );
};

const TextWrap = styled("div")`
  position: relative;
  bottom: 5px;
  strong {
    color: ${({ theme }) => theme.primary};
  }
`;

const ContentWrap = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  h1,
  h2 {
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
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.lightgrey};
    padding: 0 3rem;

    @media (max-width: 490px) {
      font-size: 1.4rem;
    }
  }

  padding: 2rem;
`;
