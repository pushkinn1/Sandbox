export const HeaderSell: React.FC<HeaderSellProps> = (
  props: HeaderSellProps
) => {
  return <div className="header__sell">{props.children}</div>;
};

interface HeaderSellProps {
  children: JSX.Element | JSX.Element[];
}
