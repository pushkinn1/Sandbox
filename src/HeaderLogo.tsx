export const HeaderLogo: React.FC<ImageProps> = (props: ImageProps) => {
  return (
    <div className="header__logo">
      <img src={props.url} alt={props.alt} />
    </div>
  );
};

interface ImageProps {
  url: string;
  alt: string;
}
