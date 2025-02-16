import React from "react";
import Header from "./component/Header/Header";

const App = () => {
  return (
    <>
  <Header/>
      <main>
        <div className="container">
         <div className="box movie">
          <button>show</button>
          <ul className="list-box">
            <li className="movie-item">
              <img src="" alt="" />
              <div className="movie-item-info">
                <h3 className="movieTitle">mpvie title</h3>
                <h6 className="moviePublishDate">
                  <span>icon</span>
                  2012
                </h6>
              </div>
            </li>
          </ul>
         </div>
         <div className="box watchMovie">
         <button>show</button>
          <div className="watchedMovieHeader">
            <h3 className="movieTitle">movie you watched</h3>
            <div className="">
              <span>2 movies</span>
              <span className="rate">8.56</span>
              <span className="rate">9.56</span>
              <span className="runTime">10 min</span>
            </div>

          </div>
          <ul className="list-box">

          <li className="movie-item">

              <img src="" alt="" />
              <div className="movie-item-info">
                <h3 className="movieTitle">mpvie title</h3>
              <span className="rate">8.56</span>
              <span className="rate">9.56</span>
              <span className="runTime">10 min</span>
              </div>
            </li>
          </ul>
         </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
