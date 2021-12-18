export const Support: React.FC<ISupport> = ({ children }: ISupport) => {
  return <div className="header__support">{children}</div>;
};

interface ISupport {
  children: React.ReactElement | React.ReactElement[];
}
