import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
}));

const Title = () => {
  const classes = useStyles();
  return <div id="main-title" className={classes.title}>Next Movies</div>;
};

export default Title;
