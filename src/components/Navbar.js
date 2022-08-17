import { Link } from "react-router-dom";

const Navbar = ({logout}) => {

  return (
    <nav className="navbar">
      <h1>The Poke App</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorite Pokemons</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
