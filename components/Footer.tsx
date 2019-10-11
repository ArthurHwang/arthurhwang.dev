import styled from "styled-components";
//@ts-ignore
import LogoNodejs from "react-ionicons/lib/LogoNodejs";
//@ts-ignore
import LogoGithub from "react-ionicons/lib/LogoGithub";
//@ts-ignore
import IosRefresh from "react-ionicons/lib/IosRefresh";
//@ts-ignore
import MdInfinite from "react-ionicons/lib/MdInfinite";
//@ts-ignore
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";
//@ts-ignore
import MdHeart from "react-ionicons/lib/MdHeart";

export default function footer() {
  return (
    <StyledFooter>
      <LogoNodejs
        onClick={() => alert("Hi!")}
        fontSize="60px"
        beat={true}
        // shake={true}
        color="#43853d"
      />
      <LogoGithub
        onClick={() => alert("Hi!")}
        fontSize="60px"
        // beat={true}
        shake={true}
        color="#43853d"
      />
      <LogoLinkedin
        onClick={() => alert("Hi!")}
        fontSize="60px"
        beat={true}
        // shake={true}
        color="#43853d"
      />
      <IosRefresh fontSize="60px" color="#347eff" rotate={true} />
      <MdInfinite fontSize="60px" rotate={true} />
      <MdHeart fontSize="60px" color="red" beat={true} />
      &copy;Arthur Hwang - 2019
    </StyledFooter>
  );
}

const StyledFooter = styled("footer")`
  background-color: #eee;
  margin: 0;
`;
