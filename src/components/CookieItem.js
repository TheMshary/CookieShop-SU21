//styles
import { CookieWrapper } from "../styles";

//buttons
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

// Libraries
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//stores
import authStore from "../stores/authStore";

const CookieItem = (props) => {
  return (
    <CookieWrapper>
      <Link to={`/cookies/${props.cookie.slug}`}>
        <img alt={props.cookie.name} src={props.cookie.image} />
      </Link>
      <p>{props.cookie.name}</p>
      <p className="cookie-price">{props.cookie.price} KD</p>
      {authStore.user && (
        <>
          <UpdateButton cookie={props.cookie} />
          <DeleteButton cookieId={props.cookie.id} />
        </>
      )}
    </CookieWrapper>
  );
};

export default observer(CookieItem);
