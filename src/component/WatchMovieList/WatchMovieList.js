import React, { useContext, useEffect, useState } from "react";
import styles from "./WatchMovieList.module.css";
import Loading from "../Loading/Loading";
import WatchedMovieItem from "../WatchedMovieItem/WatchedMovieItem";
import SelectedMovie from "../Context/SelectedMovieContext";

const ApiKey = "2560eeb2";

const WatchMovieList = () => {
  const [isloading, setIsLoading] = useState(false);
  const {dispatch,selectMovie,watchedMovie}=useContext(SelectedMovie)
  const existId = watchedMovie.some((movie) => movie.imdbID === selectMovie);

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
      if (existId === false) {
        fetchMovieDetails();
      }
    },
    [selectMovie]
  );

  return (
    <ul className={styles.movieList}>
      {isloading && <Loading />}
      {!isloading &&
        watchedMovie &&
        watchedMovie.map((watchedMovie) => {
          return (
            <WatchedMovieItem
              key={watchedMovie.imdbID}
              watchedMovie={watchedMovie}
            />
          );
        })}
    </ul>
  );
};

export default WatchMovieList;
