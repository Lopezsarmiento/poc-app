import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Poke App</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/favorite">Favorite Pokemons</Link>
      </div>
    </nav>
  );
};

export default Navbar;