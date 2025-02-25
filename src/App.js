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

const ApiKey = "2560eeb2";
const initialState = {
  // open 1,2
  closeMovieList: false,
  closeWatchedList: false,
  status: "loading",
  errorMessage: "",
  movieList: [],
  searchInput: "",
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
      return { ...state,searchInput:action.payload  };

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
  } = state;
  // fetchData
  useEffect(function () {
    async function fetchData() {
      try {
        if(searchInput.length<3){
          dispatch({type:"resetData"})
          return
        }
        dispatch({ type: "dataLoading" });
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${ApiKey}&s=${searchInput}`
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
        dispatch({ type: "dataFailed ", payload: err.message });
      }
    }
    fetchData();
  }, [searchInput]);
  return (
    <>
      <SearchContext.Provider value={{searchInput:searchInput,dispatch:dispatch}}>
        <Header />
      </SearchContext.Provider>
      <Main>
        {/* Movie Section */}
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
            ) : status==="resetData"?<p>search movie name</p>:null)}
        </MovieSection>
        {/* Watched Movies Section */}
        <MovieSection>
          <Button dispatch={() => dispatch({ type: "closeWatchedList" })}>
            {closeWatchedList ? "-" : "x"}
          </Button>
          {!closeWatchedList ? <p>name</p> : null}
        </MovieSection>
      </Main>
    </>
  );
};

export default App;
