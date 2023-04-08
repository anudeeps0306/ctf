import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-main-div">
        <div className="navbar__logo">
          <h1>Logo</h1>
        </div>
        <div className="navbar__links">
          <Link to="/" className="navbar-links">
            Home
          </Link>
          <Link to="/contest" className="navbar-links">
            Contest
          </Link>
          <Link to="/history" className="navbar-links">
            History
          </Link>
          <Link to="/create" className="navbar-links">
            Create
          </Link>
        </div>
      </div>
      <div className="navbar-button">
        <Link to='/signup'>
          <button className="navbar__button_signup">Sign Up</button>
        </Link>
        <Link to='/auth'>
          <button className="navbar__button_login">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
