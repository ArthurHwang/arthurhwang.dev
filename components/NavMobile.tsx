import styled from "styled-components";
import IosApps from "react-ionicons/lib/IosApps";
import { useState } from "react";

export const NavMobile: React.FC<any> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    return setMenuOpen(!menuOpen);
  };

  return (
    <NavMobileWrapper>
      <StyledNavMobile>
        <IconWrapper rotate={menuOpen ? "true" : "false"}>
          <IosApps
            color={menuOpen ? "red" : "black"}
            fontSize="40px"
            onClick={handleClick}
            
            className="menu-icon"
          />
        </IconWrapper>
        {menuOpen && (
          <StyledNavMenu className={menuOpen ? "fade" : "fadeOut"}>
            blah blah
          </StyledNavMenu>
        )}
      </StyledNavMobile>
    </NavMobileWrapper>
  );
};

const IconWrapper = styled("div")`
  //@ts-ignore
  color: ${props => console.log(props)};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  svg {
    position: relative;
    right: 1.5rem;
    //@ts-ignore
    color: ${props => (props.rotate === "true" ? `red` : "black")};
    //@ts-ignore
    transform: ${props => (props.rotate === "true" ? `rotate(180deg)` : "")};
    transition: transform 0.5s;
  }
`;

const StyledNavMobile = styled("nav")`
  height: 100%;
  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledNavMenu = styled("div")`
  position: fixed;
  left: 0;
  top: 75px;
  width: 100vw;
  background-color: ${({ theme }) => theme.lightgrey};
  height: calc(100vh - 75px);
`;

const NavMobileWrapper = styled.div`
  .fade {
    animation: fadein 0.8s;
    -moz-animation: fadein 0.8s; /* Firefox */
    -webkit-animation: fadein 0.8s; /* Safari and Chrome */
    -o-animation: fadein 0.8s; /* Opera */
  }
  .fadeOut {
    animation: fadeout 2s;
    -moz-animation: fadeout 2s; /* Firefox */
    -webkit-animation: fadeout 2s; /* Safari and Chrome */
    -o-animation: fadeout 2s; /* Opera */
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @-moz-keyframes fadeout {
    /* Firefox */
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @-webkit-keyframes fadeout {
    /* Safari and Chrome */
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @-o-keyframes fadeout {
    /* Opera */
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    80% {
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;
