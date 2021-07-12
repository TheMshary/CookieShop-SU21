// MobX
import { observer } from "mobx-react";

//useSate
import { useState } from "react";

//components
import CookieItem from "./CookieItem";
import SearchBar from "./SearchBar";
import CookieModal from "./modals/CookieModal";
//styles
import { ListWrapper, AiFillPlusCircleStyled } from "../styles";

//stores
import authStore from "../stores/authStore";

const CookieList = ({ cookies, bakery }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const cookieList = cookies
    .filter((cookie) => cookie.name.toLowerCase().includes(query.toLowerCase()))
    .map((cookie) => <CookieItem cookie={cookie} key={cookie.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {authStore.user && (
        <AiFillPlusCircleStyled size="2em" onClick={openModal} />
      )}
      <CookieModal isOpen={isOpen} closeModal={closeModal} bakery={bakery} />
      <ListWrapper>{cookieList}</ListWrapper>
    </div>
  );
};

export default observer(CookieList);
