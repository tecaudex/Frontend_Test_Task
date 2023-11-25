import React, { useState } from 'react';

function Search({ movies, setFilteredMovies, setNoResults }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const trimtheSearchTerm = searchTerm.trim();

    if (trimtheSearchTerm === '') {
      setFilteredMovies([]);
      setNoResults(false);
      return;
    }

    const regex = new RegExp(trimtheSearchTerm, 'i');

    const filteredMovies = movies.filter((movie) => regex.test(movie.name));

    setFilteredMovies(filteredMovies);

    if (filteredMovies.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  };

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input
        type='text'
        placeholder='Search for movie by name'
        className='w-75 py-2'
        data-testid='search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onInput={handleSearch}
      />
    </section>
  );
}

export default Search;
