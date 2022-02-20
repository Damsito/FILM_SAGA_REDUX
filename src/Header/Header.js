import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  const favorites = useSelector((state) => state.favorites);
  return (
    <header className={"flex items-center px-4"}>
      <img src="/logo32.png" alt="Webflix log" />
      <h1>Webflix</h1>
      <nav className={"flex-grow flex justify-end"}>
        <Link to="/">Home</Link>
        <Link to="/favorites">{`Favorites (${favorites.length})`}</Link>
      </nav>
    </header>
  );
}

export default Header;
