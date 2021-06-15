//styles
import { CookieWrapper } from "../styles";

//buttons
import DeleteButton from "./buttons/DeleteButton";

const CookieItem = (props) => {
  return (
    <CookieWrapper>
      <img
        onClick={() => props.setCookie(props.cookie)}
        alt={props.cookie.name}
        src={props.cookie.image}
      />
      <p>{props.cookie.name}</p>
      <p className="cookie-price">{props.cookie.price} KD</p>
      <DeleteButton
        cookieDelete={props.cookieDelete}
        cookieId={props.cookie.id}
        setCookie={props.setCookie}
      />
    </CookieWrapper>
  );
};

export default CookieItem;
