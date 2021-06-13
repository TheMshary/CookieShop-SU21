//cookie data
import cookies from "../cookies";

//useSate
import { useState } from "react";

//components
import CookieItem from "./CookieItem";
import SearchBar from "./SearchBar";

//styles
import { ListWrapper } from "../styles";

const CookieList = (props) => {
  const [query, setQuery] = useState("");

  const cookieList = cookies
    .filter((cookie) => cookie.name.toLowerCase().includes(query.toLowerCase()))
    .map((cookie) => (
      <CookieItem cookie={cookie} key={cookie.id} setCookie={props.setCookie} />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{cookieList}</ListWrapper>
    </div>
  );
};

export default CookieList;
