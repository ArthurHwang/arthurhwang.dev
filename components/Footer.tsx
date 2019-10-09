import React from "react";
import LogoNodejs from "react-ionicons/lib/LogoNodejs";

export default () => {
  return (
    <div>
      <p>
        {" "}
        <LogoNodejs
          onClick={() => alert("Hi!")}
          fontSize="60px"
          beat={true}
          color="#43853d"
        />
        &copy;Arthur Hwang - 2019
      </p>
    </div>
  );
};
