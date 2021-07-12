import { useState } from "react";
import { observer } from "mobx-react";

//stores
import bakeryStore from "../stores/bakeryStore";
import authStore from "../stores/authStore";

import { Title, AiFillPlusCircleStyled } from "../styles";

// Components
import BakeryItem from "./BakeryItem";
import SearchBar from "./SearchBar";
import BakeryModal from "./modals/BakeryModal";

const BakeryList = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const bakeries = bakeryStore.bakeries
    .filter((bakery) => bakery.name.toLowerCase().includes(query.toLowerCase()))
    .map((bakery) => <BakeryItem bakery={bakery} />);
  return (
    <div className="container">
      <Title>Bakeries</Title>
      <SearchBar setQuery={setQuery} />
      {authStore.user && (
        <AiFillPlusCircleStyled size="2em" onClick={openModal} />
      )}

      <BakeryModal isOpen={isOpen} closeModal={closeModal} />
      {bakeries}
    </div>
  );
};

export default observer(BakeryList);
