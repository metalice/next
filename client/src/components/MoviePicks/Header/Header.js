import React from "react";
import { makeStyles } from "@material-ui/core";

import SearchBar from "components/MoviePicks/Header/SearchBar/SearchBar";
import Title from "components/MoviePicks/Header/Title/Title";

const useStyles = makeStyles(() => ({
  main: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    width: "100vw",
    marginTop: 50
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Title />
      <SearchBar />
    </div>
  );
};
