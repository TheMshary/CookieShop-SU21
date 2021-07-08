import { useParams } from "react-router";
import bakeryStore from "../stores/bakeryStore";
import cookieStore from "../stores/cookieStore";
import { DetailWrapper } from "../styles";
import CookieList from "./CookieList";
import { observer } from "mobx-react";

const BakeryDetail = () => {
  const { bakerySlug } = useParams();
  const bakery = bakeryStore.bakeries.find(
    (bakery) => bakery.slug === bakerySlug
  );
  const cookies = bakery.cookies.map((cookie) =>
    cookieStore.getCookieById(cookie.id)
  );
  return (
    <>
      <DetailWrapper>
        <h4>{bakery.name}</h4>
        <img src={bakery.image} alt={bakery.name} />
      </DetailWrapper>
      <CookieList cookies={cookies} bakery={bakery} />
    </>
  );
};

export default observer(BakeryDetail);
