export const AdaptiveRowReverse: React.FC<IAdaptiveRowRev> = ({
  children
}: IAdaptiveRowRev) => {
  return <div className="adaptive-row_reverse">{children}</div>;
};

interface IAdaptiveRowRev {
  children: React.ReactElement | React.ReactElement[];
}
