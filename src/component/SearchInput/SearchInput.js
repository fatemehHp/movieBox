import React, {  useContext } from "react";
import styles from "./searchInput.module.css";
import SearchContext from "../Context/ContextSearch";

const SearchInput = () => {
  const { searchInput, dispatch } = useContext(SearchContext);
  return (
    <input
      type="text"
      className={styles.navbarSearch}
      placeholder="Search movies..."
      value={searchInput}
      onChange={(e) =>
        dispatch({ type: "onchangeQuery", payload: e.target.value })
      }
    />
  );
};

export default SearchInput;
