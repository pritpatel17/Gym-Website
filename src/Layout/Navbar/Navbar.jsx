import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* <div className="NavbarMain">
        <Link to="/" className="navbar-brand">
          Easy
        </Link>

        <div>
          <h6>Its The Right Time To Start.</h6>
        </div>
      </div> */}

      {/* For Navbar Links */}
      <nav className="navbar navbar-expand">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/BlogPage">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
