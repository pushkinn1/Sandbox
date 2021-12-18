import React from "react";
import { INavLink } from "./types";
/* import arrow from "./imgs/arrow.svg";
 */
export const NavLink = ({ text, variant }: INavLink) => {
  switch (variant) {
    case "regular":
      return (
        <div className="nav__li nav__li_regular">
          <span className="nav__text">{text}</span>
        </div>
      );
    case "hot":
      return (
        <div className="nav__li nav__li_hot">
          <span role="img">🔥</span> <span className="nav__text">{text}</span>
        </div>
      );
    case "dotted":
      return (
        <div className="nav__li nav__li_dotted">
          <div className="nav__text">{text}</div>
          <div className="nav__dots">
            <div className="nav__dot"></div>
            <div className="nav__dot"></div>
            <div className="nav__dot"></div>
          </div>
        </div>
      );
    default:
      return <div></div>;
  }
};
