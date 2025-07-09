function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">Movie Database</a>
        <ul>
          <li>home</li>
          <li>favorites</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;