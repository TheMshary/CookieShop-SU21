import { CookieWrapper } from "../styles";

const CookieItem = (props) => {
  return (
    <CookieWrapper>
      <img
        alt={props.cookie.name}
        src={props.cookie.image}
        onClick={() => props.setCookie(props.cookie)}
      />
      <p>{props.cookie.name}</p>
      <p className="cookie-price">{props.cookie.price} KD</p>
    </CookieWrapper>
  );
};

export default CookieItem;
