import React from "react";
import "./styles.css";

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return <div className="wrapper header__wrapper">{props.children}</div>;
};

interface HeaderProps {
  children: JSX.Element | JSX.Element[];
}
