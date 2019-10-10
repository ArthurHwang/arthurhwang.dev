import React from "react";
import styled from "styled-components";
import LogoNodejs from "react-ionicons/lib/LogoNodejs";

export default function footer() {
  return (
    <StyledFooter>
      <LogoNodejs
        onClick={() => alert("Hi!")}
        fontSize="60px"
        beat={true}
        color="#43853d"
      />
      &copy;Arthur Hwang - 2019
    </StyledFooter>
  );
}

const StyledFooter = styled("footer")`
  background-color: #eee;
  margin: 0;
`;
