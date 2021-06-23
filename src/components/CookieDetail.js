// MobX
import cookieStore from "../stores/cookieStore";
import { observer } from "mobx-react";

//styles
import { DetailWrapper } from "../styles";

//components
import DeleteButton from "./buttons/DeleteButton";

// Libraries
import { useParams, Redirect } from "react-router-dom";

const CookieDetail = () => {
  const cookieSlug = useParams().cookieSlug;
  const cookie = cookieStore.cookies.find(
    (cookie) => cookie.slug === cookieSlug
  );

  // if the cookie is undefined
  //    redirect to the list page
  if (!cookie) return <Redirect to="/cookies" />;
  return (
    <DetailWrapper>
      <img src={cookie.image} alt={cookie.name} />
      <p>{cookie.name}</p>
      <p>{cookie.description}</p>
      <p>{cookie.price} KD</p>
      <DeleteButton cookieId={cookie.id} />
      <button>Back</button>
    </DetailWrapper>
  );
};

export default observer(CookieDetail);
