import React from "react";
import "../styles.css";

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">{props.children}</div>
    </header>
  );
};

interface HeaderProps {
  children: JSX.Element | JSX.Element[];
}
