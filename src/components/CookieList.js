// MobX
import cookieStore from "../stores/cookieStore";
import { observer } from "mobx-react";

//useSate
import { useState } from "react";

//components
import CookieItem from "./CookieItem";
import SearchBar from "./SearchBar";

//styles
import { ListWrapper } from "../styles";

const CookieList = () => {
  const [query, setQuery] = useState("");

  const cookieList = cookieStore.cookies
    .filter((cookie) => cookie.name.toLowerCase().includes(query.toLowerCase()))
    .map((cookie) => <CookieItem cookie={cookie} key={cookie.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{cookieList}</ListWrapper>
    </div>
  );
};

export default observer(CookieList);
