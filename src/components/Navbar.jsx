import moviesBrand from '../assets/movies-brand.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
           <img
              src={moviesBrand}
              alt="Movies Brand"
              width="40"
              height="40"
              className="d-inline-block align-text-top"
            />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">HOME</a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">FAVORITES</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;