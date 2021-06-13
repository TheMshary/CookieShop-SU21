import { DetailWrapper } from "../styles";

const CookieDetail = (props) => {
  return (
    <DetailWrapper>
      <img src={props.cookie.image} alt={props.cookie.name} />
      <p>{props.cookie.name}</p>
      <p>{props.cookie.description}</p>
      <p>{props.cookie.price}</p>
    </DetailWrapper>
  );
};

export default CookieDetail;
