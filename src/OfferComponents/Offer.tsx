import React from "react";

export const Offer: React.FC<IOffer> = ({
  time,
  num,
  path,
  children,
  img
}: IOffer) => {
  return (
    <div className="offer">
      <div className="offer__path">
        <span className="light-txt">{path}</span>
      </div>
      <div className="offer__body">
        <div className="offer__content">{children}</div>
        <div className="parameters__container">
          <div className="offer__parameters">
            <div className="offer__parameter">
              <div className="parameter__name light-txt">Time</div>
              <div className="parameter__value">{time}</div>
            </div>
            <div className="offer__parameter">
              <div className="parameter__name light-txt">For offer No:</div>
              <div className="parameter__value">
                <span>{num}</span>{" "}
                <img src={img} alt="" className="parameters__img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface IOffer {
  path: string;
  time: string;
  num: number;
  img: string;
  children: React.ReactElement | React.ReactElement[];
}
