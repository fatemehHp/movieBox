import React from "react";
import styles from './movieList.module.css'
import MovieItem from "../MovieItem/MovieItem";


const MovieList = ({ movieList }) => {

  return <ul className={styles.movieList}>
{
movieList.map((movie)=>{
  return <MovieItem movieList={movie} key={movie.imdbID}/>
})
}
  </ul>;
};

export default MovieList;
