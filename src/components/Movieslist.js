import React from "react";

function Movieslist({ movies }) {
  const sortedMovies = movies.sort((a, b) => {
    const durationA = parseFloat(a.duration);
    const durationB = parseFloat(b.duration);
    return durationB - durationA;
  });

  return (
    <section>
      <ul className="styled w-100 pl-0" data-testid="moviesList">
        {sortedMovies.map((movie, index) => (
          <li
            key={index}
            className="flex slide-up-fade-in justify-content-between"
            style={{ borderBottom: "2px solid var(--primary-color)" }}
          >
            <div className="layout-column w-40">
              <h3 className="my-3">{movie.name}</h3>
              <p className="my-0">Ratings: {movie.rating}/100</p>
            </div>
            <div className="layout-row my-auto mr-20">
              <p className="justify-content-end">{movie.duration} Hrs</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Movieslist;
