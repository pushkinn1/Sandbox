import React from "react";
import { INavLink } from "./types";

export const NavLink = ({ text, variant }: INavLink) => {
  switch (variant) {
    case "regular":
      return (
        <div className="nav__li nav__li_regular">
          <span className="text">{text}</span>
        </div>
      );
    case "hot":
      return (
        <div className="nav__li nav__li_hot">
          <span role="img">🔥</span> <span className="text">{text}</span>
        </div>
      );
    case "dotted":
      return <div></div>;
  }
};
