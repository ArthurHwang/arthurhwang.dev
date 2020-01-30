import React, { ReactElement } from "react";
import { FaCheck } from "react-icons/fa";

interface Props {
  touched: any;
  message: any;
}

export const Error: React.FC<Props> = ({ touched, message }): ReactElement => {
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
