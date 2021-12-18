export const HeaderIconSimple: React.FC<ISimpleIcon> = ({
  img,
  handleClick,
  handleMouseDown
}: ISimpleIcon) => {
  return (
    <div
      className="header__icon_simple header__icon"
      onMouseDown={handleMouseDown}
    >
      <img src={img} alt="" />
    </div>
  );
};

interface ISimpleIcon {
  img: string;
  handleMouseDown?: () => void;
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
}
