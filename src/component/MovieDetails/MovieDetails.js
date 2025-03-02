import styles from "./MovieDetails.module.css";
import SelectedMovie from "../Context/SelectedMovieContext";
import { useContext, useEffect } from "react";

const MovieDetails = () => {
  const { movieDetail, dispatch } = useContext(SelectedMovie);
  useEffect(
    function () {
      document.title = movieDetail.Title;
      return () => {
        document.title = "MovieBox";
      };
    },
    [movieDetail]
  );
  // keydown
  useEffect(
    function () {
      function escapeButton(e) {
        if (e.code === "Escape") {
          dispatch({ type: "deleteDetail" });
        }
      }
      document.addEventListener("keydown",escapeButton);
      return () => {
        document.removeEventListener("keydown",escapeButton);
      };
    },
    [dispatch]
  );
  if (!movieDetail) return <p className={styles.error}>فیلمی یافت نشد!</p>;

  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movieDetail.Poster}
        alt={movieDetail.Title}
      />

      <div className={styles.details}>
        <h1 className={styles.title}>
          {movieDetail.Title} ({movieDetail.Year})
        </h1>
        <p className={styles.genre}>{movieDetail.Genre}</p>
        <p className={styles.plot}>{movieDetail.Plot}</p>

        <div className={styles.info}>
          <p>
            <strong>Director:</strong> {movieDetail.Director}
          </p>
          <p>
            <strong>Writer:</strong> {movieDetail.Writer}
          </p>
          <p>
            <strong>Actors:</strong> {movieDetail.Actors}
          </p>
          <p>
            <strong>Country:</strong> {movieDetail.Country}
          </p>
          <p>
            <strong>Language:</strong> {movieDetail.Language}
          </p>
          <p>
            <strong>Runtime:</strong> {movieDetail.Runtime}
          </p>
          <p>
            <strong>Rated:</strong> {movieDetail.Rated}
          </p>
        </div>

        <div className={styles.ratings}>
          <p className={styles.imdb}>
            ⭐ imdbRating : {movieDetail.imdbRating}
          </p>
          <p className={styles.seasons}>
            📺 totalSeasons: {movieDetail.totalSeasons}
          </p>
          <p className={styles.awards}>🏆 {movieDetail.Awards}</p>
        </div>

        <button
          className={styles.backButton}
          onClick={() => dispatch({ type: "deleteDetail" })}
        >
          back
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
