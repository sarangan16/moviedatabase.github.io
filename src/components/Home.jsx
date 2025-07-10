function Home({ movie }) {
  function favoriteBtn() {
    alert("clicked");
  }

  return (
    <>
      <div className="search-movies container my-4">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search..." />
          <button className="btn btn-primary ">Search Movies</button>
        </div>
      </div>
      <div className="container movie-tile">
        <div className="row">
          <div className="movie-img card col-md-3 mb-3" key={movie.id}>
            <img
              src="placeholder.png"
              alt={movie.title}
              className="card-img-top"
            />

            <div className="card-body movie-info">
              <h2 className="card-title">{movie.title}</h2>
              <p className="card-text">{movie.release_date}</p>
              <span className="badge bg-secondary">{movie.genre}</span>
              <div className="movie-overlay mt-3">
                <button
                  className="btn btn-light position-absolute top-0 end-0 m-2"
                  onClick={() => favoriteBtn(movie)}
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

export default Home;
