import React from "react";
import styles from "./WatchMovieStatic.module.css";
const WatchMovieStatic = () => {
  return (
    <div className={styles.watchedMoviesHeader}>
      <h3 className={styles.movieItemTitle}>Movies You Watched</h3>
      <div className={styles.movieItemInfo}>
        <span>2 movies</span>
        <span className={styles.rate}>8.56</span>
        <span className={styles.rate}>9.56</span>
        <span className={styles.runTime}>10 min</span>
      </div>
    </div>
  );
};

export default WatchMovieStatic;
