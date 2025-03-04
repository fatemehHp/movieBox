import React from "react";
import styles from "./WatchMovieStatic.module.css";
const WatchMovieStatic = ({movieWatched}) => {
  return (
    <div className={styles.watchedMoviesHeader}>
      <h3 className={styles.movieItemTitle}>Movies You Watched :</h3>
      <div className={styles.movieItemInfo}>
        <span>{movieWatched} movies</span>
      </div>
    </div>
  );
};

export default WatchMovieStatic;
