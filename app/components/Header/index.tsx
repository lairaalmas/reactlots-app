import { Link } from "react-router-dom";

export const Header = () => {;
  return <>
    <header>Header COMPONENT</header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/lots/1">Mock search lot</Link></li>
      </ul>
    </nav>
  </>;
}