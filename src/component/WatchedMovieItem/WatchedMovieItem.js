import React from "react";
import styles from './watchedMovieItem.module.css'

const WatchedMovieItem = () => {
  return (
    <li className={styles.movieItem}>
      <img src="" alt="Watched Movie Poster" className={styles.movieItemImage}/>
      <div className={styles.movieItemInfo}>
        <h3 className={styles.movieItemTitle}>Watched Movie Title</h3>
        <span className={styles.rate}>8.56</span>
        <span className={styles.rate}>9.56</span>
        <span className={styles.runTime}>10 min</span>
      </div>
    </li>
  );
};

export default WatchedMovieItem;
