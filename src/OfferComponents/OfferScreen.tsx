import React from "react";

export const OfferScreen: React.FC<IOfferScreen> = ({
  children
}: IOfferScreen) => {
  return <div className="wrapper offer__wrapper">{children}</div>;
};

interface IOfferScreen {
  children: React.ReactElement | React.ReactElement[];
}
