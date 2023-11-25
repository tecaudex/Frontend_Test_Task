import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import { Movieform, Movieslist, Search } from "./components";

const title = "Favorite Movie Directory";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <h8k-navbar header={title} />
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform addMovie={addMovie} />
        </div>
        <div className="layout-column w-30">
          <Search
            movies={movies}
            setFilteredMovies={setFilteredMovies}
            setNoResults={(value) => setNoResults(value)}
          />

          {noResults ? (
            <div data-testid="noResult">
              <h3 className="text-center">No Results Found</h3>
            </div>
          ) : (
            <Movieslist
              movies={filteredMovies.length > 0 ? filteredMovies : movies}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
