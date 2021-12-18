import React from "react";

export const HeaderNavbar: React.FC<HeaderNavbarProps> = (
  props: HeaderNavbarProps
) => {
  return <nav className="header__nav">{props.children}</nav>;
};

interface HeaderNavbarProps {
  children: React.ReactElement | React.ReactElement[];
}
