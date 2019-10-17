import styled from "styled-components";

interface Props {
  children: any;
}

export const SubheaderDefault: React.FC<Props> = ({ children }) => {
  return (
    <ContentWrap>
      <TextWrap> {children}</TextWrap>
    </ContentWrap>
  );
};

const TextWrap = styled("div")``;

const ContentWrap = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  position: relative;
  bottom: 5px;

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
      font-size: 2.4rem;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.lightgrey};
  }

  padding: 2rem;
`;
