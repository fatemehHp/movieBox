import React from 'react'
import styles from './movieItem.module.css'
const MovieItem = ({movieList}) => {
  return (
    <li className={styles.movieItem}>
      <img src={movieList.Poster}alt="Movie Poster" className={styles.movieItemImage} />
      <div className={styles.movieItemInfo}>
        <h3 className={styles.movieItemTitle}>{movieList.Title}</h3>
        <h6 className={styles.movieItemDate}>
          <span>🎬</span>
          {movieList.Year}
        </h6>
      </div>
    </li>
  )
}

export default MovieItem