import React, { ReactElement } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  href: string;
  activeClassName?: string;
  children: any;
  partiallyActive?: boolean;
  as: string;
}

export const ActiveLink: React.FC<Props> = ({
  href,
  activeClassName,
  partiallyActive,
  children,
  as
}): ReactElement => {
  const router = useRouter();
  const child = React.Children.only(children);
  let className = child.props.className || "";

  if (router.pathname === href && activeClassName) {
    className = `${className} ${activeClassName}`.trim();
  }

  if (router.pathname === "/blog/[post]" && partiallyActive) {
    className = `${className} ${activeClassName}`.trim();
  }

  return (
    <Link href={href} as={as}>
      {React.cloneElement(child, { className })}
    </Link>
  );
};
