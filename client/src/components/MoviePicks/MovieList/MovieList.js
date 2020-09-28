import React, { useEffect, useState } from "react";
import { useStoreState } from "easy-peasy";

import MovieListItem from "components/MoviePicks/MovieList/MovieListItem/MovieListItem";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  listContainer: { display: "inline-flex", flexFlow: "wrap", justifyContent: "center", margin: 50 },
}));

export const MovieList = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const classes = useStyles();
  const {
    searchOptions: { searchFields, checked },
    searchTerm: { value },
  } = useStoreState(({ searchOptions, searchTerm }) => ({ searchOptions, searchTerm }));

  useEffect(() => {
    data && setFilteredData(data.filter((movie) => movie[searchFields[checked]].toLowerCase().includes(value.toLowerCase())));
  }, [value, checked, searchFields, data]);

  return (
    <div className={classes.listContainer}>
      {filteredData?.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
