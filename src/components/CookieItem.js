import { CookieWrapper } from "../styles";

const CookieItem = (props) => {
  return (
    <CookieWrapper>
      <img alt={props.name} src={props.image} />
      <p>{props.name}</p>
      <p className="cookie-price">{props.price} KD</p>
    </CookieWrapper>
  );
};

export default CookieItem;
