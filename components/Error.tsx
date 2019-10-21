import React from "react";
import { FaCheck } from "react-icons/fa";

export const Error: React.FC<any> = ({ touched, message }) => {
  if (!touched) {
    return <div className="form-message invalid">&nbsp;</div>;
  }
  if (message) {
    return <div className="form-message invalid">{message}</div>;
  }
  return (
    <div className="form-message valid">
      <FaCheck />
    </div>
  );
};
