import React from "react";

export const OfferTutor: React.FC<IOfferTutor> = ({
  text,
  img
}: IOfferTutor) => {
  return (
    <div className="offer__tutor">
      <img src={img} alt="" className="tutor__img" />
      <div className="tutor__txt">{text}</div>
    </div>
  );
};

interface IOfferTutor {
  text: string;
  img: string;
}
