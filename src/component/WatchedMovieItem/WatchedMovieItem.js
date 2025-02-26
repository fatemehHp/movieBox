import React from "react";
import styles from './watchedMovieItem.module.css'

const WatchedMovieItem = ({watchedMovie}) => {
  return (
    <li className={styles.movieItem}>
      <img src={watchedMovie.Poster} alt="Watched Movie Poster" className={styles.movieItemImage}/>
      <div className={styles.movieItemInfo}>
        <h3 className={styles.movieItemTitle}>{watchedMovie.Title}</h3>
        <span className={styles.rate}>{watchedMovie.imdbRating}</span>
        <span className={styles.runTime}>{watchedMovie.Runtime}</span>
      </div>
    </li>
  );
};

export default WatchedMovieItem;
