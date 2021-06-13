//styles
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="Search by cookie name"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
