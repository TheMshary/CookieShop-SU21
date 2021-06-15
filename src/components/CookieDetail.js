//styles
import { DetailWrapper } from "../styles";

//components
import DeleteButton from "./buttons/DeleteButton";

const CookieDetail = (props) => {
  return (
    <DetailWrapper>
      <img src={props.cookie.image} alt={props.cookie.name} />
      <p>{props.cookie.name}</p>
      <p>{props.cookie.description}</p>
      <p>{props.cookie.price} KD</p>
      <DeleteButton
        cookieDelete={props.cookieDelete}
        cookieId={props.cookie.id}
        setCookie={props.setCookie}
      />
      <button onClick={() => props.setCookie(null)}>Back</button>
    </DetailWrapper>
  );
};

export default CookieDetail;
