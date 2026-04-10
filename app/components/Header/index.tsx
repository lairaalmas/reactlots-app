import { Link } from "react-router-dom";

export const Header = () => {;
  return <>
    <header className="border-bottom py-3">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="d-flex gap-2">
          <span className="bi bi-house-fill sims-green"></span>
          <Link className="nav-link" to="/">Reactlots</Link>
        </h1>
        <nav className="nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/favorites">Favorites</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          <Link className="nav-link" to="/lots/1">Mock search lot</Link>
        </nav>
      </div>
    </header>
  </>;
}