//styles
import { CookieWrapper } from "../styles";

//buttons
import DeleteButton from "./buttons/DeleteButton";

// Libraries
import { Link } from "react-router-dom";

const CookieItem = (props) => {
  return (
    <CookieWrapper>
      <Link to={`/cookies/${props.cookie.slug}`}>
        <img alt={props.cookie.name} src={props.cookie.image} />
      </Link>
      <p>{props.cookie.name}</p>
      <p className="cookie-price">{props.cookie.price} KD</p>
      <DeleteButton cookieId={props.cookie.id} />
    </CookieWrapper>
  );
};

export default CookieItem;
