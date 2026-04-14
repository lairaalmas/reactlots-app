import { Link } from "react-router-dom";

export const Header = () => {;
  return <>
    <header className="rl-header border-bottom py-3">
      <div className="container d-flex align-items-center justify-content-between">
        <h1>
          <Link className="nav-link d-flex gap-2" to="/">
            <span className="bi bi-house-fill sims-green" aria-hidden="true"></span>
            Reactlots
          </Link>
        </h1>
        <nav className="nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/favorites">Favorites</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  </>;
}