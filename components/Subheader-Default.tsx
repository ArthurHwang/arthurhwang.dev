import styled from "styled-components";

interface Props {
  children: any;
}

export const SubheaderDefault: React.FC<any> = ({ children }: Props) => {
  return (
    <ContentWrap>
      <TextWrap>{children}</TextWrap>
    </ContentWrap>
  );
};

const TextWrap = styled("div")``;

const ContentWrap = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  h1,
  h2 {
    margin: 0;
    text-align: center;
  }

  h1 {
    font-size: 4rem;
    color: ${({ theme }) => theme.primary};
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.lightgrey};
  }

  padding: 2rem;
`;
