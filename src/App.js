import React, { useEffect, useReducer } from "react";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import MovieSection from "./component/MovieSection/MovieSection";
import MovieList from "./component/MovieList/MovieList";
import WatchedMovieItem from "./component/WatchedMovieItem/WatchedMovieItem";
import MovieItem from "./component/MovieItem/MovieItem";
import WatchMovieStatic from "./component/WatchMovieStatic/WatchMovieStatic";
import Button from "./component/Button/Button";
import Error from "./component/Error/Error";
import "./index.css";
import Loading from "./component/Loading/Loading";

const ApiKey="2560eeb2"
const initialState = {
  // open 1,2
  closeMovieList: false,
  closeWatchedList:false,
  status: "loading",
  movieList:[]
};
function reducer(state, action) {
  switch (action.type) {
    case "closeMovieList":
      return { ...state, closeMovieList: !state.closeMovieList };
    case "closeWatchedList":
      return { ...state, closeWatchedList: !state.closeWatchedList };
    case "dataLoading":
      return { ...state, status:"dataLoading"};
      case "resiveData":
        return { ...state, movieList:action.payload,status:"resiveData"};
    case "dataFeild":
      return { ...state, status:"dataFeild"};
  
    default:
      throw new Error("not found");
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {closeMovieList, closeWatchedList,status,movieList } = state;
  // fetchData
  useEffect(function(){
    async function fetchData() {
      try{
        dispatch({type:"dataLoading"})
        const response=await fetch(`http://www.omdbapi.com/?apikey=${ApiKey}&s=interstellar`)
        if (!response.ok){
          throw new Error("can not found page")
        }
        const data=await response.json()
        dispatch({type:"resiveData",payload:data.Search})
      }
      catch(er){
        dispatch({type:"dataFeild"})
      }
    }
    fetchData()
  },[])
  return (
    <>
      <Header />
      <Main>
        {/* Movie Section */}
        <MovieSection>
          <Button dispatch={()=>dispatch({type:"closeMovieList"})}>x</Button>
        
              {
                !closeMovieList && (
                  status==="dataLoading"?<Loading/>:
                  status==="dataFeild"?<Error/>:
                  status==="resiveData" ? <MovieList movieList={movieList}/>:null

                )
              }
        </MovieSection>
        {/* Watched Movies Section */}
        <MovieSection>
          <Button dispatch={()=>dispatch({type:"closeWatchedList"})}>x</Button>
          {!closeWatchedList ? (
<p>name</p>
          ) : null}
        </MovieSection>
      </Main>
    </>
  );
};

export default App;
