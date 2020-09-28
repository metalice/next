import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardHeader as CardFooter, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: 345,
    margin: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

export const MovieListItem = ({ movie }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/${movie.id}`}>
        <CardMedia className={classes.media} image={movie.image} />
        <CardFooter title={movie.title} />
      </Link>
    </Card>
  );
};

export default MovieListItem;
