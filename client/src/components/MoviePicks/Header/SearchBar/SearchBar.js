import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { useStoreActions, useStoreState } from "easy-peasy";

import SearchBy from "components/MoviePicks/Header/SearchBar/SearchBy/SearchBy";

const useStyles = makeStyles(() => ({
  main: {
    display: "flex",
    alignItems: "baseline",
    flexDirection: "column",
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const {
    searchOptions: { searchFields },
    searchTerm: { value },
  } = useStoreState(({ searchOptions, searchTerm }) => ({ searchOptions, searchTerm }));
  const { changeSearchTerm } = useStoreActions((state) => state.searchTerm);

  return (
    <div className={classes.main}>
      <TextField fullWidth label="Search a movie..." value={value} onChange={({ target: { value } }) => changeSearchTerm(value)} />
      <div>
        Search By:
        {Object.keys(searchFields).map((el) => (
          <SearchBy key={el} value={el} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
