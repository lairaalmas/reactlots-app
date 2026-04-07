import { Link } from "react-router-dom";

export const Header = () => {
  return <>
    <header>Header COMPONENT</header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/about">About</Link>
    </nav>
  </>;
}