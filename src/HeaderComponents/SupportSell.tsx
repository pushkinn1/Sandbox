import React from "react";
import arrow from "../imgs/arrow.svg";

export const SupportSell: React.FC<ISupportSell> = ({
  variant,
  text
}: ISupportSell) => {
  switch (variant) {
    case "regular":
      return (
        <div className="support__sell support__sell_regular">
          <span className="light-txt support__light-txt">{text}</span>
        </div>
      );
    case "menu":
      return (
        <div className="support__sell support__sell_menu">
          <span className="light-txt support__light-txt">{text}</span>
          <img src={arrow} alt="" className="support__img" />
        </div>
      );
  }
};

interface ISupportSell {
  variant: "regular" | "menu";
  text: string;
}
