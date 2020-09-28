import React from "react";
import useSWR from "swr";

import { Header } from "components/MoviePicks/Header/Header";
import { MovieList } from "components/MoviePicks/MovieList/MovieList";

import { fetcher } from "utils/communication";

export const MoviePicks = () => {
  const { data, error } = useSWR("/movies", fetcher);
  return (
    <div>
      <Header />
      <MovieList data={data} />
      {error && <div>NO DATA</div>}
    </div>
  );
};

export default MoviePicks;
