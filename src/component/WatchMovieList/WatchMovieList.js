import React, { useEffect, useState } from "react";
import styles from "./WatchMovieList.module.css";
import Loading from "../Loading/Loading";
import WatchedMovieItem from "../WatchedMovieItem/WatchedMovieItem";

const ApiKey = "2560eeb2";

const WatchMovieList = ({ selectMovie, dispatch, watchedMovie }) => {
  const [isloading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchMovieDetails() {
        setIsLoading(true);
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${ApiKey}&i=${selectMovie}`
        );
        if (!response.ok) {
          throw new Error("have problem");
        }
        const data = await response.json();
        dispatch({ type: "watchmovie", payload: data });
        setIsLoading(false);
      }
      fetchMovieDetails();
    },
    [selectMovie]
  );

  return (
    <ul className={styles.movieList}>
      {isloading && <Loading />}
      {!isloading && watchedMovie && <WatchedMovieItem watchedMovie={watchedMovie} />}
    </ul>
  );
};

export default WatchMovieList;
