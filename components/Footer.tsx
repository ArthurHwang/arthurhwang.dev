import styled from "styled-components";
import LogoNodejs from "react-ionicons/lib/LogoNodejs";
import LogoGithub from "react-ionicons/lib/LogoGithub";
import IosRefresh from "react-ionicons/lib/IosRefresh";
import MdInfinite from "react-ionicons/lib/MdInfinite";
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";
import MdHeart from "react-ionicons/lib/MdHeart";

export const Footer: React.FC<any> = () => {
  return (
    <StyledFooter>
      <LogoNodejs
        onClick={() => alert("Hi!")}
        fontSize="60px"
        beat={true}
        color="#43853d"
        style={{ zIndex: "-1" }}
      />
      <LogoGithub
        onClick={() => alert("Hi!")}
        fontSize="60px"
        shake={true}
        color="#43853d"
      />
      <LogoLinkedin
        onClick={() => alert("Hi!")}
        fontSize="60px"
        beat={true}
        color="#43853d"
      />
      <IosRefresh fontSize="60px" color="#347eff" rotate={true} />
      <MdInfinite fontSize="60px" rotate={true} />
      <MdHeart fontSize="60px" color="red" beat={true} />
      &copy;Arthur Hwang - 2019
    </StyledFooter>
  );
};

const StyledFooter = styled("footer")`
  background-color: ${({ theme }) => theme.lightgrey};
  margin: 0;
  display: flex;
  justify-content: space-between;
`;
