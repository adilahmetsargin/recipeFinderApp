import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <h1 className="logo">Recipe Finder 🍳</h1>
      <nav>
        <Link to="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/favorites"
          className={pathname === "/favorites" ? "active" : ""}
        >
          Favorites
        </Link>
      </nav>
    </header>
  );
};

export default Header;
