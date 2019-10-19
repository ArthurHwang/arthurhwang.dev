import React from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// interface Props {
//   href: string;
//   activeClassName: string;
//   children: any;
//   partiallyActive?: boolean;
// }

export const Error: React.FC<any> = ({ touched, message }) => {
  if (!touched) {
    return <div className="form-message invalid">&nbsp;</div>;
  }
  if (message) {
    return <div className="form-message invalid">{message}</div>;
  }
  return <div className="form-message valid">all good</div>;
};
