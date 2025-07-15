function MovieTile({ movie }) {
  function favoriteBtn() {
    alert("clicked");
  }

  return (
    <>
      <div className="container movie-tile">
        <div className="row">
          <div className="movie-img card col-md-3 mb-3">
            <img
              src="placeholder.png"
              alt={movie.title}
              className="card-img-top"
            />

            <div className="card-body movie-info">
              <h2 className="card-title">{movie.title}</h2>
              <p className="card-text">{movie.release_date}</p>
              {movie.genre && (
                <span className="badge bg-secondary">{movie.genre}</span>
              )}
              <div className="movie-overlay mt-3">
                <button
                  className="btn btn-light position-absolute top-0 end-0 m-2"
                  onClick={favoriteBtn}
                >
                  <i className="bi bi-hand-thumbs-up"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieTile;
