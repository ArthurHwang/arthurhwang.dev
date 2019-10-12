import styled from "styled-components";
import IosMenu from "react-ionicons/lib/IosMenu";

export const NavMobile: React.FC<any> = () => {
  return (
    <StyledNavMobile>
      <IosMenu fontSize="40px" />
    </StyledNavMobile>
  );
};

const StyledNavMobile = styled("nav")`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    /* justify-self: flex-end; */
    position: relative;
    right: 1.5rem;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
