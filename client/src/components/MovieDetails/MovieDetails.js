import React from "react";
import { Button, makeStyles, Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import renderHTML from "react-render-html";
import { isEmpty } from "lodash";
import { useParams, Link } from "react-router-dom";
import useSWR from "swr";

import { fetcher } from "utils/communication";

const useStyles = makeStyles(() => ({
  main: {
    margin: 50,
  },
  movie: {
    display: "flex",
    boxShadow: "none",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  details: {
    display: "flex",
    flexDirection: "row",
  },
  content: { margin: 20 },
  title: {
    marginBottom: 20,
  },
  info: {
    marginBottom: 30,
    fontSize: 16,
    fontWeight: "bold",
  },
  cover: {
    width: 500,
    height: 500,
    backgroundSize: "contain",
  },
  noMovie: {
    display: "flex",
    justifyContent: "center",
  },
}));

const MovieDetails = () => {
  const { id } = useParams();
  const { data } = useSWR(`/movies/${id}`, fetcher);
  const [movie] = data || [];
  const classes = useStyles();

  return (
    <div className={classes.main}>
      {isEmpty(data) ? (
        <div className={classes.noMovie}>Cannot find movie</div>
      ) : (
        <>
          <div className={classes.buttonContainer}>
            <Button variant="outlined" component={Link} to="/" color="primary" startIcon={<KeyboardBackspaceIcon />}>
              Back to all
            </Button>
          </div>
          <Card className={classes.movie}>
            <div className={classes.details}>
              <CardMedia className={classes.cover} image={movie.largeimage} />
              <CardContent className={classes.content}>
                <Typography className={classes.title} component="h5" variant="h5">
                  {movie.title}
                </Typography>
                <Typography className={classes.info}>
                  {movie.released} | {movie.runtime} | {movie.rating}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {renderHTML(movie.synopsis)}
                </Typography>
              </CardContent>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
