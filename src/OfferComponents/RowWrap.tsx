import React from "react";

export const RowWrap: React.FC<IRowWrap> = ({ children }: IRowWrap) => {
  return <div className="adaptive-row_wrap">{children}</div>;
};

interface IRowWrap {
  children: React.ReactElement | React.ReactElement[];
}
