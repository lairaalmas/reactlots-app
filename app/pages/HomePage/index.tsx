import { Link } from "react-router-dom";

const HomePage = () => <>
  <section>
    <h2>Banner</h2>
  </section>
  <section>
    <h2>Search Fields</h2>
    <div>
      <button className="btn my-3">mock click search</button>
    </div>
  </section>
  <section>
    <h2>Search Results</h2>
    <Link className="nav-link my-3 px-3" to="/lots/1">go to mocked lot</Link>
  </section>
</>;

export default HomePage;