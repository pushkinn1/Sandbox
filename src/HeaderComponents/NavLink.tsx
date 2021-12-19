import React from "react";
import { Clickable } from "../AppComponents/Clickable";

export type NavLinkProps = {
  variant: string;
  text: string;
  pageUrl: string;
};

export const NavLink: React.FC<NavLinkProps> = (props) => {
  switch (props.variant) {
    case "regular":
      return (
        <Clickable
          className="nav__li"
          type="link"
          url="https://rjzaworski.com/2018/10/typescript-event-handlers"
        >
          <div className="nav__li nav__li_regular">
            <span className="nav__text">{props.text}</span>
          </div>
        </Clickable>
      );
    case "hot":
      return (
        <Clickable type="link" url={props.pageUrl} className="nav__li">
          <div className="nav__li nav__li_hot">
            <span role="img">🔥</span>{" "}
            <span className="nav__text">{props.text}</span>
          </div>
        </Clickable>
      );
    case "dotted":
      return (
        <Clickable type="link" url={props.pageUrl} className="nav__li">
          <div className="nav__li nav__li_dotted">
            <div className="nav__text">{props.text}</div>
            <div className="nav__dots">
              <div className="nav__dot"></div>
              <div className="nav__dot"></div>
              <div className="nav__dot"></div>
            </div>
          </div>
        </Clickable>
      );
    default:
      return <div></div>;
  }
};
