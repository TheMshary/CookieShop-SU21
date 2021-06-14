//styles
import { CookieWrapper } from "../styles";

const CookieItem = (props) => {
  return (
    <CookieWrapper onClick={() => props.setCookie(props.cookie)}>
      <img alt={props.cookie.name} src={props.cookie.image} />
      <p>{props.cookie.name}</p>
      <p className="cookie-price">{props.cookie.price} KD</p>
    </CookieWrapper>
  );
};

export default CookieItem;
