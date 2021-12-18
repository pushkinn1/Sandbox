import React from "react";

export const OfferMark: React.FC<IOfferMark> = ({ text }: IOfferMark) => {
  return <div className="offer__mark">{text}</div>;
};

interface IOfferMark {
  text: string;
}
