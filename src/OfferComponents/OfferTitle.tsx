export const OfferTitle: React.FC<IOfferTitle> = ({
  img,
  text
}: IOfferTitle) => {
  return (
    <div className="offer__label">
      <img src={img} alt="" className="offer__img" />
      <div className="offer__title">{text}</div>
    </div>
  );
};

interface IOfferTitle {
  img: string;
  text: string;
}
