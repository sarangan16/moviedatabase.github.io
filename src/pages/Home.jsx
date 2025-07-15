import { useState } from "react";
import MovieTile from "../components/MovieTile";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_date: 2020 },
    { id: 2, title: "Matrix", release_date: 2010 },
    { id: 3, title: "Terminator", release_date: 1970 },
    { id: 4, title: "Karkl", release_date: 1996 },
  ];

  return (
    <div className="home">
      <div className="search-movies container my-4">
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />
        <button className="btn btn-primary">Search Movies</button>
      </div>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieTile movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
