import React from "react";

export const HeaderIconComplex: React.FC<IComplexIcon> = ({
  first_img,
  sec_img,
  balance,
  course
}: IComplexIcon) => {
  return (
    <div className="header__icon header__icon_complex">
      <img src={first_img} alt="" className="icon__owner" />
      <div className="icon__balance">{balance}</div>
      <div className="icon__course">
        <div className="course__txt">{course}</div>
        <img src={sec_img} alt="" className="icon__currency" />
      </div>
    </div>
  );
};

interface IComplexIcon {
  first_img: string;
  sec_img: string;
  balance: string;
  course: string;
}
