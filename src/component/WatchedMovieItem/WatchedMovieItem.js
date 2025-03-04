import React, { useContext, useState } from "react";
import styles from "./watchedMovieItem.module.css";
import SelectedMovie from "../Context/SelectedMovieContext";
const WatchedMovieItem = ({ watchedMovie }) => {
  const { dispatch } = useContext(SelectedMovie);
  return (
    <li
      className={styles.movieItem}
      onClick={() => dispatch({ type: "movieDetail", payload: watchedMovie })}
    >
      <img
        src={watchedMovie.Poster}
        alt="Watched Movie Poster"
        className={styles.movieItemImage}
      />
      <div className={styles.movieItemInfo}>
        <h3 className={styles.movieItemTitle}>
          Title:
          <span> {watchedMovie.Title}</span>
        </h3>
        <span className={styles.rate}>
          Rating:
          <h3> {watchedMovie.imdbRating}</h3>
        </span>
        <span className={styles.runTime}>
          Runtime:<h3>{watchedMovie.Runtime}</h3>
        </span>
      </div>
    </li>
  );
};

export default WatchedMovieItem;
