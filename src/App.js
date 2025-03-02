import React, { createContext, useEffect, useReducer } from "react";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import MovieSection from "./component/MovieSection/MovieSection";
import MovieList from "./component/MovieList/MovieList";
import SearchContext from "./component/Context/ContextSearch";
import Button from "./component/Button/Button";
import ErrorMessage from "./component/Error/ErrorMessage";
import "./index.css";
import Loading from "./component/Loading/Loading";
import WatchMovieStatic from "./component/WatchMovieStatic/WatchMovieStatic";
import WatchMovieList from "./component/WatchMovieList/WatchMovieList";
import SelectedMovie from "./component/Context/SelectedMovieContext";
import MovieDetails from "./component/MovieDetails/MovieDetails";

const ApiKey = "2560eeb2";
const initialState = {
  // open 1,2
  closeMovieList: false,
  closeWatchedList: false,
  status: "loading",
  errorMessage: "",
  movieList: [],
  searchInput: "",
  selectMovie: "",
  watchedMovie: [],
  movieDetail: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "closeMovieList":
      return { ...state, closeMovieList: !state.closeMovieList };
    case "closeWatchedList":
      return { ...state, closeWatchedList: !state.closeWatchedList };
    case "dataLoading":
      return { ...state, status: "dataLoading" };
    case "receiveData":
      return { ...state, movieList: action.payload, status: "receiveData" };
    case "resetData":
      return { ...state, movieList: [], status: "resetData" };
    case "dataFailed ":
      return { ...state, status: "dataFailed ", errorMessage: action.payload };
    case "onchangeQuery":
      return { ...state, searchInput: action.payload };
    case "selectMovie":
      return {
        ...state,
        selectMovie: action.payload,
      };
    case "watchmovie":
      return {
        ...state,
        watchedMovie: [...state.watchedMovie, action.payload],
      };
    case "movieDetail":
      return { ...state, movieDetail: action.payload };
    case "deleteDetail":
      return { ...state, movieDetail: null};

    default:
      throw new Error("not found");
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    closeMovieList,
    closeWatchedList,
    status,
    movieList,
    errorMessage,
    searchInput,
    selectMovie,
    watchedMovie,
    movieDetail,
  } = state;
  const movieListLength = movieList.length;
  const movieWatched = watchedMovie.length;
  // fetchData
  useEffect(
    function () {
      const newAbrotController = new AbortController();
      const { signal } = newAbrotController;
      async function fetchData() {
        try {
          if (searchInput.length < 3) {
            dispatch({ type: "resetData" });
            return;
          }
          dispatch({ type: "dataLoading" });
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=${ApiKey}&s=${searchInput}`,
            { signal }
          );
          if (!response.ok) {
            throw new Error("can not found page");
          }
          const data = await response.json();
          if (data.Response === "False") {
            throw new Error("Movie not found!");
          }
          dispatch({ type: "receiveData", payload: data.Search });
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            dispatch({ type: "dataFailed ", payload: err.message });
          }
        }
      }
      fetchData();
      return () => newAbrotController.abort();
    },
    [searchInput]
  );
  return (
    <>
      <SearchContext.Provider
        value={{
          searchInput: searchInput,
          dispatch: dispatch,
          movieListLength,
        }}
      >
        <Header />
      </SearchContext.Provider>
      <Main>
        {/* Movie Section */}
        <SelectedMovie.Provider value={{ dispatch }}>
          <MovieSection>
            <Button dispatch={() => dispatch({ type: "closeMovieList" })}>
              {closeMovieList ? "-" : "x"}
            </Button>

            {!closeMovieList &&
              (status === "dataLoading" ? (
                <Loading />
              ) : status === "dataFailed " ? (
                <ErrorMessage errorMessage={errorMessage} />
              ) : status === "receiveData" ? (
                <MovieList movieList={movieList} />
              ) : status === "resetData" ? (
                <p>search movie name</p>
              ) : null)}
          </MovieSection>
        </SelectedMovie.Provider>
        {/* Watched Movies Section */}
        <MovieSection>
          <Button dispatch={() => dispatch({ type: "closeWatchedList" })}>
            {closeWatchedList ? "-" : "x"}
          </Button>
          {!closeWatchedList && selectMovie && (
            <SelectedMovie.Provider
              value={{ dispatch, selectMovie, watchedMovie, movieDetail }}
            >
              {movieDetail ? (
                <MovieDetails />
              ) : (
                <>
                  <WatchMovieStatic movieWatched={movieWatched}/>
                  <WatchMovieList />
                </>
              )}
            </SelectedMovie.Provider>
          )}
        </MovieSection>
      </Main>
    </>
  );
};

export default App;
