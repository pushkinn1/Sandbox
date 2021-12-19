import React from "react";

type ClickHandler = { handler: () => void } & { type: "click" };

type ButtonClickParams = {
  onClick: (ev: React.MouseEvent<{}>) => void;
} & { type: "btn" };

type LinkParams = {
  url: string;
} & { type: "link" };

/* type AnchorClickParams =
  | {
      url: string;
      target?: "blank";
    }
  | ({
      url: string;
      onClick: (ev: React.MouseEvent<HTMLAnchorElement>) => void;
      dontPreventDefault?: boolean;
    } & { type: "link" }); */

export type ClickableProps =
  | ClickHandler
  | ButtonClickParams
  | (LinkParams & { className?: string });

export const Clickable: React.FC<ClickableProps> = (props) => {
  if (props.type === "click") {
    return <div onClick={props.handler}>{props.children}</div>;
  }
  if (props.type === "btn") {
    return <div onClick={props.onClick}>{props.children}</div>;
  }
  if (props.type === "link") {
    return (
      <a href={props.url} className={props.className ? props.className : ""}>
        {props.children}
      </a>
    );
  }
  return <div></div>;
};
