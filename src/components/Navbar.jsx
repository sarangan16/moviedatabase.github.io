import moviesBrand from "../assets/movies-brand.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark text-light">
      <div className="container">
        <Link to="/">
          <img
            src={moviesBrand}
            alt="Movies Brand"
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites" className="nav-link">
              FAVORITES
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
