import React, {  useContext }  from 'react'
import styles from './movieItem.module.css'
import SelectedMovie from "../Context/SelectedMovieContext";

const MovieItem = ({movieList}) => {
  const {dispatch}=useContext(SelectedMovie)

  return (
    <li className={styles.movieItem} onClick={()=>dispatch({type:"selectMovie",payload:movieList.imdbID})}>
      <img src={movieList.Poster} alt="Movie Poster" className={styles.movieItemImage} />
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