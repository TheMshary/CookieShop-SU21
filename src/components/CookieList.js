import cookies from "../cookies";
import CookieItem from "./CookieItem";
import { ListWrapper } from "../styles";

const CookieList = () => {
  const cookieList = cookies.map((cookie) => (
    <CookieItem
      name={cookie.name}
      price={cookie.price}
      image={cookie.image}
      key={cookie.id}
    />
  ));

  return <ListWrapper>{cookieList}</ListWrapper>;
};

export default CookieList;
