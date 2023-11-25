import React, { useState } from "react";

function Movieform({ addMovie }) {
  const [movieName, setMovieName] = useState("");
  const [ratings, setRatings] = useState("");
  const [duration, setDuration] = useState("");
  const [invalidDuration, setInvalidDuration] = useState(false);

  const handleInputChange = () => {
    setInvalidDuration(false);
  };

  const handleAddMovie = () => {
    if (!movieName || !ratings || !duration) {
      return;
    }

    const durationRegex = /^(\d+(\.\d+)?[hH]|[1-9]\d*[mM])$/;
    if (!duration.match(durationRegex)) {
      setInvalidDuration(true);
      return;
    }

    let convertedDuration;

    if (duration.toLowerCase().includes("h")) {
      convertedDuration = duration;
    } else if (duration.toLowerCase().includes("m")) {
      const minutes = parseFloat(duration);
      convertedDuration = `${minutes / 60}h`;
    } else if (!isNaN(parseFloat(duration))) {
      const minutes = parseFloat(duration);
      convertedDuration = `${minutes}m`;
    } else {
      setInvalidDuration(true);
      return;
    }

    const newMovie = {
      name: movieName,
      rating: parseInt(ratings),
      duration: convertedDuration,
    };
    addMovie(newMovie);

    setMovieName("");
    setRatings("");
    setDuration("");
  };

  return (
    <section>
      <div className="card pa-30">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="layout-column mb-15">
            <label htmlFor="name" className="mb-3">
              Movie Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Movie Name"
              data-testid="nameInput"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
              onInput={handleInputChange}
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="ratings" className="mb-3">
              Ratings
            </label>
            <input
              type="number"
              id="ratings"
              placeholder="Enter Rating on a scale of 1 to 100"
              data-testid="ratingsInput"
              value={ratings}
              onChange={(e) => setRatings(e.target.value)}
              onInput={handleInputChange}
            />
          </div>
          <div className="layout-column mb-30">
            <label htmlFor="duration" className="mb-3">
              Duration
            </label>
            <input
              type="text"
              id="duration"
              placeholder="Enter duration in hours or minutes"
              data-testid="durationInput"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              onInput={handleInputChange}
            />
          </div>
          {invalidDuration && (
            <div className="alert error mb-30" data-testid="alert">
              Please specify time in hours or minutes (e.g. 2.5h or 150m)
            </div>
          )}
          <div className="layout-row justify-content-end">
            <button
              type="submit"
              className="mx-0"
              data-testid="addButton"
              onClick={handleAddMovie}
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Movieform;
