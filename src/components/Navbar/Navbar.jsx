import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-main-div">
      <div className="navbar__logo">
        <h1>Logo</h1>
      </div>
      <div className="navbar__links">
        <a href="#" className="navbar-links">Home</a>
        <a href="#" className="navbar-links">Contest</a>
        <a href="#" className="navbar-links">History</a>
        <a href="#" className="navbar-links">Create</a>
      </div>
      </div>
      <div className="navbar-button">
        <button className="navbar__button_signup">Sign Up</button>
        <button className="navbar__button_login">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
